import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const Traveler = () => {
    const [travelers, setTravelers] = useState([])
    useEffect(() => {
        fetch('https://scary-fangs-50055.herokuapp.com/traveler')
            .then(res => res.json())
            .then(data => setTravelers(data));
    }, []);

    return (
        <Container>
            <h2 className="text-info fw-bold mt-5 mb-3">What Our Traveller Say <br /> About Us</h2>
            <Row xs={1} sm={2} md={3} className="g-4 mb-4">

                {
                    travelers.map(traveler => <Col
                        key={traveler._id}
                    >
                        <Card className="cardStyle py-5">
                            <Card.Img variant="top"
                                src={traveler.img}
                                style={{ borderRadius: '150px', height: '150px', width: '150px' }}
                                className="mx-auto"
                            />
                            <Card.Body>
                                <Card.Title> <h4 className="fw-bold text-danger fw-bold">{traveler.name}</h4> </Card.Title>
                                <Card.Title> <h4 className="fw-bold text-warning fw-bold">Traveler</h4> </Card.Title>
                                <Card.Text className="pt-3">
                                    {traveler.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>)
                }

            </Row>
        </Container>
    );
};

export default Traveler;