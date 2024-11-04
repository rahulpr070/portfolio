import { projectData } from "../constant/projectslist";
import './style.css';
import React from 'react';
import Masonry from 'react-masonry-css';

const masonryBreakpoints = {
  default: 2,
  1100: 2,
  700: 1,
};

const selectProjetcs = () => {
  return (
    <div id="projects" className="masonry-container  bg-[#fff9eb]">
      <h2 className="title fredokamedium dark:text-[#fff9eb]">Best Projects</h2>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="masonry-grid "
        columnClassName="masonry-grid_column"
      >
        {projectData.map((project) => (
          <div key={project.id} className="masonry-item custom-margin dark:bg-[#161310] bg-[#161310] text-[#131826] dark:text-[#fff9eb]">
            <a href={project.sitelink} target="_blank" rel="noopener noreferrer">
            <img className="bordercard" src={project.Image} alt={`Image of ${project.name}`} />
            <h3 className="fredokaregular font24 mt-10">{project.name}</h3>
              <p className="fredoka font20">{project.name2}</p>
              <div className="languages fredoka">
                <span>{project.lang1}</span>
                <span>{project.lang2}</span>
              </div>
             
              
            </a>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default selectProjetcs;


// const selectProjetcs = () => {
//   return (
//     <>
//          <div id="projects" className="xl:px-52 lg:px-28 md:px-16 sm:px-5  md:py-24 py-16 px-5 bg-[#Fefeff] dark:bg-[#fff9eb]">
//         <div className="mb-10 lg:mb-20">
//           <h2 className="md:text-5xl text-3xl  md:text-center text-left  font-bold text-white leading-10 md:leading-7 pr-8 md:pr-0 mb-8">
//             <span class="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400">
//               Best Projects
//             </span>
//           </h2>
//           {/* <button>Contact us</button> */}
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-2 md:gap-16 gap-10">
//           {projectData.map((i) => {
//             return( 
             
//                 <a href={i.sitelink} target="blank" className="border-2 flex flex-col gap-5 p-4 dark:bg-black/40 bg rounded-lg border-white/40 ">

//                 <div className="flex flex-col gap-5 relative group rounded-lg  overflow-hidden">
//                 <div className="text-white dark:text-black/80 text-lg font-serif tracking-wider  uppercase font-semibold ">{i.name}</div>
//                 <p className="text-white dark:text-black/80 text-md font-serif tracking-wider  font-regular ">{i.name2}</p>
//                 <img src={i.Image} alt="projectImage"  className="rounded-lg group-hover:scale-[1.1] transition ease-linear duration-200" />
//                 </div>
//                 <div className="flex flex-col  gap-3 mt-2  justify-between  backdrop-blur-sm rounded-md  ">
                                              
//                 <div className="flex gap-3 mt-2">

//                 <div className="border h-9 w-fit text-white dark:text-black  flex items-center justify-center rounded-full px-5 py-1">{i.lang1}</div>
//                 <div className="border h-9 w-fit text-white dark:text-black  flex items-center justify-center rounded-full px-5 py-1">{i.lang2}</div>
//                 </div>
//               </div>
              
//                 </a>
//             )
//           })}
//           </div>
//       </div>



//     </>
//   );
// };

// export default selectProjetcs;
