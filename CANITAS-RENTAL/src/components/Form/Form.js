import './Form.scss'
import React, { useState } from 'react'
/* Axios es una API HTTP de cliente basada en XMLHttpRequest , que se puede utilizar en el navegador y en un servidor con Node. js[ref]. Axios funciona de forma asíncrona, permitiendo realizar llamadas API REST[ref] con retorno JSON. */
import axios from 'axios'

export default function Form() {

// Phone, cottage (a or b radio) and date.

const [formData, setFormData] = useState({
    name:'',
    email:'',
    message:''
})

function handleChange (event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [name]: value 
        }
    })
}

const formSubmit = (event) => {
    event.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
    let data = {
        name:formData.name,
        email:formData.email,
        message:formData.message
    }
    axios.post('/api/forma', data)

    setFormData({        
        name:'',
        email:'',
        message:''
    })
}

    return (
        <div className='FormContainer'>

            <form className='Form' onSubmit={formSubmit}>

                <div className='FormSingleItem'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' className='name' placeholder='Your Name' value={formData.name} onChange={handleChange} required/>
                </div>

                <div className='FormSingleItem'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='email' placeholder='Your Email' value={formData.email} onChange={handleChange} required/>
                </div>

                <div className='FormTextArea FormSingleItem'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='' cols='30' rows='5' placeholder='Your message' value={formData.message} onChange={handleChange} required></textarea>
                </div>

                <div className='Formbtn'>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
    )
    }

