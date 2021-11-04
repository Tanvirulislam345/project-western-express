import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://scary-fangs-50055.herokuapp.com/myorders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);
    return (
        <Container className="my-5">
            <h2 className="pb-3 fw-bold text-info">All booked Package</h2>
            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>

                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>phone</th>
                        <th>Booking Place</th>
                        <th>Tour fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr
                                key={order._id}
                            >
                                <td>{order._id}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>{order.phone}</td>
                                <td>{order.packageName}</td>
                                <td>${order.tourFee}</td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </Container>
    );
};

export default ManageAllOrder;