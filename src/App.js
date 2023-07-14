import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'
import Dashboard from './components/Dashboard/Dashboard';
import FormLayout from './components/Form/FormLayout/FormLayout';
import { useEffect } from 'react';
import { getCurrentCountry } from './store/actions';
import { useDispatch } from 'react-redux';
import Home from './pages/Home/Home';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCurrentCountry());
  },[])
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route index element={<Login /> } />
          <Route path="sign-up" element={<SignUp/> } />
          <Route path="forgot-pwd" element={<ForgotPassword/> } />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
          <Route index element={<Home /> } />
          <Route path="manage-teacher" element={<></> } />
          <Route path="manage-schools" element={<></> } />
          <Route path="manage-classes" element={<></> } />
          <Route path="manage-rosters" element={<></> } />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
