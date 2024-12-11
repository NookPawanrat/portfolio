import React from "react";
import Chip from '@mui/material/Chip';
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

const labelsFirst = [
    "C#",
    "Unity",
    "Game Design",
    "Game Engine"
];

const labelsSecond = [
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "Game Design",
];

const labelsThird = [
    "HTML",
    "CSS",
    "JavaScript",
    "Content Creator"
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                    <a href="https://github.com/NookPawanrat/Immune-Rush-Game.git" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/NookPawanrat/Immune-Rush-Game.git" target="_blank" rel="noreferrer"><h2>Immune Rush Game</h2></a>
                    <p>Designed and currently developing a fun and fast-paced top-down shooter 2D game set inside the human body using C# and Unity. Expected Release Date: 15 December 2024</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips"> 
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>

            <div className="project">
                <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://yujisatojr.itch.io/highspeedchase" target="_blank" rel="noreferrer"><h2>R Code Project Game</h2></a>
                    <p>Designed and developed a flight-simulator puzzle web-based game using HTML CSS Python and JavaScript.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>

            <div className="project">
                <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://yujisatojr.itch.io/spacecraft" target="_blank" rel="noreferrer"><h2>Cat-ch Your Wishe</h2></a>
                    <p>Developed E-Commerce website tailored for pre-ordering your desired 'products' (in this case, your wishes) to be fulfilled in 2024 using HTML CSS and JavaScript.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>
            
        </div>
    </div>
    );
}

export default Project;