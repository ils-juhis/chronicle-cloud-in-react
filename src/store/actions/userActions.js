import { 
  FORGOT_PASSWORD, 
  LOGGEDIN, 
  LOGIN, 
  LOG_OUT, 
  SIGN_UP 
} from "../constant"

export const signUp = (userData) =>{
  return{
    type: SIGN_UP,
    userData
  }
}

export const login = (email, password) =>{
  return{
    type: LOGIN,
    email, 
    password
  }
}

export const loggedIn = (user)=>{
  return {
    type: LOGGEDIN,
    user
  }
}

export const forgotPassword = (email) =>{
  return {
    type: FORGOT_PASSWORD,
    email
  }
}

export const logOut = () =>{
  return{
    type: LOG_OUT,
  }
}
