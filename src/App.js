import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/LoginAuth';
import Dashboard from './UserProtectedRoutes/Dashboard';
import Error from './Components/Error';
import About from './Pages/About';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
import SignUp from './Components/SignUp';
import PrivateRoute from './Components/Routes/PrivateRoute';
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/dashboard" element={<PrivateRoute />} >
        <Route path="" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
 
    
   
  );
}

export default App;
