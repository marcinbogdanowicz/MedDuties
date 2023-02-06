import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';
import axiosInstance from '../axiosApi';


export default async function dutiesLoader() {

    if (refreshTokenNotExpired()) {
        try {
            // Get user's pk from token.
            const refreshToken = localStorage.getItem('refresh_token');
            const tokenParts = JSON.parse(
                window.atob(refreshToken.split('.')[1]));
            const userId = tokenParts.user_id;

            // Get user's unit pk.
            const userResponse = await axiosInstance.get('/user/' + userId + '/');
            const unitPk = userResponse.data.unit;

            // Get unit data.
            const unitResponse = await axiosInstance.get(`/unit/${unitPk}/`);
            const unit = unitResponse.data;

            // Get unit's schedules data and pass it to view.
            const scheduleResponse = await axiosInstance.get('/unit/' + unitPk + '/duties/');
            const schedule = scheduleResponse.data;

            return [unit, schedule];

        } catch (error) {
            console.log(error);
        }
    }
    return redirect('/login/');
}