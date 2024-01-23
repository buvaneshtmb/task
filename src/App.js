import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import ForgotPassword from './components/ForgotPassword';
import Email from './components/Email';
import ConcordRoutes from './utils/ConcordRoutes';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='' element = {<Login/> }/>
      <Route path='reset-password' element = {<ForgotPassword/> }/>
      <Route path='reset-password-email' element = {<Email/> }/>
      <Route path='concord/*' element = {<ConcordRoutes/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
