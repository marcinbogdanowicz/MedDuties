import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import logUserIn from './logUserIn';
import Alert from './Alert';
import MenuRow from './MenuRow';


export default function Login() {
    const navigate = useNavigate();
    const [userData, setUserData] = React.useState({
        username: '',
        password: '',
    });
    const [message, setMessage] = React.useState('');
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Log user in and redirect to menu.
            await logUserIn(userData.username, userData.password);
            navigate('/menu/');
        } catch (error) {
            if (error.status === 401) {
                setMessage('Niepoprawne dane logowania.');
            } else {
                setMessage('Podczas logowania wystąpił błąd.')
            }
            console.log(error);
        }
    }

    const dismissAlert = () => {
        setMessage('');
    }

    return (
        <MenuRow addedClass={mobile ? "login-register-mobile" : "login-register"}>
            <Form onSubmit={handleSubmit}>
                <h2 className="mb-5">Logowanie</h2>
                <Form.Group className="mb-3">
                    <Form.Control type="text" name="username"
                        placeholder="Login" value={userData.username}
                        onChange={inputHandler} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password"
                        placeholder="Hasło" value={userData.password}
                        onChange={inputHandler} />
                </Form.Group>
                <Button className="mb-3" variant="primary" type="submit">Login</Button>
                <p>Nie masz konta? Utwórz je <Link to="/register/">tutaj</Link>.</p>
            </Form>
            { 
                message && <Alert dismiss={dismissAlert} variant="danger" header="Błąd!" clickToClose>{message}</Alert> 
            }
        </MenuRow>
    );
}