import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';
import axiosInstance from '../axiosApi';


export default async function menuLoader() {

    if (refreshTokenNotExpired()) {
        try {
            // Get data - check if user is head doctor.
            const refreshToken = localStorage.getItem('refresh_token');
            const tokenParts = JSON.parse(
                window.atob(refreshToken.split('.')[1]));
            const userId = tokenParts.user_id;
            const response = await axiosInstance.get('/user/' + userId + '/');
            return response.data.is_head_doctor;
        } catch (error) {
            console.log(error);
        }
    }
    return redirect('/login/');
}