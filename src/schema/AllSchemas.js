import * as Yup from "yup";

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

export const signUpSchema = Yup.object({
    email: Yup.string().email("*Please enter valid email address").required("*Please enter email address"),
})
