import axios from 'axios';
import * as actionTypes from './constant';

export const getCurrentCountry = () => async (dispatch) => {
    try {
        const res = await axios('https://ipinfo.io/json?token=6978337c394849',{
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
        const data = await res.data;
    
        dispatch({ type: actionTypes.GET_CURRENT_COUNTRY, payload: data.country.toLowerCase() });
    
    } catch (error) {
      console.log("ERROR")
    }
  };

  export const setCurrentCountry = (country) => async (dispatch) => {
    try {

        dispatch({ type: actionTypes.SET_CURRENT_COUNTRY, payload: country });
    
    } catch (error) {
      console.log("ERROR")
    }
  };


export const login = (email, password) => async (dispatch)=>{
  try{
    dispatch({type: actionTypes.SET_CURRENT_USER, payload: {email, name: "Juhi Sahu"}});
  }catch(error){
    console.log("ERROR")
  }
}

export const signUp = (userData) => async (dispatch)=>{
  try{
    dispatch({type: actionTypes.SET_CURRENT_USER, payload: {email: userData.email, name: userData.firstName+ " "+ userData.lastName}})
  }catch(error){
    console.log("ERROR")
  }
}
