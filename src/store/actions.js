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
        console.log(error)
      console.log("ERROR")
    }
  };
