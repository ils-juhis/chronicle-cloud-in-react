import React from 'react'
import FormCard from '../../components/FormCard/FormCard'
import './SignUp.scss'
import { Form, Formik } from 'formik'
import MUICustomInput from '../../components/MUICustomInput/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import padlock from '../../assets/images/padlock.svg'
import rightArrow from '../../assets/images/arrow-right.svg'
import { forgotPwdSchema } from '../../schema/AllSchemas'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <>
      <FormCard name="Registration" info={true}>
        <div id="signup-form" className="mt-2">
          <div className="inputs">
            <Formik
              initialValues={{
                 firstName:'', 
                 lastName: '',
                 email: '',
                 password:'',
                 confirmPassword: ''
              }}
              validationSchema={forgotPwdSchema}
              onSubmit={(values)=>{
                console.log(values)
              }}>
              
              <Form>
                <div className="row">
                  <div className="col-6 gs-1">
                    <MUICustomInput 
                      label="First Name" 
                      name="firstName"
                      type="text"/>
                  </div>

                  <div className="col-6">
                    <MUICustomInput 
                      label="Last Name" 
                      name="lastName"
                      type="text"/>
                  </div>
                </div>

                <MUICustomInput 
                  label="Email" 
                  name="email" 
                  type="email" 
                  icon={emailLogo}/>

                
                <div class="fw-bold h-6 mt-3">Create Password</div>
                <div class="content mb-3"> Password must contain one special character, one capital letter and be at least 6 characters long. </div>


                <MUICustomInput 
                  label="Password" 
                  name="password" 
                  type="password" 
                  icon={padlock}/>

                <MUICustomInput 
                  label="Confirm Password" 
                  name="confirmPassword" 
                  type="password" 
                  icon={padlock}/>

                <div className="text-end">
                  <button className=' next text-light p-2 px-4 mt-3' >
                    <span className='me-2'>Next Step</span>
                    <img src={rightArrow} width="15px" alt="" />
                  </button>
                </div>
              </Form>
            </Formik>

            <hr />
            <div className=" mt-4 d-flex justify-content-between align-items-center">
              <span className="fw-bold">Do have an account?</span>
              <Link to="/">
                <button className="text-uppercase px-5 py-2" id="login-btn" type="button">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </FormCard>
    </>
  )
}

export default SignUp