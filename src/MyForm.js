import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here

        // Redirect to another page with the name
        navigate('/success', { state: { name: formData.name } });
    };

    const handleLogin = () => {
        navigate('/login');
    };
    return (
            
        <form onSubmit={handleSubmit} target_blank>
             <h1>COLLEGE OF DIGITAL EXCELLENCE</h1>
            <div id = "div1">
            <h2>Register</h2>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} /><br/><br/>
            
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} /><br/><br/>
                <button type="submit">Submit</button>
                <button type="button" onClick={handleLogin}>Login</button>
            </div>
           
        </form>
    );
};

export default MyForm;
