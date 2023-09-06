import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import getAuthTokenFromCookie from "./getAuthTokenFromCookie";

function Profile() {
    const token = getAuthTokenFromCookie();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return (
        <Container fluid className='content-body'>
            <p>Profile</p>
        </Container>
    );
}

export default Profile;
