import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.css';
import React, { lazy, Suspense } from 'react'
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
import doctorsLoader from './components/doctorsLoader';
import statisticsLoader from './components/statisticsLoader';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Register from './components/Register';
import Menu from './components/Menu';
import Main from './components/Main';
import App from './components/App';
import OverlaySpinner from './components/OverlaySpinner';

// Lazy load major views.
const Duties = lazy(() => import(/* webpackChunkName: 'duties' */ './components/Duties'));
const DutySetter = lazy(() => import(/* webpackChunkName: 'dutySetter' */ './components/DutySetter'));
const Doctors = lazy(() => import(/* webpackChunkName: 'doctors' */ './components/Doctors'));
const Statistics = lazy(() => import(/* webpackChunkName: 'statistics' */ './components/Statistics'));


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
            {
                path: "doctors/",
                element: <Doctors />,
                loader: doctorsLoader
            },
            {
                path: "statistics/",
                element: <Statistics />,
                loader: statisticsLoader
            },
        ]
    }
]);


const domContainer = document.getElementById('root');
const root = createRoot(domContainer);
root.render(
    <React.StrictMode>
        <Suspense fallback={<OverlaySpinner message="Ładowanie strony..." />}>
            <RouterProvider router={router} />
        </Suspense>
    </React.StrictMode>
);
