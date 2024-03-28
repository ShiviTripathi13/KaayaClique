import React from 'react';
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Components/LoginAuth';
import Dashboard from './Pages/Dashboard';
import Error from './Components/Error';
import About from './Pages/About';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import Contact from './Pages/Contact';
import Policy from './Pages/Policy';
function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<Policy/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Error/>} />
    </Routes>
    <Footer/>
  </Router>
 
    
   
  );
}

export default App;
