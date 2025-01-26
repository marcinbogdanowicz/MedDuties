import axiosInstance from '../axiosApi';


export default async function logUserIn(username, password) {

    const response = await axiosInstance.post('/token/obtain/', {
        username: username,
        password: password
    });

    axiosInstance.defaults.headers['Authorization'] = 
        "JWT " + response.data.access;
    localStorage.setItem('access_token', response.data.access);
    localStorage.setItem('refresh_token', response.data.refresh);

}
