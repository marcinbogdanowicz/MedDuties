
export default function refreshTokenNotExpired() {
    const refreshToken = localStorage.getItem('refresh_token');

    if (refreshToken) {
        const tokenParts = JSON.parse(
            window.atob(refreshToken.split('.')[1]));
        const now = Math.ceil(Date.now() / 1000);

        if (tokenParts.exp > now) {
            return true;
        } else {
            // Make sure expired refresh token is is removed.
            localStorage.removeItem('refresh_token');
        }
    }
    return false;
}