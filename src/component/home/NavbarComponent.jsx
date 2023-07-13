import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Button, Offcanvas } from 'react-bootstrap';
import Logo from '../../assets/img/layout/logo-dark.png';

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
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1">LIVING ROOM</Nav.Link>
                    <Nav.Link href="#action2">DINING ROOM</Nav.Link>
                    <Nav.Link href="#action2">BEDROOM</Nav.Link>
                    <Nav.Link href="#action2">DECORATION</Nav.Link>
                    <Nav.Link href="#action2">CARPETS</Nav.Link>
                    </Nav>
                    <div className="d-flex">
                        <Button variant="outline-success">Search</Button>
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
