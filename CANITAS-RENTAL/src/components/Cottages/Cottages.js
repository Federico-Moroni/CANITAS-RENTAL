import './Cottages.scss'
import './CottagesMediaQuery.scss'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CottagesModal from '../CottagesModal/CottagesModal';
import { cottageImages } from '../../Assets/Assets';
import CheckAvailability from '../CheckAvailability/CheckAvailability';
import decision from '../CheckAvailability/CheckAvailability';

export default function Cottages () {

    return (
        
        <Container fluid className='CottagesContainer'>
            <CheckAvailability />
        </Container>
    )
}

