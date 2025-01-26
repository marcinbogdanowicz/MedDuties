import { redirect } from 'react-router-dom';
import refreshTokenNotExpired from './refreshTokenNotExpired';


export default function indexLoader() {

    if (refreshTokenNotExpired()) {
        return redirect('/menu/');
    }

    return redirect('/login/');
}
