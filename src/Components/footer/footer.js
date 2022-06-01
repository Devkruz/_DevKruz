import React from 'react';
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer-wrapper">
        <div className="footer-container">
            <h1>Kruz Dev</h1>
             <div className="footer">
                <div className="find-me">
                    <h5>Where to find me</h5>
                    <h3>Plot 10, channel TV road Opic. Lagos</h3>
                </div>
                <div className="follow-me">
                    <h5>Follow me</h5>
                    <h3><a href="https://www.linkedin.com/in/sanni-adetola-157851150/">LinkIn</a></h3>
                    <h3><a href="https://github.com/Devkruz">GitHub</a></h3>
                    <h3><a href="https://codepen.io/devkruz">CodePen</a></h3>
                </div>
                <div className="contact-me">
                    <h5>Contact me</h5>
                    <h3>sanniadetola202@gmail.com</h3>
                    <h3>+2349060542969</h3>
                    
                </div>
             </div>
        </div>
    </div>
  );
}
