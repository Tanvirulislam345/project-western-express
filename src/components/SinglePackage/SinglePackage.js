import React from 'react';
import './SinglePackage.css';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SinglePackage = (props) => {
    const { _id, img, name, tourFee,
        Rating } = props.packages;
    return (
        <div className="text-start">
            <Col>
                <Card className="cardStyle">
                    <Card.Img variant="top"
                        src={img}
                        style={{ borderRadius: '10px', height: '235px' }}
                    />
                    <Card.Body>
                        <Card.Title className="price"> <h5 className="fw-bold">{tourFee}</h5><small>/per person</small>
                        </Card.Title>
                        <Card.Title> <h4 className="text-danger">{name}</h4> </Card.Title>
                        <Card.Text>
                            {Rating}
                        </Card.Text>
                        <Link to={`/booking/${_id}`}>
                            <Button variant="outline-warning" className="te">Booking now</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SinglePackage;