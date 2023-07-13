import { ErrorMessage, useField } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { setCurrentCountry } from '../../store/actions';

function PhoneCustomInput(props) {
  const [number, setNumber] = useState("")
    //using formik
    const [field, meta] = useField(props);
    const errorCSS={
      "color": "#FF0000",
      "font":" normal normal 500 10px/17px Open Sans"
    }
  
    const dispatch = useDispatch();
    const currentCountry  = useSelector((state)=> state.reducers.currentCountry)

  useEffect(()=>{
    setNumber(field.value)
  },[number])

  return (
    <div className='phone-box'>
        <PhoneInput
            country={currentCountry}
            value={number}
            placeholder=""
            inputProps={{
              name: 'phone',
              required: true,
              autoComplete: "off",
            }}

            enableTerritories={true}
            countryCodeEditable={false}
            enableSearch= {true}
            disableSearchIcon={true}
            
            inputClass={(meta.touched && meta.error) ? "err" : null}
            buttonStyle={{
                width:"46px",
                backgroundColor: "white",
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px"
            }}
            

            {...props}
            
            onChange={(value, country, e, formattedValue)=>{
              // console.log(country)
                if(country !==currentCountry){
                  dispatch(setCurrentCountry(country.countryCode))
                }
                if(e.target.type === "tel"){
                  e.target.value= e.target.value.replace(/ /g, "").replace(/-/g, "");
                  field.onChange(e);
                  setNumber(e.target.value)
                }
              }
            }

            onBlur={(e, formattedValue)=>{
                field.onBlur(e);
              }
            }
            />
          <div className="label"> Mobile Number</div>
          <div style={errorCSS}>
            {(meta.touched && meta.error) ? <ErrorMessage name={field.name} /> : <>&nbsp;</>}
          </div>
    </div>
  )
}

export default PhoneCustomInput

