import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Logo from '../assets/img/layout/logo-dark.png';
import { BsInstagram,BsFacebook,BsYoutube } from "react-icons/bs";
import { AiOutlineYoutube,AiOutlineFacebook } from "react-icons/ai";
import { BiLogoFacebook,BiLogoInstagram } from "react-icons/bi";


const FooterComp = () => {
    return(
       <div className="bg-dark p-5">
         <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <img src={Logo} alt="Logo"/>
                    <p className="text-light mt-3 p-3">There is nothing more personal than decorating your home and choosing the right piece of furniture to fit the look you have envisioned. This is why Grandome would like to offer you its products.</p>
        
                    <div className="p-3">
                        <h5 className="text-light">Follow Us On</h5>
                        <div className="text-light">
                            <BiLogoFacebook className="social-icon"/>
                            <BiLogoInstagram className="social-icon"/>
                            <BsYoutube className="social-icon"/>
                        </div>
                    </div>
                
                </Col>
                <Col className="text-light" md={6}>
                    <Row className="p-5">
                        <Col md={6}>
                            <h5 >Store</h5>
                                <ul>
                                    <li>Warung Jati</li>
                                    <li>Fatmawati</li>
                                    <li>Singapore</li>
                                </ul>
                        </Col>
                        <Col md={6}>
                            <h5 >Usefull Link</h5>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Terms and Conditions</li>
                                </ul>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="text-center text-secondary mt-5">
                @Grandome2023
            </div>
        </Container>
       </div>
    );
}

export default FooterComp;