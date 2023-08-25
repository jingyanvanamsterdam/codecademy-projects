import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  //？？->
  const [authorized, setAuthorized] = useState(false);

  const login = (
      <form action='#'>
       <input type='password' placeholder='Password'>
        </input>
        <input type='submit'>
        </input>
     </form>
    );
  const contactInfo = (
      <ul>
        <li>
          client@example.com
        </li>
        <li>
          555.555.5555
        </li>
      </ul>
  ); 

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  };

  return (
    <div id="authorization">
      <h1>
        {authorized ? 'contact' : 'Enter the Password'}
      </h1>
      {authorized ? contactInfo : login}
    </div>
  );
}

export default Contact;