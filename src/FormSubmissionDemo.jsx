import React, { useState } from 'react';
import './FormSubmissionDemo.css';

function FormSubmissionDemo() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEntry = { name, email, message };
    setSubmittedData([...submittedData, newEntry]);
     setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="form-submission-demo">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData.length > 0 && (
        <table className="data-table">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((entry, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FormSubmissionDemo;
