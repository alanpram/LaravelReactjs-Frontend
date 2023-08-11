import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas, Card, Col, Row } from 'react-bootstrap';
import Logo from '../../assets/img/layout/logo-dark.png';
import { BsSearch,BsPerson,BsCart4 } from "react-icons/bs";



const NavbarComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container fluid>
                <Navbar.Brand href="#">
                    <img src={Logo} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleOffcanvas} />
                <Navbar.Collapse id="navbarScroll" className='d-none'>
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                        >
                        <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" className="dropdown-custom">
                            <Container>
                                <Row>
                                    <Col className="submenu-border">
                                    <p className="menu">LIVING ROOM</p>
                                    <ul className="submenu">
                                        <li><a href="#">SOFA & DAYBED</a></li>
                                        <li><a href="#">SOFA MODULAR</a></li>
                                        <li><a href="#">ARMCHAIR</a></li>
                                        <li><a href="#">STOOL</a></li>
                                        <li><a href="#">COFFEE TABLE</a></li>
                                        <li><a href="#">SIDE TABLE</a></li>
                                        <li><a href="#">CONSOLE TABLE</a></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DINING ROOM</p>
                                    <ul className="submenu">
                                        <li><a href="#">DINING TABLE</a></li>
                                        <li><a href="#">DINING CHAIR</a></li>
                                        <li><a href="#">SIDEBOARD</a></li>
                                        <li><a href="#">BAR CHAIR</a></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">BED ROOM</p>
                                    <ul className="submenu">
                                        <li><a href="#">BED</a></li>
                                        <li><a href="#">BENCH</a></li>
                                        <li><a href="#">CHEST</a></li>
                                        <li><a href="#">BEDSIDE TABLE</a></li>
                                        <li><a href="#">VANITY</a></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DECORATION</p>
                                    <ul className="submenu">
                                        <li><a href="#">LIGHTING</a></li>
                                        <li><a href="#">VASE</a></li>
                                        <li><a href="#">MIRROR</a></li>
                                        <li><a href="#">CLOCK</a></li>
                                        <li><a href="#">GLOBE</a></li>
                                        <li><a href="#">PHOTO FRAME</a></li>
                                        <li><a href="#">ACCESSORIES</a></li>
                                    </ul>
                                    </Col>
                                    <Col>
                                    <p className="menu">CARPET</p>
                                    <ul className="submenu">
                                        <li><a href="#">LUXURY CARPET</a></li>
                                        <li><a href="#">REGULAR CARPET</a></li>
                                        <li><a href="#">SAJADAH</a></li>
                                    </ul>
                                    </Col>
                            </Row>
                            </Container>
                        </NavDropdown>
                        <Nav.Link href="#action2">ABOUT US</Nav.Link>
                        <Nav.Link href="#action2">STORE</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <BsSearch className="text-light" style={{ fontSize: 17, marginRight: '22px',marginLeft:'50px',marginTop:'3px' }} />
                        <BsCart4 className="text-light" style={{ fontSize: 20, marginRight: '20px' }} />
                        <BsPerson className="text-light" style={{ fontSize: 20 }} />
                    </div>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            <Offcanvas show={showOffcanvas} onHide={toggleOffcanvas} placement="start">
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className="flex-column">
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
}

export default NavbarComponent;
