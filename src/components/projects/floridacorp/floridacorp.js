import React from 'react';
import './floridacorp.css';


const FloridCorpProject = () => {
  return (
    <div className="lineup-container">
      <h1 className="title">AIM Magazine</h1>
      <p className="description">
      Analytics India Magazine chronicles technological progress in the space of analytics, artificial intelligence, data science & big data by highlighting the innovations, players, and challenges shaping the future of India through promotion and discussion of ideas and thoughts by smart, ardent, action-oriented individuals who want to change the world.
      </p>

      <img src="hh" width="100%" alt="Project Image" className="image-large" />

      <h2 className="subtitle">The Task</h2>
      <p className="description">
      Improving accessibility and The user interface.
      </p>

      <h2 className="subtitle">Design Thinking Process</h2>
      <p className="description">
      The end goal of the process is to create a product, service, or experience that people want (desirability), has real potential to become useful (visibility), and can easily or conveniently be built in terms of technology (feasibility).
      It’s important to stay focused on one phase at a time,and iterate fast.
      </p>

      
      <h2 className="subtitle">Empathy</h2>
      <p className="description">
      Interviews:
      We regularly have customer meetings where we investigate current workflows, how each user thinks, the environment in which they work, pain points, expectations, and more. Our interviews are not limited to India, we conduct interviews in different parts of the world.
      </p>

      <h3 className="subtitle2">User Survey & Analysis</h3>
      <p className="description">
      Conducting the user survey have given us some surprise.
      </p>

      <img src="hh" alt="User Analysis" className="image-large" />

      <p className="description">
      After we went through the survey , we identified a couple of 
      Important things:
       <ul>
        <li>Only 3.7 percentage of people have used the community feed page.</li>
        <li>Surprisingly 35% people are using videos instead of reading.</li>
        <li>For those who are multitasking, playing video is a better option for them.</li>
      </ul>
      </p>

      <h2 className="subtitle">Define</h2>
      <p className="description">
      To define, or re-define, the problem or challenge, a point of view (PoV) formula can help: PoV = persona + need + insight.
      </p>
      <h3 className="subtitle2">Persona</h3>

      

      <h2 className="subtitle">Ideation</h2>
      <p className="description">During the ideation phase, we conducted an internal meeting involving key stakeholders and technical experts who actively participated in the interviews.
      
      </p>

      

      <h3 className="subtitle2">Problem</h3>
       <ol>
        <li>How can we enhance the utilization of the community feeds page to better serve our users?</li>
        <li>What is the optimal number of videos we can produce for each article?</li>
        <li>What strategies can we employ to enhance the user experience for multitaskers?</li>
      </ol>

      <h3 className="subtitle2">Solution</h3>
       <ol>
        <li>Instead of utilizing the community feeds page, let's integrate social media links within the app, such as a Telegram group, where users can submit their ideas for publication by the admin.</li>
        <li>Rather than producing videos, let's consider incorporating a robotic voice feature for every article, enhancing the accessibility and user experience.</li>
      </ol>

      <h2 className="subtitle">Information Architecture</h2>

      

      <h2 className="subtitle">Defining UI (Wireframes)</h2>
      <p className="description">
      Once we had identified the main screens, we allocated them among ourselves, allowing each team member to focus on a specific set of screens. As the screens evolved and reached a more stable state, we transitioned into a more collaborative approach. In my role, I took responsibility for designing the Home, Articles, and Videos (AIM TV) screens.
      </p>

      

      <h2 className="subtitle">Brought to Life (The Outcome)</h2>

      
      <p className="description">
        For more details, visit the full project <a href="https://apps.apple.com/tr/app/analytics-india-magazine/id1502685162?platform=iphone" className="link">here</a>.
      </p>

    </div>
  );
};

export default FloridCorpProject;
