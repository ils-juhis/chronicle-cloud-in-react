import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import Dashboard from './pages/Dashboard/Dashboard';
import FormLayout from './components/FormLayout/FormLayout';


function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<FormLayout />}>
          <Route index element={<Login /> } />
          <Route path="/sign-up" element={<SignUp/> } />
          <Route path="/forgot-pwd" element={<ForgotPassword/> } />
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}>
    
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
