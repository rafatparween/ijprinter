import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <section className="support">
      <h2>Instant Solution On Live Chat</h2>
      <div className="support-options">
        <div className="support-option">
          <span className="fas fa-headphones"></span> {/* Headphone icon */}
          <p>Setup Wi-Fi</p>
        </div>
        <div className="support-option">
          <span className="fas fa-cogs"></span> {/* Cogs icon */}
          <p>Setup & Install</p>
        </div>
        <div className="support-option">
          <span className="fas fa-tools"></span> {/* Tools icon */}
          <p>Diagnose & Fix</p>
        </div>
      </div>
    </section>
  );
};

export default Support;