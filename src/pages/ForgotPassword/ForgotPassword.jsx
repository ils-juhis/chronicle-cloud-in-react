import React, { useEffect } from 'react'
import FormCard from '../../components/Form/FormCard/FormCard'
import './ForgotPassword.scss'
import { Form, Formik } from 'formik'
import MUICustomInput from '../../components/Form/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import { forgotPwdSchema } from '../../schema/AllSchemas'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { forgotPassword } from '../../store/actions/userActions'

function ForgotPassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state=> state.userReducer);

  useEffect(()=>{
    if (userInfo) {
      navigate("/dashboard");
    }
  },[userInfo])

  return (
    <>
      <FormCard name="Forgot Password">
        <div id="forgot-pwd-form" className="mt-2">
          <div className="content mb-3">
            Enter your registered email address. We will email you a new password for your account
          </div>
          <div className="inputs">
            <Formik
              initialValues={{ email: ''}}
              validationSchema={forgotPwdSchema}
              onSubmit={(values,  { resetForm })=>{
                dispatch(forgotPassword(values.email))
                resetForm();
              }}>

              {
                formik =>{
                  return (
                    <Form>
                      <MUICustomInput 
                        label="Email" 
                        name="email"
                        type="text"
                        icon={emailLogo}/>
                      <button className='text-light p-2 px-3 mt-3 text-uppercase' type='submit' disabled={!(formik.dirty && formik.isValid)}>retrive password</button>
                    </Form>
                  )
                }
              }
              
            </Formik>
          </div>
        </div>
      </FormCard>
    </>
  )
}

export default ForgotPassword