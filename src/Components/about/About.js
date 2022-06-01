import React from 'react';
import "./about.css";
import { aboutDB } from '../../db';

const About = () => {
  return (
    <div id="about" className="about-wrapper">
      <div className="about-container">

        <div className="profile-img-wrapper">
           <div className="profile-img-container">
               <img src="./person.JPG" alt="" />
           </div>
        </div>

        <div className="profile-wrapper">
          <div className="profile-container">
              <h1 className="name">{aboutDB.name}</h1>
              <h3 className="title">{aboutDB.title}</h3>
            <p className="brief-summary">{aboutDB.summary}</p>
              <ul className="about">
                <li><b>Lives In:</b> {aboutDB.livesIn} </li>
                <li><b>Age:</b> {aboutDB.age} </li>
                <li><b>Gender:</b> {aboutDB.gender} </li>
              </ul>
              <a href={aboutDB.cvDownloadUrl} className="download-cv">Download CV</a>
          </div>
        </div>
          
      </div>
    </div>
  )
}

export default About;


