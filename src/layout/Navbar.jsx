import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas, Card, Col, Row } from 'react-bootstrap';
import Logo from '../assets/img/layout/logo-dark.png';
import { BsSearch,BsPerson,BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";



const NavbarComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container fluid>
                <Navbar.Brand as={Link} to="/">
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
                                        <li><Link to="/product/sofa">SOFA & DAYBED</Link></li>
                                        <li><Link to="/product/sofa-modular">SOFA MODULAR</Link></li>
                                        <li><Link to="/product/armchair">ARMCHAIR</Link></li>
                                        <li><Link to="/product/stool">STOOL</Link></li>
                                        <li><Link to="/product/coffee-table">COFFEE TABLE</Link></li>
                                        <li><Link to="/product/side-table">SIDE TABLE</Link></li>
                                        <li><Link to="/product/console-table">CONSOLE TABLE</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DINING ROOM</p>
                                    <ul className="submenu">
                                        <li><Link to="/product/dining-table">DINING TABLE</Link></li>
                                        <li><Link to="/product/dining-chair">DINING CHAIR</Link></li>
                                        <li><Link to="/product/sideboard">SIDEBOARD</Link></li>
                                        <li><Link to="/product/bar-chair">BAR CHAIR</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">BED ROOM</p>
                                    <ul className="submenu">
                                        <li><Link to="/product/bed">BED</Link></li>
                                        <li><Link to="/product/bench">BENCH</Link></li>
                                        <li><Link to="/product/chest">CHEST</Link></li>
                                        <li><Link to="/product/bedside-table">BEDSIDE TABLE</Link></li>
                                        <li><Link to="/product/vanity">VANITY</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DECORATION</p>
                                    <ul className="submenu">
                                        <li><Link to="/product/lighting">LIGHTING</Link></li>
                                        <li><Link to="/product/vase">VASE</Link></li>
                                        <li><Link to="/product/mirror">MIRROR</Link></li>
                                        <li><Link to="/product/clock">CLOCK</Link></li>
                                        <li><Link to="/product/globe">GLOBE</Link></li>
                                        <li><Link to="/product/photo-frame">PHOTO FRAME</Link></li>
                                        <li><Link to="/product/accessories">ACCESSORIES</Link></li>
                                    </ul>
                                    </Col>
                                    <Col>
                                    <p className="menu">CARPET</p>
                                    <ul className="submenu">
                                        <li><Link to="/product/luxury-carpet">LUXURY CARPET</Link></li>
                                        <li><Link to="/product/regular-carpet">REGULAR CARPET</Link></li>
                                        <li><Link to="/product/sajadah">SAJADAH</Link></li>
                                    </ul>
                                    </Col>
                            </Row>
                            </Container>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about" >ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/store">STORE</Nav.Link>
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