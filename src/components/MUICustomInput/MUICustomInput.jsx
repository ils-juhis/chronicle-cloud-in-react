import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {IoMdEye} from 'react-icons/io';
import {IoMdEyeOff} from 'react-icons/io';
import { ErrorMessage, useField } from 'formik';

export default function MUICustomInput({label, icon, ...props}) {
  const{type, name} = props;

  const [focused, setFocused] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState("");

  //using formik
  const [field, meta] = useField(props);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const changeHandler = (e)=>{
    field.onChange(e)
    setCurrentValue(e.target.value)
  }

  const blurHandler = (e)=>{
    field.onBlur(e)
    setFocused(false);
  }

  //css
  const inputLabelCSS = {
    marginLeft: icon ? "49px": "15px",
    font: "normal normal 600 14px Open Sans",
    "&[data-shrink='true']":{
        fontSize: "15px",
        marginTop: "5px",
        color: "#222222",
        opacity: 0.4
      },
    "&[data-shrink='false']":{
      top: "50%",
      transform: "translateY(-50%)"
    }
  }

  const inputCSS={
    p:2,
    fontSize: "14px",
    height: "46px",
    marginTop: "0px !important",
    
    ".MuiInput-input":{
      marginTop: "auto",
    },

    "&:after": {
      borderBottomColor: (meta.touched && meta.error) ? "#FF0000" : "#386CB5",
    },
    "&:hover:not(.Mui-disabled, .Mui-error):before": {
      borderColor:"transparent",
    },

    "&:before": {
      borderBottomColor: "#F7FAFF"
    }
  }


  const errorCSS={
    "color": "#FF0000",
    "font":" normal normal 500 10px/17px Open Sans"
  }

  return (
    <div>
      <Box sx={{backgroundColor:'#F7FAFF', mt:0.5, overflow: "hidden", borderRadius: "6px",  border: "1px solid #DDDDDD",}}>
        <div className='w-100'>
          <FormControl sx={{ width:"100%"}} variant="standard">

            <InputLabel sx={inputLabelCSS} shrink={currentValue? true :focused } htmlFor="standard-adornment-password">{label}</InputLabel>

            <Input
              sx={inputCSS}
              id="standard-adornment-password"
              type={(type!=="password" || showPassword) ? 'text' : 'password'}
              name={name}

              autoComplete="off"
              endAdornment={
                label==="Password" ?
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    sx={{p:0, color:"#AAAAAA", fontSize: "20px"}}
                  >
                    {showPassword ?<IoMdEyeOff /> : <IoMdEye />}
                  </IconButton>
                </InputAdornment>
                :
                null
              }

              startAdornment={
                icon ? 
                <InputAdornment position="start">
                <img src={icon} className='me-2'/>
                </InputAdornment>
                :
                null
              }
              {...field}
              
              onFocus={() => setFocused(true)}
              onBlur={blurHandler}
              onChange={changeHandler}
              {...props}
            />
          </FormControl>
        </div>
      </Box>
      <div style={errorCSS}>
      {(meta.touched && meta.error) ? <ErrorMessage name={field.name} /> : <>&nbsp;</>}
      </div>
    </div>
  );
}