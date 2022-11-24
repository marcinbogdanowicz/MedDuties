import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import React from 'react'
import { createRoot } from 'react-dom/client';
import { 
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import indexLoader from './components/indexLoader';
import loginLoader from './components/loginLoader';
import menuLoader from './components/menuLoader';
import dutiesLoader from './components/dutiesLoader';
import dutySetterLoader from './components/dutySetterLoader';
import ErrorPage from './components/ErrorPage';
import DutySetter from './components/DutySetter';
import Duties from './components/Duties';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Main from './components/Main';
import App from './components/App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />,
                children: [
                    {
                        path: "/",
                        element: <div>Ładowanie strony...</div>,
                        loader: indexLoader
                    },
                    {
                        path: "login/",
                        element: <Login />,
                        loader: loginLoader
                    },
                    {
                        path: "register/",
                        element: <Register />,
                    },
                    {
                        path: "menu/",
                        element: <Menu />,
                        loader: menuLoader
                    }
                ]
            },
            {
                path: "duties/",
                element: <Duties />,
                loader: dutiesLoader
            },
            {
                path: "duties/:year/:month/",
                element: <DutySetter />,
                loader: dutySetterLoader
            },
        ]
    }
]);


const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>      
);

//     <BrowserRouter>