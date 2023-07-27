import * as actionTypes from '../constant';


const initialState = {
  userInfo: null,
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  
    switch (action.type) {
        case actionTypes.GET_CURRENT_USER_REQUEST:
          return {
            ...state,
           loading: true,
          };

          case actionTypes.GET_CURRENT_USER_SUCCESS:
            return {
              ...state,
              loading: false,
              userInfo:  action.payload
            };

          case actionTypes.GET_CURRENT_USER_FAIL:
            return {
              ...state,
              loading: false,
              error: action.payload
            };

        case actionTypes.REMOVE_USER:
          return {
            ...state,
            userInfo: null
          }

        default: return state;
    }
}
export default userReducer;

