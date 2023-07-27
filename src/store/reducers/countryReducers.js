import * as actionTypes from '../constant';


const initialState = {
    currentCountry: 'us',
}

const countryReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case actionTypes.SET_COUNTRY:
          return {
            ...state,
            currentCountry: action.payload,
          };

        default: return state;
    }
}
export default countryReducer;

