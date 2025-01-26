import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';
import axiosInstance from '../axiosApi';


export default async function statisticsLoader() {

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

            // Get unit doctors' data and pass it to view.
            const doctorsResponse = await axiosInstance.get('/unit/' + unitPk + '/doctors/');
            const doctors = doctorsResponse.data;
            return [unit, doctors];

        } catch (error) {
            console.log(error);
        }
    }
    return redirect('/login/');
}