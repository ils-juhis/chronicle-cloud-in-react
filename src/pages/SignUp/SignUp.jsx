import React from 'react'
import FormCard from '../../components/Form/FormCard/FormCard'
import './SignUp.scss'
import { Form, Formik } from 'formik'
import MUICustomInput from '../../components/Form/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import padlock from '../../assets/images/padlock.svg'
import leftArrow from '../../assets/images/arrow-left.svg'
import rightArrow from '../../assets/images/arrow-right.svg'
import { signupStep1Schema } from '../../schema/AllSchemas'
import { Link } from 'react-router-dom'
import PhoneCustomInput from '../../components/Form/PhoneCustomInput'

function SignUp() {
  
  return (
    <div className='my-5'>
      <FormCard name="Registration" info={true}>
        <div id="signup-form" className="mt-2">
          <div className="reg-steps row ">
            <div className="col-6 mb-3  gs-1">
              <div className="txt">Step 01</div>
              <div className="underline"></div>
            </div>
            <div className="col-6 mb-3 ">
              <div className="txt">Step 02</div>
              <div className="underline"></div>
            </div>
          </div>
          <div className="inputs">
            <Formik
              initialValues={{
                firstName:'', 
                lastName: '',
                email: '',
                phone: '',
                password:'',
                confirmPassword: '',
                institute:'',
                state:'',
                country: '',
                city:'',
                zipCode:'',
                termsAndConditions: false,
              }}
              validationSchema={signupStep1Schema}
              onSubmit={(values)=>{
                console.log(values)
              }}>

              {
                (fromik)=>{
                  return(
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

                    <PhoneCustomInput name="phone"/>
                    
                    <div className="fw-bold h-4 mt-4 mb-2">Create Password</div>
                    <div className="content mb-3"> Password must contain one special character, one capital letter and be at least 6 characters long. </div>


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

                    <hr />
                    <div className=" mt-4 d-flex justify-content-between align-items-center">
                      <span className="fw-bold">Do have an account?</span>
                      <Link to="/">
                        <button className="text-uppercase px-5 py-2" id="login-btn" type="button">Login</button>
                      </Link>
                    </div>
                    
                  


                    {/*step2*/}
                    <div>
                      <MUICustomInput 
                        label="School / University / Institute Name*" 
                        name="institute" 
                        type="text"/>

                      <MUICustomInput 
                        label="State*" 
                        name="state" 
                        type="text"/>

                      <MUICustomInput 
                        label="City*" 
                        name="city" 
                        type="text"/>
                      
                      <MUICustomInput 
                        label="Country*" 
                        name="country" 
                        type="text"/>
                      
                      <MUICustomInput 
                        label="Zip Code*" 
                        name="zipCode" 
                        type="text"/>

                      <div className="rem-forget my-2 ">
                        <div className="form-check ">
                          <input className="form-check-input shadow-none rounded-circle"  type="checkbox" id="condition-check"/>
                          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                            I agree to the &nbsp;
                            <a href="#" className="fw-bold text-decoration-none ">Terms of service &nbsp;</a> 
                            and &nbsp;
                            <a href="#" className="fw-bold text-decoration-none ">Privacy Policy &nbsp;</a>.
                          </label>
                        </div>
                        <div className="invalid-error" id="uncheck-terms">&nbsp;</div>
                      </div>
                      <div className="d-flex justify-content-between my-4">
                        <button type="button" className="back"> <img src={leftArrow} alt=""/> &nbsp; Step Back </button>
                        <button type="submit" className='p-2'>Create Account</button>
                      </div>
                    </div>
                  </Form>
                  )
                }
              }
             </Formik>
           
          </div>
        </div>
      </FormCard>
    </div>
  )
}

export default SignUp