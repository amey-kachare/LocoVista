import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import "./contribute.css";
import shop from "../assets/images/shop.jpeg";
import food from "../assets/images/food.jpeg";
import guide1 from "../assets/images/guide1.jpeg";
import car from "../assets/images/car.jpeg";
const Contribute = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        alert(`Are you sure to contribute ?`);
        navigate("/contri");
    };
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='emergency'>
                        <div>
                            <img src={shop} alt='' />
                            <Button
                                className='btn primary_btn w-100 mt-4'
                                onClick={handleClick}
                            >
                                Shop
                            </Button>
                        </div>
                    </Col>
                    <Col lg='12' className='emergency  '>
                        <div>
                            <img src={food} alt='' />
                            <Button
                                className='btn primary_btn w-100 mt-4'
                                onClick={handleClick}
                            >
                                Food
                            </Button>
                        </div>
                    </Col>
                    <Col lg='12' className='emergency '>
                        <div>
                            <img src={guide1} alt='' />
                            <Button
                                className='btn primary_btn w-100 mt-4'
                                onClick={handleClick}
                            >
                                Guide
                            </Button>
                        </div>
                    </Col>
                    <Col lg='12' className='emergency '>
                        <div>
                            <img src={car} alt='' />
                            <Button
                                className='btn primary_btn w-100 mt-4'
                                onClick={handleClick}
                            >
                                Car-rental
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contribute;
