import "./App.css";
import Run from "./Run";
import React from "react";
const SchoolResource =() => {
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted!');
};
    return (
      <div>
        <header className="App">
          <h1>COLLEGE OF DIGITAL EXCELLENCE</h1>
          <nav>
          <a href="#home">Home</a> |
          <a href="#about">About</a> |
          <a href="#contact">Contact</a> |
        </nav>
        </header><br/>
                <div id="div1">
                <form onSubmit={handleSubmit}>
                    FirstName :
                    <input type="text" name="f_name"placeholder="FirstName" className="inp"/> <br/><br/>
                    SecondName :
                    <input type="text" name="s_name"placeholder="SecondName" className="inp"/><br/><br/> 
                    <input type="submit" value="LogIn" />
                    <input type= "reset" /><br/><br/>
                    </form>
                    
                </div>
      </div>
    );
  }
  export default SchoolResource;