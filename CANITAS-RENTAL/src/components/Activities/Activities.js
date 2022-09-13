import './Activities.scss'
import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from "../Slider/Slider";

const Activities = () => {

    return (
    <Container fluid className='ActivitiesContainer'>
        <div className='ActivitiesImgWrapper'>
        <Slider />
        </div>
    </Container>
    )
}

export default Activities