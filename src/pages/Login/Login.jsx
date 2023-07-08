import React, { useState } from 'react'
import FormCard from '../../components/FormCard/FormCard'
import MUICustomInput from '../../components/MUICustomInput/MUICustomInput'
import email from '../../assets/images/email.svg'
import padlock from '../../assets/images/padlock.svg'
import './Login.scss'

function Login() {
  const [formData, setFormData] = useState({email:"", password:""});
  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  return (
    <>
      <FormCard name="Login">
        <div id="login-form" className="mt-2">
          <div className="content">
            Enter your email address and password to get access your account.
          </div>
          <div className="inputs">
            <MUICustomInput inputName="Email" fieldName="email" icon={email} changeHandler={changeHandler}/>
            <MUICustomInput inputName="Password" fieldName="password" icon={padlock} changeHandler={changeHandler}/>

          </div>
        </div>
      </FormCard>
    </>
  )
}

export default Login
