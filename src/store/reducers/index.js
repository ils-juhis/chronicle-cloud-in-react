import { combineReducers } from '@reduxjs/toolkit'
import countryReducer from './countryReducers'
import userReducer from './userReducers'

const rootReducer = combineReducers({
    countryReducer,
    userReducer
})

export default rootReducer;