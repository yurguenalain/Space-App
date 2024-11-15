import React from 'react';
import "./about.css"; 
import foto from "./foto.jpg";

function About() {
  return (
    <div className="about-container">
      <h1>About me </h1>
      
      <div className="profile-info">
       
        <img 
          src={foto} 
          alt="Foto de perfil"
          className="profile-photo"
        />
        
        <div className="info">
         
          <h2>Alain Esparza</h2>
          
          
         
          <p>
            <strong>Email: </strong> 
            <a href="mailto:yurguen.alain@gmail.com">yurguen.alain@gmail.com</a>
          </p>
        </div>
      </div>
      
  
      <p>
        My name is Alain Esparza Im a Jr software developer that handle develop issues with HTML, CSS, Javacript and React. 
        Currently Im Studing Java FullStack in Generation Mexico. 
      </p>
    </div>
  );
}

export default About;
