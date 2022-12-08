import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/api';

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 60000,
    headers: {
        'Authorization': localStorage.getItem('access_token') ? "JWT " + localStorage.getItem('access_token') : null,
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

axiosInstance.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error.config;

        /* ---- Handle login errors ---- */

        if (error.response.status === 401
            && error.response.statusText === 'Unauthorized'
            && originalRequest.url === '/token/obtain/') {
                const error = new Error("Niepoprawne dane logowania.")
                return Promise.reject(error);
            }
        /* ---- Handle token expired errors ---- */

        // Prevent infinite loops if refresh failed.
        else if (error.response.status === 401
                && error.response.statusText === 'Unauthorized'
                && originalRequest.url === '/token/refresh/') {
            return Promise.reject(error);
        }

        // Obtained new token if request was of any other kind.
        else if (error.response.status === 401
                && error.response.statusText === 'Unauthorized') {

            // Check if refresh token is stored.
            const refreshToken = localStorage.getItem('refresh_token');
            if (!refreshToken) {
                const error = new Error("Refresh token not available");
                return Promise.reject(error);
            }

            // Check if refresh token has expired.
            const tokenParts = JSON.parse(
                window.atob(refreshToken.split('.')[1]));
            const now = Math.ceil(Date.now() / 1000);
            if (tokenParts.exp <= now) {
                const error = "Refresh token expired";
                return Promise.reject(error);
            }

            // Refresh tokens.
            try {
                const refreshResponse = await axiosInstance.post('/token/refresh/', {refresh: refreshToken});
                localStorage.setItem('access_token', refreshResponse.data.access);
                localStorage.setItem('refresh_token', refreshResponse.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = "JWT " + refreshResponse.data.access;
                originalRequest.headers = {...originalRequest.headers, Authorization: "JWT " + refreshResponse.data.access};

                // Retry original request with new auth token.
                try {
                    return await axiosInstance(originalRequest);
                    
                } catch (error) {
                    return Promise.reject(error);
                }

            } catch(error) {
                return Promise.reject(error);
            }
        }
        // Return other errors to be handled elsewhere.
        else {
            return Promise.reject(error);
        }
    }
)

export default axiosInstance;
