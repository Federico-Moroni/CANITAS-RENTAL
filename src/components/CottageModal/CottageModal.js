/* IMPORTS */

// SCSS import:
import './CottageModal.scss';
// React import:
import React from 'react';
import { Container } from 'react-bootstrap';


/* COMPONENTS */

// Cottage Modal component:
const CottageModal = () => {

    return (
        <Container className='CottageModalContainer'>
            <input type="checkbox" id="btn-cottagemodal"></input>
                <label htmlFor="btn-cottagemodal" className="lbl-CottageModal"> Cottage </label>

            <div className="CottageModalOpen">
                <div className="ModalContainer">
                    <label htmlFor="btn-cottagemodal" className='X'>X</label>
                    <div className='CottageModalText'>
                        <p>Hola</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default CottageModal;