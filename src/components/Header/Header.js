import React, { useState } from 'react';
import { Container, Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { user, signOutUsingGoogle } = useAuth();
    // console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <h4 className="fw-bold text-warning">WesternExpress</h4>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/package">Tour package</Nav.Link>
                            <Nav.Link as={Link} to="/blog">Our blog</Nav.Link>
                            <Nav.Link as={Link} to="/traveler">Our Traveler</Nav.Link>

                        </Nav>
                        {
                            !user?.email ?
                                <Nav>
                                    <Nav.Link as={Link} to="/login">LogIn</Nav.Link>
                                    <Nav.Link as={Link} to="/login">SignUp</Nav.Link>
                                </Nav>
                                :
                                <Nav>
                                    <button /* onClick={signOutUsingGoogle} */
                                        onClick={handleShow}
                                        style={{ borderRadius: '50px', color: 'red' }}
                                    >{user.displayName}
                                    </button>
                                    <>
                                        <Offcanvas show={show} placement="end" onHide={handleClose}
                                            style={{ marginTop: '63px' }}
                                        >
                                            <Offcanvas.Body >
                                                <div className="App">
                                                    <img src={user.photoURL} alt=""
                                                        style={{ width: '50px', height: '50px', borderRadius: '50px' }}
                                                    /> <br />
                                                    <h5>{user.displayName}</h5>
                                                    <h6>{user.email}</h6>
                                                </div>
                                                <div className="my-5">
                                                    <Nav>
                                                        <Nav.Link as={Link} to="/admin">
                                                            <Button variant="outline-warning"
                                                                className="w-100"
                                                            >Admin</Button>
                                                        </Nav.Link>
                                                        <Nav.Link as={Link} to="/myorders">
                                                            <Button variant="outline-danger"
                                                                className="w-100 my-2"
                                                            >My Booking</Button>
                                                        </Nav.Link>
                                                        <Nav.Link as={Link} to="/manageorders">
                                                            <Button variant="outline-success"
                                                                className="w-100"
                                                            >Manage All Booking</Button>
                                                        </Nav.Link>
                                                    </Nav>
                                                    <Button onClick={signOutUsingGoogle}
                                                        className="w-100 fw-bold mt-4"
                                                    >
                                                        log out
                                                    </Button>
                                                </div>
                                            </Offcanvas.Body>
                                        </Offcanvas>
                                    </>
                                </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;