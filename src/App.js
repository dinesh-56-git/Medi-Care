import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h1>MediCare</h1>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Smart Hospital Management System</h2>
          <p>Streamlining patient care and modern hospital operations.</p>
          <a href="#" className="btn">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature-box">
          <h3>Patient Management</h3>
          <p>Easily maintain patient records with secure access.</p>
        </div>

        <div className="feature-box">
          <h3>Doctor Scheduling</h3>
          <p>Smart appointment booking & duty management system.</p>
        </div>

        <div className="feature-box">
          <h3>Billing & Reports</h3>
          <p>Generate automated bills and real-time analytics.</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 MediCare | Smart Hospital Management System</p>
      </footer>
    </>
  );
}
