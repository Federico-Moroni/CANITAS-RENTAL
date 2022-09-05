import './HeroImage.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const HeroImage = () => {

    return(
        <Container className='HeroImageContainer' fluid>
            <Row>
                <Col className='HeroCol'>
                    <h1 className='HeroImageh1'>
                        <div className='Welcome'>Welcome to</div>
                        <div className='HeroMessage'>
                            <span className="word">Estancia Las Cañitas</span><span className='spancito'></span>
                        </div>
                    </h1>
                    <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1662321866/CANITAS%20RENTAL/home__picture_jlbdjq.jpg' className='HeroImg'></img>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImage
