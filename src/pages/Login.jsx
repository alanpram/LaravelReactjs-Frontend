import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import LoginImg from '../assets/img/layout/login-img.png';
import getAuthTokenFromCookie from './getAuthTokenFromCookie';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const navigate = useNavigate();
    const token = getAuthTokenFromCookie();

    useEffect(() => {
        if (token) {
            navigate('/profile');
        }
    },[token])
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:1234/api/login', {
                email,
                password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response) {
            
                 document.cookie = `token=${response.data.access_token}; path=/;`;

                 navigate('/profile')
            } else {
                
                console.error('Login failed');
            }
        } catch (error) {
            
            console.error('An error occurred', error);
        }
    };

    return(
        
        <Container fluid className='content-body'>
            <span>Home / Login</span>
            <Container>
                <Row className="shadow mt-5 mb-5">
                    <Col md={5} className="p-5">
                        <h4>Log In Your <br/> Account</h4>
                        <p>Check your order status, update your billing info, and see your purchases history</p>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="*********"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <div>
                                <span>Forgot Your Password</span>
                            </div>
                            <Button onClick={handleSubmit} className="mt-5">Log In</Button>
                            <div className="mt-3">
                                <span>Don't have an account ? Sign Up</span>
                            </div>
                        </Form>
                    </Col>
                    <Col md={7} className="login-image">
                        <img className="login-image" src={LoginImg}/>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Login;