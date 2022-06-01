import React from 'react';
import Menu from '../menu/Menu';
import Welcome from "../welcome/Welcome"
import "./home.css"


function Home() {
  return (
    <section className="home-wrapper">
        <section className="home-container">
            <Menu/>
            <Welcome/>
        </section>
    </section>
  )
};

export default Home;