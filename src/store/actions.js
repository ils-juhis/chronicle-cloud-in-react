import apiClient from "../axios-instance";
import * as actionTypes from './constant';
import {  toast } from 'react-toastify';
import CryptoJS from "crypto-js";
import axios from "axios";
import {app} from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);

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


export const logOut = () => async (dispatch)=>{
  try{
    localStorage.removeItem('authToken');
    dispatch({type: actionTypes.REMOVE_USER});
  }catch(error){
    console.log(error)
  }
}


export const login = (email, password) => async (dispatch)=>{
  try{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    // console.log(userCredential)

    const postData ={
      "refresh_token": userCredential._tokenResponse.refreshToken,
      "device_token": "accessToken",
      "platform": "web",
      "device_udid": process.env.REACT_APP_DEVICE_UID
    }
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();

    const res = await apiClient.post("/teacher/teacherLogIn", {data: ciphertext})
    const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
    let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));
    //console.log(originalText)
    localStorage.setItem('authToken', JSON.stringify(originalText.authToken));

    dispatch({type: actionTypes.SET_CURRENT_USER, payload: originalText.data.user_details });

    if(originalText){
      if(originalText.status === 200){
        toast.success(originalText.message)
      }else{
        toast.error(originalText.message)
      }
    }

  }catch(error){
    console.log(error)
  }
}

export const loggedIn = (user) => async (dispatch)=>{
  try{
    //console.log(user)
    const refreshToken = user.stsTokenManager.refreshToken
    const postData ={
      "refresh_token": refreshToken,
      "device_token": "accessToken",
      "platform": "web",
      "device_udid": process.env.REACT_APP_DEVICE_UID
    }

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();

    const res = await apiClient.post("/teacher/teacherLogIn", {data: ciphertext})
    const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
    let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));

    localStorage.setItem('authToken', JSON.stringify(originalText.authToken));

    dispatch({type: actionTypes.SET_CURRENT_USER, payload: originalText.data.user_details });
  }catch(error){
    console.log(error)
  }
}

export const signUp = (userData) => async (dispatch)=>{
  try{
    const postData = {
      "first_name":userData.firstName,
      "last_name": userData.lastName,
      "email": userData.email,
      "password": userData.password,
      "school_name":userData.institute,
      "mobile": userData.phone,
      "city": userData.city,
      "state":userData.state,
      "country": userData.country,
      "auto_complete_status":"1",
      "zip_code":userData.zipCode,
      "user_color_code":"#15C65E",
      "device_udid": process.env.REACT_APP_DEVICE_UID,
      "platform":"web"
    }
    //console.log(postData)
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();

    const res = await apiClient.post("/teacher/teacherRegistration", {data: ciphertext})
    const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
    let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));
    //console.log(originalText)
 
    if(originalText){
      if(originalText.status === 200){
        toast.success(originalText.message)
      }else{
        toast.error(originalText.message)
      }
    }

    return originalText.status

  }catch(error){
    toast.error(error.message)
  }
}


export const forgotPwd = (email) => async (dispatch)=>{
  try{
    const postData = {
      "teacher_email": email,
      "platform": "web"
    }

    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();
    const res = await apiClient.post("/teacher/teacherForgotPassword", {data: ciphertext})
    const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
    let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));
    //console.log(originalText.message)
 
    if(originalText){
      if(originalText.status === 200){
        toast.success(originalText.message)
      }else{
        toast.error(originalText.message)
      }
    }

    return originalText.status

  }catch(error){
    toast.error(error)
  }
}