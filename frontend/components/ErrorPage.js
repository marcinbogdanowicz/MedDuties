import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";
import React from 'react';

export default function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <Container fluid className="d-flex align-items-center justify-content-center vh-100 w-100 p-0 m-0 bg-light">
            <div>
                <center>
                    <h1>Uuuups!</h1>
                    <p>Coś poszło nie tak</p>
                    <p>
                        <i>- {error.statusText || error.message } -</i>
                    </p>
                </center>
            </div>
        </Container>
    );
};