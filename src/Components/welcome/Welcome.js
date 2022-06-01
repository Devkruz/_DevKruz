import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { welcomeDB } from '../../db';
import "./welcome.css"

export default function componentName() {
  return (
    <div id="home" className="welcome-wrapper">
       <div className="welcome-container">
           <div className="welcome"><p>Welcome</p></div>
           <div className="name"><h2 dangerouslySetInnerHTML={{__html: welcomeDB.name}}></h2></div>
           <div className="title"><h3>{welcomeDB.title}</h3></div>
           <div className="icon"><FontAwesomeIcon icon={faCoffee} size="lg"/></div>
       </div>
    </div>
  );
}
