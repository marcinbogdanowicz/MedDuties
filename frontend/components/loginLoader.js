import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';


export default function loginLoader() {
    if (refreshTokenNotExpired()) {
        return redirect('/menu/');
    }
    // Proceed to login if token expired or there is none.
}
