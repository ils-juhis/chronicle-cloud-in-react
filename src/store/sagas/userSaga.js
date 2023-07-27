
import {call, put, takeEvery} from 'redux-saga/effects';
import {FORGOT_PASSWORD, GET_CURRENT_USER_FAIL, GET_CURRENT_USER_SUCCESS, LOGGEDIN, LOGIN, LOG_OUT, REMOVE_USER, SIGN_UP} from '../constant';
import { forgotPasswordReq, loggedInReq, loginReq, signUpReq } from './requests/userRequest';
import {  toast } from 'react-toastify';

function* signUp({userData}){
    try{
        
        let data = yield call(signUpReq, {userData});     
        if(data.status === 200){
            toast.success(data.message)
          }else{
            toast.error(data.message)
          }
    
        return data.status
    
      }catch(error){
        toast.error(error.message)
      }
}

function* login({email, password}){
    try{
        console.log(email, password)
        let data = yield call(loginReq, {email, password})
        yield put({ type: GET_CURRENT_USER_SUCCESS, payload: data.data.user_details});
    
        if(data.status === 200){
            toast.success(data.message)
        }else{
            yield put({ type: GET_CURRENT_USER_FAIL, payload: data.message});
            toast.error(data.message)
        }
    
    }catch(error){
        toast.error(error.message)
        yield put({ type: GET_CURRENT_USER_FAIL, payload: error.message});
    }
}

function* forgotPassword({email}){
    try {
        let data = yield call(forgotPasswordReq, {email});
        if(data.status === 200){
            toast.success(data.message)
        }else{
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
    }
}


function* loggedIn({user}){
    try{
        let data = yield call(loggedInReq, {user})
        yield put({ type: GET_CURRENT_USER_SUCCESS, payload: data.data.user_details});
    }catch(error){
        console.log(error)
    }
  }

function* logOut(){
    try{
      localStorage.removeItem('authToken');
      yield put({ type: REMOVE_USER});
    }catch(error){
      console.log("ERROR")
    }
  }
  


function* userSaga(){
    yield takeEvery(SIGN_UP, signUp);
    yield takeEvery(LOGIN, login)
    yield takeEvery(LOGGEDIN, loggedIn)
    yield takeEvery(FORGOT_PASSWORD, forgotPassword)
    yield takeEvery(LOG_OUT, logOut);
}

export default userSaga;