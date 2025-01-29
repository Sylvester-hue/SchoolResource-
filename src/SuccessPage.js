import React from 'react';
import { useLocation } from 'react-router-dom';

const SuccessPage = () => {
    const location = useLocation();
    const { name } = location.state || { name: 'Guest' };

    return (
        <div>
            <h1>Hello, {name}<br/> Form Submitted successfuly</h1>
        </div>
    );
};

export default SuccessPage;
