import React, { useEffect, useState } from 'react';
import './Booking.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({});
    useEffect(() => {
        const url = `https://scary-fangs-50055.herokuapp.com/tourpackage/${bookingId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data));
    }, [bookingId]);

    const { img, name, tourFee, description,
        Rating } = booking;

    const { register, handleSubmit, reset } = useForm();
    const onsubmit = data => {
        axios.post('https://scary-fangs-50055.herokuapp.com/bookingpackage', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('servicess added succefully');
                    reset();
                }
            })
    }
    return (
        <Container>
            {/* <h2>this is booking {bookingId}</h2> */}
            <Row xs={1} sm={1} md={2} className="g-5 mb-4">
                <Col xs={12} sm={12} md={8} className="text-start">
                    <Card className="cardStyle">
                        <Card.Img variant="top"
                            src={img}
                            style={{ borderRadius: '10px', height: '370px' }}
                        />
                        <Card.Body>
                            <Card.Title> <h4 className="text-danger">{name}</h4> </Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Title className="price"> <h4 className="fw-bold">{tourFee}</h4><small>/per person</small>
                            </Card.Title>
                            <Card.Title> <h5 className="text-warning">{Rating}</h5> </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={4} className="form">
                    <h3 className="text-info fw-bold">Book This Package</h3>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <input {...register("name")} value={user.displayName} />
                        <input type="email" {...register("email")} value={user.email} />
                        <input type="number" {...register("phone")} placeholder="Phone number" />
                        <input type="text" {...register("packageName")} placeholder="Enter your package name" />
                        <input type="number" {...register("tourFee")} placeholder="Fee for tour" />
                        <input type="submit" />
                    </form>
                </Col>

            </Row>
        </Container>
    );
};

export default Booking;