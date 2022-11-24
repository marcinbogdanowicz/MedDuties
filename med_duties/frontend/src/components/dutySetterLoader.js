import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';
import axiosInstance from '../axiosApi';


export default async function dutySetterLoader({ params }) {

    if (refreshTokenNotExpired()) {
        try {
            // Get user's pk from token.
            const refreshToken = localStorage.getItem('refresh_token');
            const tokenParts = JSON.parse(
                window.atob(refreshToken.split('.')[1]));
            const userId = tokenParts.user_id;

            // Get user's unit pk.
            const userResponse = await axiosInstance.get('/user/' + userId + '/');
            const unitData = userResponse.data.unit;

            // Get unit doctors' details.
            const doctorsResponse = await axiosInstance.get('/unit/' + unitData.pk + '/doctors/');
            const doctorsData = doctorsResponse.data;

            // Get schedules details and return it.
            const scheduleResponse = await axiosInstance.get('/unit/' + unitData.pk + '/duties/' + params.year + '/' + params.month + '/');
            const scheduleData = scheduleResponse.data;

            return [unitData, doctorsData, scheduleData];

        } catch (error) {
            console.log(error);
            // Redirect to general duties view when getting schedule details failed.
            return redirect('/duties/');
        }
    } else {
        // Redirect to login when there is no token.
        return redirect('/login/');
    }
}