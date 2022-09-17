/* IMPORTS */

// SCSS import:
import './Activities.scss'
// React import:
import React from 'react';
import Container from 'react-bootstrap/Container';
import Slider from "../Slider/Slider";


/* COMPONENTS */

// Activities component:
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

