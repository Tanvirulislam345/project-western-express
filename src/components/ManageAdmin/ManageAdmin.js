import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageAdmin.css';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const ManageAdmin = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit, reset } = useForm();
    const onsubmit = data => {
        // console.log(data)
        axios.post('https://scary-fangs-50055.herokuapp.com/tourpackage', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('servicess added succefully');
                    reset();
                }
            })
    }

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
    return (
        <Container className="py-5">
            <Row xs={1} sm={1} md={2}>
                <Col xs={12} sm={12} md={8}>
                    <h2 className="py-3 fw-bold text-info">All booking package</h2>
                    <Table striped bordered hover variant="dark" responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>phone</th>
                                <th>Booking Place</th>
                                <th>Booking Fee</th>
                                {/* <th>Update</th> */}
                                <th>Delete</th>
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
                                        {/* <td><input type="submit" value="update" /></td> */}
                                        <td><input type="submit" value="cancel" onClick={() => handleDelete(order._id)} /></td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </Table>
                </Col>
                <Col xs={12} sm={12} md={4}>
                    <div className="adminForm">
                        <h3 className="py-3 fw-bold text-info">Add a new Package</h3>
                        <form onSubmit={handleSubmit(onsubmit)}>
                            <input {...register("name")} placeholder="Enter a package name" />
                            <input type="text" {...register("tourFee")} placeholder="Enter Tour Fee" />
                            <textarea {...register("description")} placeholder="Description" />
                            <input type="text" {...register("Rating")} placeholder="Enter a rating" />
                            <input type="text" {...register("img")} placeholder="Enter a img url" />
                            <input type="submit" />
                        </form>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default ManageAdmin;