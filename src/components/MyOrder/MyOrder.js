import React, { useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user, isLogining } = useAuth();
    const [orders, setOrders] = useState([]);
    // const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch('https://scary-fangs-50055.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    const handleDelete = id => {
        const proced = window.confirm('Are you want to cancel this booking ?');
        if (proced) {
            const uri = `https://scary-fangs-50055.herokuapp.com/myorders/${id}`;
            console.log(uri);
            fetch(uri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount > 0) {
                        alert('cancel your booking successfully');
                        const remainingOrder = orders.filter(order => order._id !== id);
                        setOrders(remainingOrder);
                    }
                });
        }
    }

    if (isLogining) {
        return <Spinner animation="border" variant="secondary" />
    }
    const myOrders = orders.filter(le => user?.email === le.email);

    return (
        <Container className="my-5">
            <h2 className="pb-3 fw-bold text-info">All Package you booked</h2>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>

                        <th>ProductId</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Booking Place</th>
                        <th>TourFee</th>
                        <th>Booking cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myOrders.map(order =>
                            <tr
                                key={order._id}
                            >
                                <td>{order._id}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.packageName}</td>
                                <td>${order.tourFee}</td>
                                <td><input type="submit" value="cencel" onClick={() => handleDelete(order._id)} /></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default MyOrder;