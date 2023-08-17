import React, { useState } from 'react';
import './PasswordGenerator.css';

function PasswordGenerator() { 
  const [password, setPassword] = useState(''); //initializes a state variable 'password' using the 'useState' hook. this will hold the generated password
  const [length, setLength] = useState(12);

  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    let newPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      newPassword += charset[randomIndex];
    }
    setPassword(newPassword);
  };

  return (
    <div className='password-generator'>
      <h2>Password Generator</h2>
      <div className='password-input'>
        <label>Password Length:</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
       
      <button className='generate-button' onClick={generatePassword}>Generate Password</button>
      <div className='generated-password'>
        <h3>Generated Password:</h3>
        <p>{password}</p>
      </div>
    </div>
  );
}

export default PasswordGenerator;
