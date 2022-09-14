import './CottagesModal.scss';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function CottagesModal (props) {

const cottage = 'b'

return (
    
    <div className='CottagesModalComponent'>
        {cottage === 'a' && <h2 className='CABANA-A'>CABANA A</h2>}
        {cottage === 'a' && <h3 className='CABANA-A'>subtitulo cabana A</h3>}
        {cottage === 'b' &&<h2 className='CABANA-B'>CABANA B</h2>}
        {cottage === 'b' &&<h3 className='CABANA-B'>subtitulo cabana B</h3>}
    </div>

)

}