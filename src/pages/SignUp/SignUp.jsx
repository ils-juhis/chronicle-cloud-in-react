import React, { useEffect } from 'react'
import FormCard from '../../components/Form/FormCard/FormCard'
import './SignUp.scss'
import MUICustomInput from '../../components/Form/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import padlock from '../../assets/images/padlock.svg'
import { signupStep1Schema, signupStep2Schema } from '../../schema/AllSchemas'
import PhoneCustomInput from '../../components/Form/PhoneCustomInput'
import MultiStepForm, { FormStep } from '../../components/Form/MultiStepForm'
import Checkbox from '../../components/Form/Checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../store/actions/userActions'

function SignUp() {
  //state
  const {currentCountry}  = useSelector((state)=> state.countryReducer)
  const {userInfo} = useSelector(state=> state.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    if (userInfo) {
      navigate("/dashboard");
    }
  },[userInfo, currentCountry])

  
  return (
    <div className='my-5'>
      <FormCard name="Registration" info={true}>
        <div id="signup-form" className="mt-2">

          <MultiStepForm
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

          onSubmit={async(values,  { resetForm })=>{
            // console.log(values)
            const status = await dispatch(signUp(values));
            resetForm();
            navigate("/");
          }}>

            <FormStep 
              validationSchema={signupStep1Schema(currentCountry)}
              stepName={"Step 1"} 
              onSubmit={()=>{/*console.log("Step 1")*/}}>
                
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

              <PhoneCustomInput name="phone" type="text"/>
              
              <div className="fw-bold h-4 mt-2 fs-6 mb-1">Create Password</div>
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
            </FormStep>

            <FormStep  
              validationSchema={signupStep2Schema}
              stepName={"Step 2"} 
              onSubmit={()=>{/*console.log("Step 2")*/}}>

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

              <Checkbox/>
            </FormStep>
            
          </MultiStepForm>
        </div>
      </FormCard>
    </div>
  )
}

export default SignUp