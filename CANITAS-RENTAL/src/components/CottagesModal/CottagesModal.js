import './CottagesModal.scss';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

export default function CottagesModal (props) {

return (
        <Container className='CottageModalContainer'>
            <input type="checkbox" id="btn-cottagemodal"></input>
                <label htmlFor="btn-cottagemodal" className="lbl-CottageModal"> Cottage </label>

            <div className="CottageModalOpen">
                <div className="ModalContainer">
                    <label htmlFor="btn-cottagemodal" className='X'>X</label>
                    <div className='CottageModalText'>
                        {(props.count > 0 && props.count < 4 ) && <h2 className='CABANA-A'>CABANA A</h2>}
                        {(props.count > 3 && props.count <= 10) && <h2 className='CABANA-B'>CABANA B</h2>}
                        {(props.count > 10) && <h2 className='CABANA-B'>We dont have enough room</h2>}
                    </div>
                </div>
            </div>
        </Container>
)
}

