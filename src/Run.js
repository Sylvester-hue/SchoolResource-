
function SimpleForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    console.log('Submitted username:', username);
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