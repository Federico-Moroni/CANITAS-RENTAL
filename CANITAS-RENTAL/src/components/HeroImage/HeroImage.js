/* IMPORTS */

// SCSS import:
import './HeroImage.scss';
import './HeroImageMediaQuery.scss'
// Components import:
import CheckAvailability from '../CheckAvailability/CheckAvailability';
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


/* COMPONENTS */

// Hero Image Component:
const HeroImage = () => {

    return(
        <Container fluid className='HeroImageContainer'>
            <Row>
                <Col className='HeroCol'>
                    <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1662321866/CANITAS%20RENTAL/home__picture_jlbdjq.jpg' className='HeroImg' alt=''></img>
                    <h1 className='HeroImageH1'>
                        <div className='Welcome'>Welcome to</div>
                        <div className='HeroMessage'>
                            <span className="word">Estancia Las Cañitas</span><span className='wordWrapper'></span>
                        </div>
                    </h1>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImage;