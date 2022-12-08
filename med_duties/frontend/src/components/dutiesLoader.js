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
            var response = await axiosInstance.get('/user/' + userId + '/');
            const unit = response.data.unit;

            // Get unit's schedules data and pass it to view.
            response = await axiosInstance.get('/unit/' + unit.pk + '/duties/');
            return [unit, response.data];
            
        } catch (error) {
            console.log(error);
        }
    }
    return redirect('/login/');
}