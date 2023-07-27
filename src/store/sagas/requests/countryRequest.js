import axios from "axios";
const getCurrentCountryReq = async()=>{
    const res = await axios('https://ipinfo.io/json?token=6978337c394849',{
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    })
    const data = await res.data;
    return data;
}

export default getCurrentCountryReq;
