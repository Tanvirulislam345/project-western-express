import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';

const TourPackage = () => {
    const [tourPackage, setTourPackage] = useState([])
    useEffect(() => {
        fetch('https://scary-fangs-50055.herokuapp.com/tourpackage')
            .then(res => res.json())
            .then(data => setTourPackage(data));
    }, []);

    return (
        <Container>
            <h2 className="text-info fw-bold mt-5 mb-3">Our Package</h2>
            <Row xs={1} sm={2} md={3} className="g-4 mb-4">

                {
                    tourPackage.map(packages => <SinglePackage
                        key={packages._id}
                        packages={packages}
                    >
                    </SinglePackage>)
                }

            </Row>
        </Container>
    );
};

export default TourPackage;