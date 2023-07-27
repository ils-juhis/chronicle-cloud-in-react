
import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_CURRENT_COUNTRY, SET_COUNTRY, SET_CURRENT_COUNTRY} from '../constant';
import getCurrentCountryReq from './requests/countryRequest'

function* getCurrentCountry(){
    try {
        const data = yield call(getCurrentCountryReq);
        // it will call reducer
        yield put({ type: SET_COUNTRY, payload: data.country.toLowerCase()});
    
    } catch (error) {
      console.log("ERROR")
    }
}

function* setCurrentCountry({country}){
    yield put({ type: SET_COUNTRY, payload: country});
}


function* countrySaga(){
    yield takeEvery(GET_CURRENT_COUNTRY, getCurrentCountry)
    yield takeEvery(SET_CURRENT_COUNTRY, setCurrentCountry)
}

export default countrySaga;