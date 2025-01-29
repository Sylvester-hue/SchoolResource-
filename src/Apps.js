import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyForm from './MyForm';
import SuccessPage from './SuccessPage';

const Apps= () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MyForm />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>
        </Router>
    );
};

export default Apps;
