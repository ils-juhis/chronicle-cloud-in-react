import apiClient from "../../../axios-instance";
import CryptoJS from "crypto-js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from '../../../firebaseConfig'
const auth = getAuth(app);

export const signUpReq = async({userData})=>{
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
    console.log(postData)
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();

    const res = await apiClient.post("/teacher/teacherRegistration", {data: ciphertext})

    const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
    let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));

    return originalText;
}

export const loginReq = async({email, password})=>{
    const userCredential = await signInWithEmailAndPassword(auth, email, password)

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
    localStorage.setItem('authToken', JSON.stringify(originalText.authToken));

    return originalText
}

export const loggedInReq = async({user})=>{
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
    return originalText;
}

export const forgotPasswordReq = async({email})=>{
    const postData = {
        "teacher_email": email,
        "platform": "web"
      }
  
      let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(postData), process.env.REACT_APP_ENCRYPTION_KEY).toString();
      const res = await apiClient.post("/teacher/teacherForgotPassword", {data: ciphertext})
      const decryptData = CryptoJS.AES.decrypt(res.data.res, process.env.REACT_APP_ENCRYPTION_KEY);
      let originalText = JSON.parse(decryptData.toString(CryptoJS.enc.Utf8));

      return originalText
}