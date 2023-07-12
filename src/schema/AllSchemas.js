import * as Yup from "yup";
import "yup-phone-lite";

export const loginSchema = Yup.object({
    email: Yup.string().email("*Please enter valid email address").required("*Please enter email address"),
    password: Yup.string()
        .required("*Password is required")
        .min(8, "*Password must be at least 8 characters long")
        .max(255, "*Password must be no more than 255 characters long")
        .matches( /[a-z]/, "*Password must contain at least 1 lowercase letter.")
        .matches( /[A-Z]/, "*Password must contain at least 1 uppercase letter.")
        .matches( /[0-9]/, "*Password should contain altleast 1 digit.")
        .matches(  /[!@#$%^&*]/, "*Password should contain altleast 1 special character.")
})


export const forgotPwdSchema = Yup.object({
    email: Yup.string().email("*Please enter valid email address").required("*Please enter email address"),
})

export const signupStep1Schema = (country)=>{
    let countryCode = country.toUpperCase()
    return Yup.object({
        firstName: Yup.string().required("*Please enter first name"),
        lastName: Yup.string().required("*Please enter last name"),
    
        email: Yup.string().email("*Please enter valid email address").required("*Please enter email address"),
        phone: Yup.string()
            .phone(countryCode, "*Please enter a valid mobile number")
            .required("*Mobile nmuber is required"),
    
        password: Yup.string()
            .required("*Password is required")
            .matches(/^[\S]+$/ , "*Password cannot contain spaces")
            .matches(/^[^_]+$/, "*Password cannot contain underscores")
            .min(8, "*Password must be at least 8 characters long")
            .max(255, "*Password must be no more than 255 characters long")
            .matches( /[a-z]/, "*Password must contain at least 1 lowercase letter.")
            .matches( /[A-Z]/, "*Password must contain at least 1 uppercase letter.")
            .matches( /[0-9]/, "*Password should contain altleast 1 digit.")
            .matches(  /[!@#$%^&*]/, "*Password should contain altleast 1 special character."),
            
    
        confirmPassword: Yup.string().required("*Confirm password is required").oneOf([Yup.ref("password")], "*Password doesn't match"),
    })
} 

    

export const signupStep2Schema = Yup.object({
    institute: Yup.string().required("*Please enter schoolname"),
    state: Yup.string().required("*Please enter school name"),
    country: Yup.string().required("*Please enter country"),
    city: Yup.string().required("*Please enter city"),
    zipCode: Yup.number().required("*Please enter zip code"),
    termsAndConditions: Yup.boolean().oneOf([true], "*Please accept all terms and conditions.")
})
