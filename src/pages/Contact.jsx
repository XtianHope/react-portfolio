import React from 'react';

function Contact() {
  return (
    <div className="content">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required value="Christian Tino" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required value="xtianhope@gmail.com" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;