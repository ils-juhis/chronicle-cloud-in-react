import React from 'react'
import leftArrow from '../../assets/images/arrow-left.svg'
import rightArrow from '../../assets/images/arrow-right.svg'
import { Link } from 'react-router-dom'

function FormNavigation(props) {
  return (
    <div>
        {console.log("")}
        {
            !props.hasPrevious ?
            <>
                <div className="text-end">
                    <button className='next text-light p-2 px-4 mt-3' type='submit' disabled={props.disabled}>
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
            </>
            :
            <div className="d-flex justify-content-between my-4">
                <button onClick={props.onBackClick} type="button" className="back"> 
                    <img src={leftArrow} alt="" /> 
                    &nbsp; 
                    <span>Step Back</span> 
                </button>
                {
                    !props.isLastStep ?

                    <button className=' next text-light p-2 px-4 mt-3' >
                        <span className='me-2'>Next Step</span>
                        <img src={rightArrow} width="15px" alt="" />
                    </button>
                    :
                    <button type="submit" className='p-2' >Create Account</button>
                }
            </div>
        }
    </div>
  )
}

export default FormNavigation