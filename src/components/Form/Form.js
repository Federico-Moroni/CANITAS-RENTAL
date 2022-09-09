import './Form.scss'
import React, { Component } from 'react'
/* Axios es una API HTTP de cliente basada en XMLHttpRequest , que se puede utilizar en el navegador y en un servidor con Node. js[ref]. Axios funciona de forma asíncrona, permitiendo realizar llamadas API REST[ref] con retorno JSON. */
import axios from 'axios'
export default class Form extends Component {

// Definimos state como un objeto para iniciar todas las variables.

state = {
    name:'',
    lastname:'',
    email:'',
    message:'',
    sent:false
}

// Handle inputs

handleName = (e) => {
    this.setState({
        name: e.target.value
    })
}
handleLastname = (e) => {
    this.setState({
        lastname: e.target.value
    })
}
handleEmail = (e) => {
    this.setState({
        email: e.target.value
    })
}
handleMessage = (e) => {
    this.setState({
        message: e.target.value
    })
}

// End handle inputs

formSubmit = (e) => {
    e.preventDefault(); //preventDefault is called on the event when submitting the form to prevent a browser reload/refresh.
    let data = {
        name:this.state.name,
        lastname:this.state.lastname,
        email:this.state.email,
        message:this.state.message
    }
    axios.post('/api/forma', data)
    .then(res=>{
        this.setState({
            sent:true,
        }, this.resetForm())
    }).catch(()=>{
        console.log('message not sent')
    })
}

// Reset form

resetForm = () => {
    this.setState({
        name:'',
        lastname:'',
        email:'',
        message:'',
    })
    setTimeout(() => {
        this.setState({
            sent:false,
        })
    },3000)
}

render() {
    return (
        <div className='FormContainer'>

            <form onSubmit={this.formSubmit}>

                <div className='FormSingleItem'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' className='name' placeholder='Your Name' value={this.state.name} onChange={this.handleName}/>
                </div>

                <div className='FormSingleItem'>
                    <label htmlFor='lastname'>Lastname</label>
                    <input type='text' name='lastname' className='lastname' placeholder='Your Lastname' value={this.state.lastname} onChange={this.handleLastname}/>
                </div>

                <div className='FormSingleItem'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' name='email' className='email' placeholder='Your Email' value={this.state.email} onChange={this.handleEmail} required/>
                </div>

                <div className='FormTextArea FormSingleItem'>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' id='' cols='30' rows='5' placeholder='Your message' value={this.state.message} onChange={this.handleMessage}></textarea>
                </div>

                <div className={this.state.sent ? 'msg msgAppear':'msg'}></div>

                <div className='Formbtn'>
                    <button type='submit'>Submit</button>
                </div>

            </form>

        </div>
    )
    }
}
