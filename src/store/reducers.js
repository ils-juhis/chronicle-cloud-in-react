import * as actionTypes from './constant';


const initialState = {
    currentCountry: 'us'
}

const reducer = (state = initialState, action) => {
  
    switch (action.type) {
      case actionTypes.GET_CURRENT_COUNTRY:
        return {
          ...state,
          currentCountry: action.payload,
        };

        case actionTypes.SET_CURRENT_COUNTRY:
          return {
            ...state,
            currentCountry: action.payload,
          };

        default: return state;
    }
}
export default reducer;

