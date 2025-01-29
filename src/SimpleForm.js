import React from 'react';

function SimpleForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleForm;