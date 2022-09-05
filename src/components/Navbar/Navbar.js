import './Navbar.scss';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Navbar = () => {

    return(
        <Container className='NavbarContainer' fluid>
            <Row className='NavbarRow'>
                <Col xl={5} lg={5} md={5} sm={5} className='Cols NavbarColLeft'>
                    <ul className='NavbarUl'>
                        <li className='NavbarLi'><a>Home</a></li>
                        <li className='NavbarLi'><a>Activities</a></li>
                        <li className='NavbarLi'><a>Cottages</a></li>
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
                        <li className='NavbarLi'><a>Book Now</a></li>
                        <li className='NavbarLi'><a>Contact</a></li>
                        <li className='NavbarLi'><a>Login</a></li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar