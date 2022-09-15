/* IMPORTS */

// SCSS import:
import './HeroImage.scss';
import './HeroImageMediaQuery.scss'
// React import:
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckAvailability from '../CheckAvailability/CheckAvailability';


/* COMPONENTS */

// Hero Image Component:
const HeroImage = () => {

    return(
        <Container fluid className='HeroImageContainer'>
            <Row>
                <Col className='HeroCol'>
                    <img src='https://res.cloudinary.com/dfprmjlir/image/upload/v1662321866/CANITAS%20RENTAL/home__picture_jlbdjq.jpg' className='HeroImg' alt=''></img>
                    <div className='GlassEffectContainer'>
                        <div className='GlassEffect'></div>
                    </div>
                    <h1 className='HeroImageH1'>
                        <div className='HeroMessage'>
                            <span className="word">Bosque Las Cañitas</span><span className='wordWrapper'></span>
                        </div>
                        <p>hola</p>
                    </h1>
                    <CheckAvailability/>
                </Col>
            </Row>
        </Container>
    )
}

export default HeroImage;