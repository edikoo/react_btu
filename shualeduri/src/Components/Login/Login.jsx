import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';


function Login(props)
{
    const history = useHistory();
    const [customerSignUp, setCustomerSignUp] = useState(
        { email: '', password: ''}
    );

    const handleChange = (event) => {
        setCustomerSignUp({...customerSignUp, [event.target.name]: event.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let r = Math.random().toString(36).substring(7);
        
        localStorage.setItem('userEmail', customerSignUp.email);
        localStorage.setItem('autorizationToken', r);
        history.replace(props.location.state.from)
    }

    return (
        <div className="container">
            <form className='white' onSubmit={handleSubmit}>
                <h5 className="grey-text.text-darken-3">ავტორიზაცია</h5>                        
                <div className="input-field">
                    <label htmlFor="email">შეიყვანეთ ელ. ფოსტა</label>
                    <input type="text" name="email" value={customerSignUp.email} onChange={handleChange} required />
                </div>
                <div className="input-field">
                    <label htmlFor="password">შეიყვანეთ ნებისმიერი პაროლი</label>
                    <input type="password" name="password" value={customerSignUp.password} onChange={handleChange} required />
                </div>
                <div className="input-field"> 
                    <button className="btn btn-success" type="submit">ავტორიზაცია</button>
                </div>
            </form>
        </div>
    );
}

export default Login;