import './CottagesModal.scss';
import React from 'react';
import { Container } from 'react-bootstrap';

export default function CottagesModal (props) {

    function change1() {
        const thumb = 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662661230/CANITAS%20RENTAL/pexels-micah-boerma-1008739_gox1wl.jpg'
        document.getElementById('mainImg').src = thumb;
    }
    function change2() {
        const thumb = 'https://res.cloudinary.com/dfprmjlir/image/upload/v1662945179/CANITAS%20RENTAL/pexels-spencer-gurley-films-1517670_xhroxr.jpg'
        document.getElementById('mainImg').src = thumb;
    }
    function change3() {
        const thumb = 'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw' + '3' + '.jpg'
        document.getElementById('mainImg').src = thumb;
    }
    function change4() {
        const thumb = 'https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw' + '4' + '.jpg'
        document.getElementById('mainImg').src = thumb;
    }

return (
        <Container className='ModalContainer'>
            <input type="checkbox" id="btn-cottagemodal"></input>
                <label htmlFor="btn-cottagemodal" className="lbl-CottageModal"> Cottage </label>

            <div className="CottageModalOpen">
                <div className="ViewModalContainer">
                    <label htmlFor="btn-cottagemodal" className='X'>X</label>
                    <div className='CottageModalText'>
                        {/* COTTAGES MODAL INFORMATION LEFT SIDE */}
                        <div className='ModalInfoContainer'>
                        {(props.count > 3 && props.count <= 10) && <h2 className='CABANA-B'>CABANA B</h2>}
                        {(props.count > 0 && props.count < 4 ) && <h2 className='CABANA-A'>CABANA A</h2>}
                        {(props.count > 10) && <h2 className='CABANA-B'>We dont have enough room</h2>}
                        {props.count == 0 && <h2 className='CABANA-A'>Please, enter the amount of adults</h2>}
                        </div>
                        {/* END COTTAGES MODAL INFORMATION LEFT SIDE */}

                        {/* COTTAGES MODAL IMAGES GALLERY RIGHT SIDE */}
                        <div className="ModalSliderContainer">

                            <ul className="slidess">
                                <img className='mainImg' id="mainImg" src='https://res.cloudinary.com/dfprmjlir/image/upload/v1662661230/CANITAS%20RENTAL/pexels-micah-boerma-1008739_gox1wl.jpg'/>
                            </ul>

                            <ul className="thumbnails">
                                <li>
                                <a className='image1' onClick={change1} href="#slide1"><img className='ThumbImages' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1662661230/CANITAS%20RENTAL/pexels-micah-boerma-1008739_gox1wl.jpg" /></a>
                                </li>
                                <li>
                                <a onClick= {change2} href="#slide2"><img className='ThumbImages' src="https://res.cloudinary.com/dfprmjlir/image/upload/v1662945179/CANITAS%20RENTAL/pexels-spencer-gurley-films-1517670_xhroxr.jpg" /></a>
                                </li>
                                <li>
                                <a onClick= {change3} href="#slide3"><img className='ThumbImages' src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw3.jpg" /></a>
                                </li>
                                <li>
                                <a onClick= {change4} href="#slide4"><img className='ThumbImages' src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/lw4.jpg" /></a>
                                </li>
                            </ul>
                        </div>
                        {/* END COTTAGES MODAL IMAGES GALLERY RIGHT SIDE */}
                    </div>
                </div>
            </div>
        </Container>
)
}