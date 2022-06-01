import "./skills.css";
import React from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {skillsDB} from "../../db"

function CircularProgressWithLabel(props) {
  
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress  variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{fontSize: "1.5em", opacity:.7}} variant="caption" component="div" color="white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};





export default function Skills() {


 const loadFrontend = () => {
       return skillsDB.frontend.map((front, index)=> {
               return (
                    <div key={index} className={front.id + "-cont center"}>
                        <CircularProgressWithLabel value={front.value}/>
                        <h3 id={front.id}>{front.name}</h3>
                     </div>

               )
        })
 };
 const loadProgramming = () => {
       return skillsDB.programming.map((pro,index)=> {
               return (
                    <div key={index} className={pro.id + "-cont center"}>
                        <CircularProgressWithLabel value={pro.value}/>
                        <h3 id={pro.id}>{pro.name}</h3>
                     </div>

               )
        })
 };

  return (
    <div className="skills-wrapper">
       <div className="skills-container">
              <div className="frontend-container">
                <h1>Font-End Skills</h1>
                  <div className="frontend">
                    { loadFrontend() }
                  </div>
              </div>

              <div className="language-container">
                 <h1>Programming </h1> 
                   <div className="language">
                      {loadProgramming()}
                 </div>
              </div>

       </div>
    </div>
  );
};
