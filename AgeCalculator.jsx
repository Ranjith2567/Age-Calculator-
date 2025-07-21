import React, { useState } from 'react';
import '../App.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [ageResult, setAgeResult] = useState('');

  const calculateAge = () => {
    if (!dob) {
      setAgeResult('Please select a date.');
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAgeResult(`You are ${years} years, ${months} months, and ${days} days old.`);
  };

  return (
    <div className="container">
      <div className="card">
        <h2> Age Calculator</h2>
        <label htmlFor="dob">Select your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate</button>
        {ageResult && <p className="result">{ageResult}</p>}
      </div>
    </div>
  );
};

export default AgeCalculator;
