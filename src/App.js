//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import MyForm from './MyForm';
import SuccessPage from './SuccessPage';
import LoginPage from './LoginPage';
function App() {
  return (
     
    <Router className = 'App-header'>
        <Routes>
            <Route path="/" element={<MyForm />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
        </Routes>
    </Router>
   
);
}       

export default App;
