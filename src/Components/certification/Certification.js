import React from 'react';
import "./certificate.css";
import { certificateDB } from '../../db';


const Certification = () => {

   const loadCertificate = () => {
       return certificateDB.certificate.map((cert, index)=> {
             return (
                  <div key={index} className="educate">
                       <h4 className="year">{cert.year}</h4>
                        <div className="result">
                           <h5 className="head">{cert.head}</h5>
                           <p className="place">{cert.place}</p>
                           <p className="desc">{cert.desc}<span className="view-project"><a href={cert.view}>View</a></span></p>
                           
                        </div>
                  </div>
             );
        });
   };

   const loadEducate = () => {
       return certificateDB.educate.map((edc, index)=> {
             return (
                  <div key={index} className="educate">
                       <h4 className="year">{edc.year}</h4>
                        <div className="result">
                           <h5 className="head">{edc.head}</h5>
                           <p className="place">{edc.place}</p>
                        </div>
                  </div>
             );
        });
   };

  return (
    <div className="certification-wrapper">
        <div className="certification-container">
           
          
             <div className="educate-container">
                <h2>Education</h2>
                  { loadEducate() }
             </div>
          
    
             <div className="certificate-container">
                <h2>Certification</h2>
                 { loadCertificate() }
             </div>


        </div>
    </div>
  )
}

export default Certification
