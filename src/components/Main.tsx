import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import avatarCircle from '../assets/images/avatar_circle.png';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatarCircle} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/NookPawanrat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pawanrat-santiyanon/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Pawanrat Santiyanon</h1>
          <h2>Game Developer & Designer</h2>

          <div className="mobile_social_icons">
            <a href="https://github.com/NookPawanrat" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/pawanrat-santiyanon/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;