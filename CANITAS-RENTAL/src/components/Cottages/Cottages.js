import './Cottages.scss'
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CottagesModal from '../CottagesModal/CottagesModal';
import { cottageImages } from '../../Assets/Assets';
import CheckAvailability from '../CheckAvailability/CheckAvailability';

export default function Cottages () {

const name = 'Fede'

    return (
        <Container fluid className='CottagesCotainer'>
            <CottagesModal images ={cottageImages}/>
        </Container>
    )
}
