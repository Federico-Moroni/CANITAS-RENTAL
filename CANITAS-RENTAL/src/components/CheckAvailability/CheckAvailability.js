/* IMPORTS */

// SCSS import:
import './CheckAvailability.scss';
import './CheckAvailabilityMediaQuery.scss';
// React import:
import React, {useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'


/* COMPONENTS */

// Check Availability component:
function CheckAvailability () {

    const [checkAmountAdults, setCheckAmountAdults] = useState({})
    const [checkAmountNights, setCheckAmountNights] = useState({})  // Manera de inicializar cualquier NON-STRING value.

    function handleChangeAdults(event) {
        setCheckAmountAdults(event.target.value)
    }

    function handleChangeNights(event) {
    setCheckAmountNights(event.target.value)
    }

    function cottageDecide() {
        const cottage = checkAmountAdults > 4 ? "a" : "b";
        return cottage
    }

    function resetForm() {
        setCheckAmountAdults('')
        setCheckAmountNights('')
    }

    function CheckAvailabilityLogic (event) {
        event.preventDefault();
        const cottage = cottageDecide()
        console.log(cottage)
        resetForm()
    }


    // lo que vamos a hacer es un render condicional de dos lineas.. una ternaria chequeando si valor a = true and div entonces modal y la otra b = true y div entonces modal (Dentro del div iria el modal)

    return (
        <Container fluid className='HomeFormContainer'>
            <Row className='HomeFormRow'>
                <form className='HomeForm' onSubmit={CheckAvailabilityLogic}>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormAdultsA' type='number' value={checkAmountAdults} name='checkQty' placeholder="&nbsp;" required='' onChange={handleChangeAdults}/>
                            <span className='Placeholder'>Amount of adults</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <label className='CustomField'>
                            <input className='input' id='FormNightsA' type='number' value={checkAmountNights} name='' placeholder="&nbsp;" required='' onChange={handleChangeNights}/>
                            <span className='Placeholder'>Amount of nights</span>
                        </label>
                    </Col>

                    <Col  className='HomeFormTags'>
                        <div>
                            <button type='submit' className='HomeFormBtn' id='HomeFormBtnId'> <span className='SpanCheck'> Check </span>Availability </button>
                        </div>
                    </Col>
                </form>

            </Row>
        </Container>
    )
}

export default CheckAvailability;