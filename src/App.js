import './App.css';
import { Routes, Route} from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { getCurrentCountry, loggedIn } from './store/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {app} from './firebaseConfig'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loadable from "react-loadable";

import Loader from './components/Loader/Loader';
const Login = lazy(() => import('./pages/Login/Login'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword/ForgotPassword'));
const FormLayout = lazy(() => import('./components/Form/FormLayout/FormLayout'));
const Home = lazy(() => import('./pages/Home/Home'));
const ProtectedRoute = lazy(() => import('./route/ProtectedRoute'));
const Dashboard = Loadable({
  loader: ()=> import("./components/Dashboard/Dashboard"),
  loading: Loader
})


const auth = getAuth(app);

function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(loggedIn(user))
      }
    });
    dispatch(getCurrentCountry());
  },[])
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<FormLayout />}>
            <Route index element={<Login /> } />
            <Route path="sign-up" element={<SignUp/> } />
            <Route path="forgot-pwd" element={<ForgotPassword/> } />
          </Route>
          
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}>
            <Route index element={<Home /> } />
            <Route path="manage-teacher" element={<></> } />
            <Route path="manage-schools" element={<></> } />
            <Route path="manage-classes" element={<></> } />
            <Route path="manage-rosters" element={<></> } />
          </Route>

        </Routes>
      </Suspense>
    </>
  );
}

export default App;
