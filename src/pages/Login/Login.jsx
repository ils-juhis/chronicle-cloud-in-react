import React from 'react'
import FormCard from '../../components/Form/FormCard/FormCard'
import MUICustomInput from '../../components/Form/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import padlock from '../../assets/images/padlock.svg'
import './Login.scss'
import { Form, Formik } from 'formik'
import { loginSchema } from '../../schema/AllSchemas'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
      <FormCard name="Login" info={true}>
        <div id="login-form" className="mt-2">
          <div className="content mb-3">
            Enter your email address and password to get access your account.
          </div>
          <div className="inputs">
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={loginSchema}
              onSubmit={(values)=>{
                console.log(values)
              }}
            >
              <Form>

                <MUICustomInput 
                  label="Email" 
                  name="email" 
                  type="email" 
                  icon={emailLogo}/>

                <MUICustomInput 
                  label="Password" 
                  name="password" 
                  type="password" 
                  icon={padlock}/>

                <div className="d-flex justify-content-between my-3 rem-forget">
                  <div className="d-flex align-items-center">
                    <input className="form-check-input m-0 shadow-none rounded-circle" type="checkbox" id="rememberCheck"/>
                    <label className="form-check-label ms-2" htmlFor="flexCheckIndeterminate">
                      Remember Me
                    </label>
                  </div>
                  <Link className="text-primary text-decoration-none fw-bold" to="forgot-pwd">   Forgot Password?    </Link>
                </div>

                <button className='text-light p-2 px-3 mt-3 text-uppercase' type='submit'>login</button>

                <div className="d-flex justify-content-between pt-4 align-items-center">
                    <div className="fw-bold" >Don't have an account?</div>
                    <Link to="sign-up">
                      <button className="p-2 text-uppercase" id="register">Register now</button>
                    </Link>
                </div>

              </Form>
            </Formik>
          </div>
        </div>
      </FormCard>
    </>
  )
}

export default Login
