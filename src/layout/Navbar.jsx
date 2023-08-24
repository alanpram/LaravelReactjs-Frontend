import React, { useState, useEffect, useRef } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas, Card, Col, Row } from 'react-bootstrap';
import Logo from '../assets/img/layout/logo-dark.png';
import { BsSearch, BsPerson, BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";



const NavbarComponent = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    //set sidebar to open and close
    const toggleOffcanvas = () => {
        setShowOffcanvas(!showOffcanvas);
    }

    //set dropdown menu to open and close
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    useEffect(() => {
        // Function to close dropdown when clicking outside of it
        const closeDropdown = (event) => {
            if (dropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        // Add event listener when the component mounts
        document.addEventListener("click", closeDropdown);

        // Remove event listener when the component unmounts
        return () => {
            document.removeEventListener("click", closeDropdown);
        };
    }, [dropdownOpen]);

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
                        <NavDropdown
                            title="PRODUCTS"
                            id="basic-nav-dropdown"
                            className="dropdown-custom"
                            show={dropdownOpen}
                            onClick={toggleDropdown}
                            ref={dropdownRef} 
                        >
                            <Container>
                                <Row>
                                    <Col className="submenu-border">
                                    <p className="menu">LIVING ROOM</p>
                                    <ul className="submenu">
                                        <li><Link to="/product-list/sofa">SOFA & DAYBED</Link></li>
                                        <li><Link to="/product-list/sofa-modular">SOFA MODULAR</Link></li>
                                        <li><Link to="/product-list/armchair">ARMCHAIR</Link></li>
                                        <li><Link to="/product-list/stool">STOOL</Link></li>
                                        <li><Link to="/product-list/coffee-table">COFFEE TABLE</Link></li>
                                        <li><Link to="/product-list/side-table">SIDE TABLE</Link></li>
                                        <li><Link to="/product-list/console-table">CONSOLE TABLE</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DINING ROOM</p>
                                    <ul className="submenu">
                                        <li><Link to="/product-list/dining-table">DINING TABLE</Link></li>
                                        <li><Link to="/product-list/dining-chair">DINING CHAIR</Link></li>
                                        <li><Link to="/product-list/sideboard">SIDEBOARD</Link></li>
                                        <li><Link to="/product-list/bar-chair">BAR CHAIR</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">BED ROOM</p>
                                    <ul className="submenu">
                                        <li><Link to="/product-list/bed">BED</Link></li>
                                        <li><Link to="/product-list/bench">BENCH</Link></li>
                                        <li><Link to="/product-list/chest">CHEST</Link></li>
                                        <li><Link to="/product-list/bedside-table">BEDSIDE TABLE</Link></li>
                                        <li><Link to="/product-list/vanity">VANITY</Link></li>
                                    </ul>
                                    </Col>
                                    <Col className="submenu-border">
                                    <p className="menu">DECORATION</p>
                                    <ul className="submenu">
                                        <li><Link to="/product-list/lighting">LIGHTING</Link></li>
                                        <li><Link to="/product-list/vase">VASE</Link></li>
                                        <li><Link to="/product-list/mirror">MIRROR</Link></li>
                                        <li><Link to="/product-list/clock">CLOCK</Link></li>
                                        <li><Link to="/product-list/globe">GLOBE</Link></li>
                                        <li><Link to="/product-list/photo-frame">PHOTO FRAME</Link></li>
                                        <li><Link to="/product-list/accessories">ACCESSORIES</Link></li>
                                    </ul>
                                    </Col>
                                    <Col>
                                    <p className="menu">CARPET</p>
                                    <ul className="submenu">
                                        <li><Link to="/product-list/luxury-carpet">LUXURY CARPET</Link></li>
                                        <li><Link to="/product-list/regular-carpet">REGULAR CARPET</Link></li>
                                        <li><Link to="/product-list/sajadah">SAJADAH</Link></li>
                                    </ul>
                                    </Col>
                            </Row>
                            </Container>
                        </NavDropdown>
                        <Nav.Link as={Link} to="/about">ABOUT US</Nav.Link>
                        <Nav.Link as={Link} to="/store" >STORE</Nav.Link>
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