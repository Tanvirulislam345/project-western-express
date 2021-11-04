import React from 'react';
import './Footer.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footerCover">
            <Container>
                <Row xs={1} sm={2} md={4} className=" py-5">
                    <Col>
                        <div className="footerLink">
                            <h3>WesternExpress</h3>
                            <Link to="#" className="link">Term</Link><br />
                            <Link to="#" className="link">Licenses</Link><br />
                            <Link to="#" className="link">Market Api</Link><br />
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink">
                            <h3>Contact Us</h3>
                            <div>
                                <Link to="#" className="link">+01852-1265122 <br />+01852-1265122</Link><br />

                            </div>
                            <div>
                                <Link to="#" className="link">info@westernexpress.com <br />support@westernexpress.com</Link><br />
                            </div>
                            <div>
                                <Link to="#" className="link">275/A Dhanmondhi,<br />Dhaka, Bangladesh</Link><br />
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink">
                            <h3>Our Community</h3>
                            <Link to="#" className="link">About us</Link><br />
                            <Link to="#" className="link">Community</Link><br />
                            <Link to="#" className="link">Blog</Link><br />
                            <Link to="#" className="link">Forums</Link><br />
                            <Link to="#" className="link">Meetup</Link><br />
                        </div>
                    </Col>
                    <Col>
                        <div className="footerLink p-5">
                            <img src="https://i.ibb.co/6RV39WQ/copy.jpg" alt=""
                                width="200px"
                                style={{ borderRadius: '10px' }}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <p className="copyright pb-2"><small>Licenses copyright @ by westernexpress</small></p>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;