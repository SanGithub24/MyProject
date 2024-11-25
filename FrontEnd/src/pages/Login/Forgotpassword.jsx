import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import {showErrMsg, showSuccessMsg} from './Notification'

const init ={
    password:'',
    cf_password:'',
    err:'',
    success:''
}
function Forgotpassword() {
    const[data,setData] =useState(init);
    const {email, err, success} = data
    const isEmail = email => {
       
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const onChangeInput = e =>{
        const {name, value} = e.target;
        setData({...data, [name]:value, err: '', success: ''})
    }
  
    const forgotPassword = async (e) => {
        e.preventDefault();
        if(!isEmail(email))
            return setData({...data, err: 'Invalid emails.', success: ''})
            
        try {
            const res = await axios.post('/user/forgot', {email})

            return setData({...data, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && setData({...data, err:  err.response.data.msg, success: ''})
            
        }
    }

    return (
        <div className="login-page">
            <form >
            {err && showErrMsg(err)}
                {success && showSuccessMsg(success)}
                <h2>Forgot password</h2>
                <input type="email" name="email" required
                placeholder="Email"  onChange={onChangeInput} />

                <div className="row">
                    <button type="submit" onClick={forgotPassword}>Verify Your Email</button>
                    
                    <Link to="/login">Login</Link>
                </div>
            </form>
        </div>
    )
}

export default Forgotpassword
