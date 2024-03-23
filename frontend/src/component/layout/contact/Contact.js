import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleCancelClick = () => {
    // Clear the input field
    setName('');
    setEmail('');
    setContact('');
    setMessage('');
  };

  return (
  <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div className="app-contact">CONTACT INFO : 97-585-XXX-595</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" value={name} onChange={(e) => setName(e.target.value)}  placeholder="NAME"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" value={contact} onChange={(e) => setContact(e.target.value)}  placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" value={message} onChange={(e) => setMessage(e.target.value)}  placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button" onClick={handleCancelClick}>CANCEL</button>
              <button className="app-form-button">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default Contact;
