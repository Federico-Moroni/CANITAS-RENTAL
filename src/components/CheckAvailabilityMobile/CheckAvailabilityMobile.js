/* IMPORTS */

// SCSS import:
import './CheckAvailabilityMobile.scss';
import './CheckAvailabilityMobileMediaQuery.scss';
// React import:
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';


/* COMPONENTS */

// Check Availability component:
function CheckAvailabilityMobile () {

    return (
        <Container fluid className='AvailabilityMobileContainer'>
            <Row className='AvailabilityMobileRow'>
                <form className='AvailabilityMobileForm'>
                    <Col className='AvailabilityMobileTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormName' type='text' name='' placeholder="Complete Name" required=''/>
                            <span className='Placeholder'>Complete Name</span>
                        </label>
                    </Col>

                    <Col className='AvailabilityMobileTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormAdults' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of adults</span>
                        </label>
                    </Col>

                    <Col className='AvailabilityMobileTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormChildren' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of children</span>
                        </label>
                    </Col>

                    <Col className='AvailabilityMobileTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormNights' type='number' name='' placeholder="&nbsp;" required=''/>
                            <span className='Placeholder'>Amount of nights</span>
                        </label>
                    </Col>

                    <Col className='AvailabilityMobileTags'>
                        <button className='AvailabilityMobileBtn' id='AvailabilityMobileBtnId'> <span className='SpanCheck'> Check </span>Availability </button>
                    </Col>
                </form>
            </Row>
        </Container>
    )
}

export default CheckAvailabilityMobile;