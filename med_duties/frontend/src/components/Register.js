import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosApi';
import logUserIn from './logUserIn';
import Alert from './Alert';
import MenuRow from './MenuRow';


export default function Register() {
    const navigate = useNavigate();
    const [registerData, setRegisterData] = React.useState({
        username: "",
        password: "",
        passwordRepeat: "",
        email: "",
        unitName: "",
        dutyPositions: "",
    });
    const [errors, setErrors] = React.useState({});
    const mobile = window.matchMedia("(max-width: 768px)").matches;

    const inputHandler = (event) => {
        const { name, value } = event.target;
        setRegisterData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check for invalid form fields.
        const newErrors = {};
        if (registerData.password.length === 0) {
            newErrors.password = "Proszę podać hasło."
        } else if (registerData.password !== registerData.passwordRepeat) {
            newErrors.password = "Hasła muszą się zgadzać!";
        }
        if (registerData.username.length === 0) {
            newErrors.username = "Proszę podać nazwę użytkownika.";
        }
        if (registerData.email.length === 0) {
            newErrors.email = "Proszę podać adres e-mail.";
        }
        if (registerData.unitName.length === 0) {
            newErrors.unitName = "Proszę podać nazwę oddziału.";
        }
        const acceptedDutyPositions = [1,2,3];
        if (registerData.dutyPositions === '') {
            newErrors.dutyPositions = "Proszę podać liczbę lekarzy na dyżur.";
        } else if (!acceptedDutyPositions.includes(parseInt(registerData.dutyPositions))) {
            newErrors.dutyPositions = "Obługiwany grafik dla 1 do 3 lekarzy na dyżur.";
        }

        // Prevent sending if form is filled incorrectly.
        if (Object.keys(newErrors).length != 0) {
            setErrors(newErrors);
            return;
        }

        // Proceed form.
        try {
            // Create user instance.
            const userResponse = await axiosInstance.post('/user/create/', {
                username: registerData.username,
                password: registerData.password,
                email: registerData.email,
                is_head_doctor: true
            });
            const userPk = userResponse.data.pk;

            // Log user in.
            await logUserIn(registerData.username, registerData.password);

            // Create unit instance.
            const unitResponse = await axiosInstance.post('/unit/', {
                name: registerData.unitName,
                duty_positions: registerData.dutyPositions
            });
            const unitPk = unitResponse.data.pk;

            // Update unit in user instance.
            const userUpdateReponse = await axiosInstance.patch(`/user/${userPk}/`, {
                unit: unitPk
            });

            // Redirect to menu.
            navigate('/menu/');

        } catch (error) {
            // Sort errors to correct state values to be displayed under fields.
            const newErrors = {...errors};
            if ('response' in error && 'data' in error.response) {
                for (const [key, value] of Object.entries(error.response.data)) {
                    newErrors[key] = value[0];
                }
                setErrors(newErrors);
            } else {
            // Other errors should be displayed in alert as 'general' error.
                setErrors((prevState) => ({
                    ...prevState,
                    general: 'Błąd przesyłania danych. Konto nie zostało utworzone.'
                }))
                console.log(error);
            }
        }
    }

    const dismissAlert = () => {
        setErrors((prevState) => ({
            ...prevState,
            general: ''
        }))
    }

    return (
        <MenuRow addedClass={mobile ? "login-register-mobile" : "login-register"}>

            <Form onSubmit={handleSubmit}>

                <h2 className="mb-5">Rejestracja</h2>
                
                <Form.Label>Dane użytkownika</Form.Label>

                <Form.Group className="mb-3">
                    <Form.Control type="text" name="username"
                        placeholder="Login" value={registerData.username}
                        onChange={inputHandler} />
                    {
                        errors.username && 
                            <Form.Text className="text-danger">
                                {errors.username}
                            </Form.Text>
                    }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="email" name="email"
                        placeholder="E-mail" value={registerData.email}
                        onChange={inputHandler} />
                    {
                        errors.email && 
                            <Form.Text className="text-danger">
                                {errors.email}
                            </Form.Text>
                    }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name="password"
                        placeholder="Hasło" value={registerData.password}
                        onChange={inputHandler} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="password" name="passwordRepeat"
                        placeholder="Hasło (powtórz)" value={registerData.passwordRepeat}
                        onChange={inputHandler} />
                    {
                        registerData.password !== registerData.passwordRepeat && 
                            <Form.Text className="text-danger">
                                Hasła muszą się zgadzać!
                            </Form.Text>
                    }
                    {
                        errors.password && 
                            <Form.Text className="text-danger">
                                {errors.password}
                            </Form.Text>
                    }
                </Form.Group>

                <Form.Label>Dane oddziału</Form.Label>

                <Form.Group className="mb-3">
                    <Form.Control type="text" name="unitName"
                        placeholder="Nazwa" value={registerData.unitName}
                        onChange={inputHandler} />
                    {
                        errors.unitName && 
                            <Form.Text className="text-danger">
                                {errors.unitName}
                            </Form.Text>
                    }
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control type="text" name="dutyPositions"
                        placeholder="Liczba lekarzy na dyżur"
                        value={registerData.dutyPositions} onChange={inputHandler} />
                    {
                        errors.dutyPositions && 
                            <Form.Text className="text-danger">
                                {errors.dutyPositions}
                            </Form.Text>
                    }
                </Form.Group>

                <Button className="mb-3" variant="primary" type="submit">Zarejestruj się</Button>

                <p>Masz już konto? <Link to="/login/">Zaloguj się</Link>.</p>
                
            </Form>
            { 
                errors.general && <Alert dismiss={dismissAlert} variant="danger" header="Błąd" clickToClose>{errors.general}</Alert>
            }
        </MenuRow>
    );
}
