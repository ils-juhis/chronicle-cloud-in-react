import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import {IoMdEye} from 'react-icons/io';
import {IoMdEyeOff} from 'react-icons/io';

export default function MUICustomInput(props) {
  const{ inputName ,icon, fieldName, changeHandler} = props;
  const [showPassword, setShowPassword] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [focused, setFocused] = React.useState(false);

  return (
    <Box sx={{backgroundColor:'#F7FAFF', mt:2, overflow: "hidden", borderRadius: "6px",  border: "1px solid #DDDDDD",}}>
      <div className='w-100'>
        <FormControl sx={{ width:"100%"}} variant="standard">

          <InputLabel 
            sx={{
              marginLeft: "49px",
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
                },
              }} 
              shrink={currentValue? true :focused } htmlFor="standard-adornment-password">{inputName}</InputLabel>

          <Input
            sx={{
              p:2,
              fontSize: "14px",
              borderBottomColor: "red !important",
              height: "46px",
              marginTop: "0px !important",
              ".MuiInput-input":{
                marginLeft: "6px",
                marginTop: "auto",
              },
              ".Mui-focused:after":{
                borderBottomColor: "#F7FAFF"
              },
              "&:hover:not(.Mui-disabled, .Mui-error):before": {
                borderColor:"transparent",
              },

              "&:before": {
                borderBottomColor: "#F7FAFF"
              },
            }}

            id="standard-adornment-password"
            type={(inputName!=="Password" || showPassword) ? 'text' : 'password'}
            endAdornment={
              inputName==="Password" ?
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  sx={{p:0, color:"#AAAAAA", fontSize: "20px"}}
                >
                  {showPassword ?<IoMdEyeOff /> : <IoMdEye />}
                </IconButton>
              </InputAdornment>
              :
              <></>
            }

            startAdornment={
              <InputAdornment position="start">
                <img src={icon}/>
              </InputAdornment>
            }
            name={fieldName}
            value={currentValue}
            onChange={(e) => {setCurrentValue(e.target.value); changeHandler(e)}}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />
        </FormControl>
      </div>
    </Box>
  );
}