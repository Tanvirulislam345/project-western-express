import React from 'react';
import './Banner.css';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item className="slider">
                    <Carousel.Caption className="caption">
                        <h1>Amazing Tour <br /> in Hampshire</h1>
                        <h3 className="text-warning">7 days, 8 Night Tour</h3>
                        <Link to="/package">
                            <Button variant="outline-warning">Book now</Button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        src="https://images.unsplash.com/photo-1568056358788-45e19d19c528?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGxpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="slider">
                    <Carousel.Caption className="caption">
                        <h1>Amazing Tour <br /> in NepalHill</h1>
                        <h3 className="text-warning">7 days, 8 Night Tour</h3>
                        <Link to="/package">
                            <Button variant="outline-warning">Book now</Button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        src="https://images.unsplash.com/photo-1611815043746-c9e3ec5d3496?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRyYXZlbGVyfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                        alt="second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="slider">
                    <Carousel.Caption className="caption">
                        <h1>Amazing Tour <br /> in Madagascar</h1>
                        <h3 className="text-warning">7 days, 8 Night Tour</h3>
                        <Link to="/package">
                            <Button variant="outline-warning">Book now</Button>
                        </Link>
                    </Carousel.Caption>
                    <img
                        src="https://images.pexels.com/photos/815880/pexels-photo-815880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;