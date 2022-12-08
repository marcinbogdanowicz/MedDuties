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
            const userURL = `/user/${userId}/`;
            const userResponse = await axiosInstance.get(userURL);
            const unitData = userResponse.data.unit;

            // Get unit doctors' details.
            const doctorsURL = `/unit/${unitData.pk}/doctors/`;
            const doctorsResponse = await axiosInstance.get(doctorsURL);
            const doctorsData = doctorsResponse.data;

            // Get schedules details.
            const scheduleURL = `/unit/${unitData.pk}/duties/${params.year}/${params.month}/`;
            const scheduleResponse = await axiosInstance.get(scheduleURL);
            const scheduleData = scheduleResponse.data;

            var prevDutiesData = [];
            var nextDutiesData = [];

            try {
                // Get previous months duties.
                const prevDutiesYear = params.month === '1' ? parseInt(params.year)-1 : params.year;
                const prevDutiesMonth = params.month === '1' ? '12' : parseInt(params.month)-1;
                const prevDutiesURL = `/unit/${unitData.pk}/duties/${prevDutiesYear}/${prevDutiesMonth}/duty/`;
                const prevDutiesResponse = await axiosInstance.get(prevDutiesURL);
                prevDutiesData = prevDutiesResponse.data;
            } catch (error) {
                //pass
            }

            try {
                // Get next months duties.
                const nextDutiesYear = params.month === '12' ? parseInt(params.year)+1 : params.year;
                const nextDutiesMonth = params.month === '12' ? '1' : parseInt(params.month)+1;
                const nextDutiesURL = `/unit/${unitData.pk}/duties/${nextDutiesYear}/${nextDutiesMonth}/duty/`;
                const nextDutiesResponse = await axiosInstance.get(nextDutiesURL);
                nextDutiesData = nextDutiesResponse.data;
            } catch (error) {
                //pass
            }

            return [unitData, doctorsData, scheduleData, prevDutiesData, nextDutiesData];

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