import * as actionTypes from './constant';


const initialState = {
    currentCountry: 'us',
    userInfo: null
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

        case actionTypes.SET_CURRENT_USER:
          return {
            ...state,
            userInfo: action.payload,
          };

        case actionTypes.REMOVE_USER:
          return {
            ...state,
            userInfo: null
          }

        default: return state;
    }
}
export default reducer;

