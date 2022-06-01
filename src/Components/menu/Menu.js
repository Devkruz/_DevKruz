import React, {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp, faHamburger } from '@fortawesome/free-solid-svg-icons';
import { menuDB } from '../../db';
import "./menu.css"

export default function Menu() {
     const [menuOpen, setMenuOpen] = useState(false);
     const [menuStatic, setMenuStatic] = useState(true);
     const menuIcon = function() {
          return (  <div className={menuOpen ? "btn-open": ""}><FontAwesomeIcon icon={faAngleUp}/>  <FontAwesomeIcon icon={faHamburger}/></div>)
     };
     const menuControl = function() {
           setMenuOpen(!menuOpen)
     };
    function menuItems() {
       return menuDB.menuList.map((list, index)=> (<li key={index} className="menu-items"><a href={list.link}>{list.name}</a></li>));
    };

    useEffect(()=> {
         document.addEventListener("scroll", function(event) {
           if(window.scrollY >= 450) {
              setMenuStatic(false);
           }
           else {
             setMenuStatic(true);
           };
          
         });
    },[]);

  return (
    <div className={`menu-wrapper ${menuOpen ? "menu-open" : ""} ${menuStatic ? "" : "menu-fixed"}`}>
      <div className="menu-container">
           <div className="menu-btn" onClick={menuControl}>
             {menuIcon()} 
           </div>
          <div className="logo">
            <h1>Kruz Dev</h1>
          </div>
          <ul className="menu">
              {menuItems()} 
          </ul>
      </div>
    </div>
  );
};
