import {GET_CURRENT_COUNTRY, SET_CURRENT_COUNTRY} from '../constant';


export const getCurrentCountry = ()  => {
    return{
      type: GET_CURRENT_COUNTRY,
    }
  };

//direct send to reducer because no saga created
export const setCurrentCountry = (country) => {
  return{
      type: SET_CURRENT_COUNTRY,
      country
  }
};
