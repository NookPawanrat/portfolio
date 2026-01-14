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

{/* Immune Rush Game*/}
const labelsFirst = [
    "C#",
    "Unity",
    "Game Design",
    "Game Engine"
];

{/* R Code Project Game*/}
const labelsSecond = [
    "HTML",
    "CSS",
    "Python",
    "JavaScript",
    "Game Design",
];

{/* Cat-ch Your Wishe */} 
const labelsThird = [
    "HTML",
    "CSS",
    "JavaScript",
    "Content Creator"
];

{/*VR Forklift Parking Simulator*/}
const labels4 = [
    "Unreal Engine 5",
    "VR Development",
    "Blueprint Scripting",
    "UI/UX Design"
];

{/*Lakeside gaems Web Design*/}
const labels5 = [
    "UX/UI Design",
    "User Research & Testing",
    "Wireframing & Prototyping (Figma)",
    "Web Design & Implementation (Squarespace)"
];

{/*UX Playtesting & Feedback System*/}
const labels6 = [
    "UX Research",
    "Usability Testing",
    "Survey Design",
    "Unity Analysis"
];

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            
            {/*UX Playtesting & Feedback System*/}
            <div className="project">
                    <a href="https://www.linkedin.com/posts/pawanrat-santiyanon_a-small-failure-a-big-lesson-and-activity-7389339996467564544-acmw" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.linkedin.com/posts/pawanrat-santiyanon_a-small-failure-a-big-lesson-and-activity-7389339996467564544-acmw" target="_blank" rel="noreferrer"><h2>UX Playtesting & Feedback System (In Progress)</h2></a>
                    <p>Designed a scalable UX research system for playtesting, combining player feedback and behavior data to evaluate usability, clarity, and gameplay experience.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips"> 
                        <span className="chip-title">Skills:</span>
                        {labels6.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>
            

            {/*Lakeside gaems Web Design*/}
            <div className="project">
                    <a href="https://www.linkedin.com/posts/pawanrat-santiyanon_uxdesign-uidesign-webdesign-activity-7376153438562299904-n-3m" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://www.linkedin.com/posts/pawanrat-santiyanon_uxdesign-uidesign-webdesign-activity-7376153438562299904-n-3m" target="_blank" rel="noreferrer"><h2>Lakeside Games Studio Website Redesign</h2></a>
                    <p>Redesigned and implemented the Lakeside Games website to improve usability, accessibility, and engagement, with a focus on increasing Steam Wishlist Twilight Ferry Game.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips"> 
                        <span className="chip-title">Skills:</span>
                        {labels5.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>
            

            {/*VR Forklift Parking Simulator*/}
            <div className="project">
                    <a href="https://github.com/NookPawanrat/VR-Forklift-Parking-Training-Demo" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/NookPawanrat/VR-Forklift-Parking-Training-Demo" target="_blank" rel="noreferrer"><h2>VR Forklift Parking Simulator</h2></a>
                    <p>Developed an immersive VR forklift training simulator using Unreal Engine 5 and Blueprint Scripting. This project enhances forklift operation skills through physics-based controls and interactive training scenarios.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips"> 
                        <span className="chip-title">Skills:</span>
                        {labels4.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>

            
            {/* Immune Rush Game*/}
            <div className="project">
                    <a href="https://github.com/NookPawanrat/Immune-Rush-Game.git" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/NookPawanrat/Immune-Rush-Game.git" target="_blank" rel="noreferrer"><h2>Immune Rush Game</h2></a>
                    <p>Designed and currently developing a fun and fast-paced top-down shooter 2D game set inside the human body using C# and Unity.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips"> 
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>
            

            {/* R Code Project Game*/}
            <div className="project">
                <a href="https://github.com/NookPawanrat/Web-Game-R-Code-Project" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/NookPawanrat/Web-Game-R-Code-Project" target="_blank" rel="noreferrer"><h2>R Code Project Game</h2></a>
                    <p>Designed and developed a flight-simulator puzzle web-based game using HTML CSS Python and JavaScript.</p>
                    {/* List of keyword or skill*/}
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
            </div>


            {/* Cat-ch Your Wishe */}                
            <div className="project">
                <a href="https://github.com/NookPawanrat/Web-E-Commerce-Cat-ch-Your-Wishes-" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/NookPawanrat/Web-E-Commerce-Cat-ch-Your-Wishes-" target="_blank" rel="noreferrer"><h2>Cat-ch Your Wishe</h2></a>
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