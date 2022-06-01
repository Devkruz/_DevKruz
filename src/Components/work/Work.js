 import React from 'react';
 import "./style/work.css";
 import { workDB } from '../../db';
 
 const Work = () => {
  

   return (
     <div id="work" className="work-wrapper">
        <div className="work-container">
          
             <h3 className="portfolio">Portfolio</h3>
             <h1 className="heading">See My Works</h1>

             <div className="works">
                 {
                   workDB.map((work, index )=> {
                          return (
                            <div key={index} className="work">
                                <img className="img" alt={work.title} src={work.img}/>

                                <div className="body">
                                  <h3 className="title">{work.title}</h3>
                                  <p className="desc">{work.desc}</p>
                                  <div className="links">
                                    {work.links.map((link, index)=> {
                                           return (
                                               <span key={index} className={link.source}><a href={link.url}>{link.source}</a></span>                     
                                           )
                                    })}
                                    
                                  </div>
                                </div> 

                             </div>

                          )
                   })
                 }
              
             </div>
        </div>
     </div>
   )
 }
 
 export default Work
 
