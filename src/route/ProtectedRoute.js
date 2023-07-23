import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const userInfo = useSelector((state) => state.reducers.userInfo);
    useEffect(()=>{
        if (!userInfo) {
            console.log(userInfo)
            navigate("/")
        }
    },[userInfo])

    return children;
};

export default ProtectedRoute;