import React from 'react';
import './american.css';
import Image1 from "./images/Assumptions.png";
import Image2 from "./images/Persona.png";
import Image3 from "./images/Wireframe American 1.png";
import Image4 from "./images/Stars.png";
import Image5 from "./images/Affinity.png";
import Image6 from "./images/IA.png";
import Image7 from "./images/Frame 7897.png";
import Image8 from "./images/logo.png";


const AmericanProject = () => {
  return (
    <div className="lineup-container">
      <h1 className="title fredokamedium">American Modern</h1>
      <img src={Image8} alt="Assumptions" className="image-large" />
      <p className="description fredoka">
      Analytics India Magazine chronicles technological progress in the space of analytics, artificial intelligence, data science & big data by highlighting the innovations, players, and challenges shaping the future of India through promotion and discussion of ideas and thoughts by smart, ardent, action-oriented individuals who want to change the world.
      </p>

      

      <h2 className="subtitle fredokaregular">Project Overview</h2>
      <p className="description fredoka">
      The goal of the AMIG Policyholder Services Portal was to create an intuitive, secure, and responsive platform where policyholders could manage their insurance policies, make payments, and file claims from any device. The project aimed to simplify complex insurance interactions while providing a seamless experience for both mobile and desktop users.
      </p>

      <h2 className="subtitle fredokaregular">The Challenge</h2>
      <p className="description fredoka">
      Insurance platforms often have complex workflows, and users range from tech-savvy individuals to those unfamiliar with digital interfaces.
      The challenge was to design a portal that:
      Is intuitive and accessible for all types of users.
      Works smoothly across all devices, from desktops to smartphones.
      Provides secure access to sensitive information.
      Handles complex insurance actions such as claims submission, policy review, and payment processing with ease.
      </p>

      
      <h2 className="subtitle fredokaregular">Research Phase</h2>
      <p className="description fredoka">
      We initiated the project by conducting user research to understand the needs of AMIG's diverse user base. We used:
      </p>

      <h3 className="subtitle2 fredokaregular">Interviews & Assumptions</h3>
      <p className="description fredoka">
      Conducted with policyholders to identify pain points, their needs, and expectations when managing insurance policies online.
      </p>

      <img src={Image1} alt="Assumptions" className="image-large" />

      <h2 className="subtitle2 fredokaregular">Persona</h2>
      <img src={Image2} alt="persona" className="image-large" />
      

      <h2 className="subtitle fredokaregular">Focus Group Sessions</h2>
      <p className="description fredoka">Created wireframes to visualize the new layout and navigation structure.
      </p>
      <img src={Image3} alt="persona" className="image-large" />

      <h3 className="subtitle fredokaregular">User Testing</h3>
      <p className="description fredoka"><span  className="font20">Moderated Testing:</span> Conduct in-person or virtual sessions where a facilitator guides users through tasks.</p>
      <p className="description fredoka"><span  className="font20">Audience:</span> Policyholders, Clients/Agents Stakeholders and Developers</p>
      <p className="description fredoka"><span  className="font20">Size:</span>8 users (have given diverse feedback)</p>
      <p className="description fredoka"><span  className="font20">Tasks:</span>Find your policy number, File a claim etc. </p>
      <p className="description fredoka"><span  className="font20">Satisfaction Rating:</span> <span><img src={Image4} alt="persona" className="image-small" /></span></p>
      

      <h2 className="subtitle fredokaregular">Post-Test Impressions</h2>
       <h2 className="subtitle2 fredokaregular">Affinity Diagram</h2>
       <img src={Image5} alt="persona" className="image-large" />
      
       <h2 className="subtitle fredokaregular">Re-Imagined Navigation</h2>
       <h2 className="subtitle2 fredokaregular">Information Architecture</h2>
       <img src={Image6} alt="persona" className="image-large" />
      
      <h2 className="subtitle">Defining UI</h2>
      <img src={Image7} alt="persona" className="image-large" />

      

      
      <p className="description fredoka">
        For more details, visit the full project <a href="https://policyholders.amig.com/" className="link">here</a>.
      </p>

    </div>
  );
};

export default AmericanProject;
