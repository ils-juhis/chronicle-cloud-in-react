import { ErrorMessage, useField } from 'formik';
import React, { useEffect, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function PhoneCustomInput(props) {
  const [country, setCountry] = useState('us')
    //using formik
    const [field, meta] = useField(props);
    const errorCSS={
      "color": "#FF0000",
      "font":" normal normal 500 10px/17px Open Sans"
    }
  

  useEffect(()=>{
    fetch('https://ipinfo.io/json?token=6978337c394849', { headers: { 'Accept': 'application/json' }})
      .then((resp) => resp.json())
      .catch(() => {
        setCountry('us')
      })
      .then((resp) => setCountry(resp.country.toLowerCase()));
     
  },[country])

  return (
    <div className='phone-box'>
        <PhoneInput
            placeholder=""
            country={country}
            enableSearch= {true}
            disableSearchIcon={true}
            inputClass={(meta.touched && meta.error) ? "err" : null}
            buttonStyle={{
                width:"46px",
                backgroundColor: "white",
                borderTopLeftRadius: "6px",
                borderBottomLeftRadius: "6px"
            }}
            inputProps={{
                name: 'phone',
                required: true,
            }}

            {...field}
            {...props}

            onChange={(value, country, e, formattedValue)=>{
                if(e.target.type === "tel"){
                  e.target.value= e.target.value.replace(/ /g, "").replace(/-/g, "");
                  field.onChange(e);
                }
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