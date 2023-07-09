import React from 'react'
import FormCard from '../../components/FormCard/FormCard'
import './ForgotPassword.scss'
import { Form, Formik } from 'formik'
import MUICustomInput from '../../components/MUICustomInput/MUICustomInput'
import emailLogo from '../../assets/images/email.svg'
import { forgotPwdSchema } from '../../schema/AllSchemas'
import BlueGradientButton from '../../components/BlueGradientButton'

function ForgotPassword() {
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
              onSubmit={(values)=>{
                console.log(values)
              }}>
              
              <Form>
                <MUICustomInput 
                  label="Email" 
                  name="email"
                  type="text"
                  icon={emailLogo}/>
                <BlueGradientButton label="retrive password" width="100%" />
              </Form>
            </Formik>
          </div>
        </div>
      </FormCard>
    </>
  )
}

export default ForgotPassword