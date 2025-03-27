import React from 'react';
import './chatlink.css';

const Chatlink = () => {
  return (
    <header className="header">
      <div className="chat-now">
        <div className="line-before"></div> {/* Horizontal line */}
        <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
        <span>Chat Now</span>
      </div>
    </header>
  );
};

export default Chatlink;