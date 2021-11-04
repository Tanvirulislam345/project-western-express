import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './OurBlog.css';

const OurBlog = () => {
    return (
        <div className="blogCover">
            <Container>
                <h3 className="App fw-bold pt-5">WesternExpress <span className="text-danger">Blogs</span></h3>
                <Row xs={1} sm={2} md={2}>
                    <Col className="p-5">
                        <img src="https://images.unsplash.com/photo-1528846328457-87c98b48ef37?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYXZlbGxpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""
                            className="blogImage w-100 h-100" />
                    </Col>
                    <Col className="blogDetails">
                        <div>
                            <h4 className="fw-bold text-info">Simon English</h4>
                            <p>
                                Dramatic rugged mountains touching the clouds, hills covered in banana plantations, ocean as far as the eye can see, majestic waterfalls, hikes along waterways… Madeira offers the ideal island escape, a perfect part of Portugal to explore. <br /><br />
                                Nearly four years after moving to Portugal my feet finally set foot on the rugged, volcanic island of Madeira. Over the next few days and weeks, as I explored, I’d quickly realise what a mistake it had been waiting so long to visit. The photos of Madeira I’d seen online before had either been moody and foggy or cruise-ships and crowded. In reality, it’s a perfect paradise that packs a lot in.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row xs={1} sm={2} md={2}>
                    <Col className="blogDetails">
                        <div>
                            <h3 className="fw-bold text-primary">Brandon Eli </h3>
                            <p>
                                I’m originally from Quebec, Canada. Back in the days, I used to be a social worker. I used to travel once a year for about a month and I was always spending my summers in Europe since I was 20 years old. In June 2014, I started my journey around the world at the age of 25 <br /><br />
                                In my most broken chapters of my life, I’ve been able to wipe away the tears and virtual scars and shake my head in disbelief like, “WOW, God I would’ve never learned this lesson had You not put me through that season of grief. <br /><br />
                                If you don't have much experience or knowledge about booking a hotel, it can be not very comforting. The features, views, and locations of hotels all differ significantly - and often, price.
                            </p>
                        </div>
                    </Col>
                    <Col className="p-5">
                        <img src="https://images.unsplash.com/photo-1609203273185-891fa1029588?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYXZlbGxpbmd8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt=""
                            className="blogImage w-100 h-100" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default OurBlog;