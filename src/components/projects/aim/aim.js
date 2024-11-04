import React from 'react';
import './aim.css';
import Image1 from "./The task.png";
import Image2 from "./Analysis.png";
import Image3 from "./Persona.png";
import Image4 from "./IA.png";
import Image5 from "./Wireframe.png";
import Image6 from "./UI.png";


const AimProject = () => {
  return (
    <div className="lineup-container">
       <img src={Image1} width="100%" alt="Project Image" className="image-large" />
      <h1 className="title fredokamedium">AIM Magazine</h1>
      <p className="description fredoka">
      Analytics India Magazine chronicles technological progress in the space of analytics, artificial intelligence, data science & big data by highlighting the innovations, players, and challenges shaping the future of India through promotion and discussion of ideas and thoughts by smart, ardent, action-oriented individuals who want to change the world.
      </p>
      
      <div className="grid lg:grid-cols-0  place-items-center md:gap-5 gap-5 lg:mb-10 dark:bg-black/40">
      <div className="row full-width-row">
  <table className="title-content-table">
    <tbody>
      <tr>
        <th>Title 1</th>
        <td>Content for the first row goes here.</td>
      </tr>
      <tr>
        <th>Title 2</th>
        <td>Content for the second row goes here.</td>
      </tr>
      <tr>
        <th>Title 3</th>
        <td>Content for the third row goes here.</td>
      </tr>
    </tbody>
  </table>
</div>
        {/* <div className="flex order-2 lg:order-1 flex-col text-center lg:text-start justify-center  gap-2">
          <div className="flex items-center md:justify-center gap-20 w-fit mx-auto md:mx-0"> */}
            
            {/* <div className="w-8 h-[2px] bg-[#131826] dark:bg-[#edf1ff] rounded-md hidden md:flex"></div> */}
            {/* <h2 className="md:text-lg font-serif text-sm font-normal dark:text-[#edf1ff] text-[#131826] md:leading-[1.2] fredoka">
              Client
            </h2>
            
            <h2 className="md:text-lg font-serif text-sm font-normal dark:text-[#edf1ff] text-[#131826] md:leading-[1.2] fredoka">
              Role
            </h2>
            
          </div>
          <h2 className="md:text-xl  text-xl font-bold dark:text-[#edf1ff] text-white md:leading-[1.2] fredoka">
            <span class="bg-clip-text text-transparent dark:bg-white ">
            Analytics India Magazine {" "}
            </span>
          </h2>
          <h2 className="md:text-xl font-serif text-xl font-medium dark:text-[#edf1ff] text-[#131826] md:leading-[1.2]   px-5 md:px-0 fredoka">
            UX and UI Designer
          </h2>
          
          </div> */}
          </div>
      

      <h2 className="subtitle fredokamedium">The Task</h2>
      <p className="description fredoka">
      Improving accessibility and The user interface.
      </p>
      <img src={Image1} width="100%" alt="Project Image" className="image-large" />
      <h2 className="subtitle fredokamedium">Design Thinking Process</h2>
      <p className="description fredoka">
      The end goal of the process is to create a product, service, or experience that people want (desirability), has real potential to become useful (visibility), and can easily or conveniently be built in terms of technology (feasibility).
      It’s important to stay focused on one phase at a time,and iterate fast.
      </p>

      
      <h2 className="subtitle2 fredokaregular">Empathy</h2>
      <p className="description">
      Interviews:
      We regularly have customer meetings where we investigate current workflows, how each user thinks, the environment in which they work, pain points, expectations, and more. Our interviews are not limited to India, we conduct interviews in different parts of the world.
      </p>

      <h3 className="subtitle2">User Survey & Analysis</h3>
      <p className="description">
      Conducting the user survey have given us some surprise.
      </p>

      <img src={Image2} alt="User Analysis" className="image-large" />

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

      <img src={Image3} alt="Persona" className="image-large" />

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

      <img src={Image4} alt="IA" className="image-large" />

      <h2 className="subtitle">Defining UI (Wireframes)</h2>
      <p className="description">
      Once we had identified the main screens, we allocated them among ourselves, allowing each team member to focus on a specific set of screens. As the screens evolved and reached a more stable state, we transitioned into a more collaborative approach. In my role, I took responsibility for designing the Home, Articles, and Videos (AIM TV) screens.
      </p>

      <img src={Image5} alt="Wireframe" className="image-large" />

      <h2 className="subtitle">Brought to Life (The Outcome)</h2>

      <img src={Image6} alt="UI" className="image-large" />

      <p className="description">
        For more details, visit the full project <a href="https://apps.apple.com/tr/app/analytics-india-magazine/id1502685162?platform=iphone" className="link">here</a>.
      </p>

    </div>
  );
};

export default AimProject;
