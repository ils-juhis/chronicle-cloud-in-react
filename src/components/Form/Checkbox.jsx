import React from 'react'
import { ErrorMessage, useField } from 'formik'

function Checkbox() {
    const [ field, meta] = useField({name:"termsAndConditions", type:"checkbox"})

  return (
    <>
        <div className="rem-forget my-2 ">
            <div className="form-check ">
                <input className="form-check-input shadow-none rounded-circle" 
                    name='termsAndConditions'  
                    type="checkbox" 
                    id="condition-check"
                    {...field}
                    />
                <label className="form-check-label" htmlFor="flexCheckIndeterminate">
                    I agree to the &nbsp;
                    <a href="" className="fw-bold text-decoration-none ">Terms of service &nbsp;</a> 
                    and &nbsp;
                    <a href="#" className="fw-bold text-decoration-none ">Privacy Policy &nbsp;</a>.
                </label>
            </div>
            <div className='error'>
            {(meta.touched && meta.error) ? <ErrorMessage name={field.name} /> : <>&nbsp;</>}
          </div>
        </div>
    </>
  )
}

export default Checkbox