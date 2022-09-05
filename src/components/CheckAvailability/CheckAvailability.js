import React from 'react'
import './CheckAvailability.scss';
import { Container, Row, Col } from 'react-bootstrap';

function CheckAvailability() {
    return (
    <Container fluid className='HomeFormContainer'>
        <Row className='HomeFormRow'>
            <form className='HomeForm'>
                <Col xl={2} lg={3} md={3} sm={3} className='HomeFormTags'>
                <label className='customField'>
                    <input id='FormName' type='text' name='' placeholder="&nbsp;" required=''/>
                    <span className='HomeFormPlaceholder'>Complete Name</span>
                </label>
                </Col>
                
                <Col xl={2} lg={3} md={3} sm={3} className='HomeFormTags'>
                <label className='customField'>
                    <input id='FormAdults' type='number' name='' placeholder="&nbsp;" required=''/>
                    <span className='HomeFormPlaceholder'>Amount of adults</span>
                </label>
                </Col>            
                
                <Col xl={2} lg={3} md={3} sm={3} className='HomeFormTags'>
                <label className='customField'>
                    <input id='FormChildren' type='number' name='' placeholder="&nbsp;" required=''/>
                    <span className='HomeFormPlaceholder'>Amount of children</span>
                </label>
                </Col>            
                
                <Col xl={2} lg={3} md={3} sm={3} className='HomeFormTags'>
                <label className='customField'>
                    <input id='FormNights' type='number' name='' placeholder="&nbsp;" required=''/>
                    <span className='HomeFormPlaceholder'>Amount of nights</span>
                </label>
                </Col>

                <Col xl={2} lg={3} md={3} sm={3} className='HomeFormTags'>
                    <button className='HomeFormBtn' id='HomeFormBtnId'><a>Check Availability</a></button>
                </Col>
            </form>

        </Row>
    </Container>
)
}

export default CheckAvailability