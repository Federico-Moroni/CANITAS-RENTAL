/* IMPORTS */

// SCSS import:
import './CheckAvailability.scss';
import './CheckAvailabilityMediaQuery.scss';
// React import:
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


/* COMPONENTS */

// Check Availability component:
function CheckAvailability () {

    return (
        <Container fluid className='HomeFormContainer'>
            <Row className='HomeFormRow'>
                <form className='HomeForm'>
                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormName' type='text' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Complete Name</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormAdults' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of adults</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormChildren' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of children</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormNights' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of nights</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <button className='HomeFormBtn' id='HomeFormBtnId'> <span className='SpanCheck'> Check </span>Availability </button>
                    </Col>
                </form>

            </Row>
        </Container>
    )
}

export default CheckAvailability;