import './Navbar.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {

    return(
        <Container className='NavbarContainer' fluid>
            <Row className='NavbarRow'>
                <Col xl={5} lg={5} md={5} sm={5} className='Cols NavbarColLeft'>
                    <ul className='NavbarUl'>
                        <li className='NavbarLi'>Home</li>
                        <li className='NavbarLi'>Activities</li>
                        <li className='NavbarLi'>Cottages</li>
                    </ul>
                </Col>
                <Col xl={2} lg={2} md={2} sm={2} className='NavbarColCenter'>
                    <ul>
                        <li className='NavbarTitleLi'>Las Cañitas</li>
                        <li className='NavbarSubtitleLi'>Valle de Calamuchita | Córdoba</li>
                    </ul>
                </Col>
                <Col xl={5} lg={5} md={5} sm={5} className='Cols NavbarColRight'>
                    <ul className='NavbarUl'>
                        <li className='NavbarLi'>Book Now</li>
                        <li className='NavbarLi'>Contact</li>
                        <li className='NavbarLi'>Login</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
} 

export default Navbar