import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBehanceSquare, FaWhatsappSquare } from "react-icons/fa";
// import { navLink } from "../constant/data";
import AbouImg from "../images/rahulpr.png";



export default function Hero() {
  return (
    <div
      className="xl:px-52  md:px-4 pb-256 pt-256 lg:pt-32 pt-24  xl:pb-7 lg:pb-9 pb-10 bg-[#fff9eb] dark:bg-[#161310]"
      id="home"
    >
      <div className="grid lg:grid-cols-1  place-items-center md:gap-5 gap-5 lg:mb-10">
        <div className="flex border-beam order-2 lg:order-1 flex-col text-center lg:text-start justify-center  gap-5">
          <div className="flex items-center md:justify-center gap-2 w-fit mx-auto md:mx-0">
            <img src={AbouImg} className="w-auto h-[64px] borderimage"/>
            {/* <div className="w-8 h-[2px] bg-[#131826] dark:bg-[#edf1ff] rounded-md hidden md:flex"></div> */}
            <h2 className="md:text-lg font-serif text-sm font-normal dark:text-[#edf1ff] text-[#131826] md:leading-[1.2] fredoka">
              Hi, nice to meet you!
            </h2>
          </div>

          <h2 className="md:text-5xl  text-3xl font-bold  md:leading-[1.2]">
            <span class="bg-clip-text text-[#131826] dark:bg-white bg-gradient-to-r from-fuchsia-500 via-red-400 to-amber-400 fredokamedium">
              Rahul here, I am an UI /sssss UX DESIGNER and a tech enthusiast based in India. {" "} 
            </span>
          </h2>
          { <h2 className="md:text-xl font-serif text-xl font-medium dark:text-[#edf1ff] text-[#131826] md:leading-[1.2]   px-5 md:px-0 fredoka">
            Crafting delightful and impactful user experiences for businesses with 6+ years of expertise
          </h2> }
          {/* <div className="flex  flex-col gap-4 mx-auto md:mx-0">
            <div className="flex flex-col gap-4 justify-center w-fit ">
              <a href="#contact" className="flex font-serif items-center justify-center gap-3 bg-white dark:bg-[#161310] w-fit px-8 py-3 rounded-full md:h-[45px] text-gray-900 dark:text-white md:font-[600] font-[500] md:text-md text-sm hover:bg-transparent outline hover:outline-1 hover:text-white dark:hover:bg-white transition-all ease-linear dark:hover:text-gray-900">
                Resume
              </a>
              <div className="flex items-center justify-center gap-4 text-xl md:text-2xl">
                <a
                  href="https://www.linkedin.com/in/rahulprofficial070/" className="text-white dark:[#edf1ff]"
                  target="blank"
                >
                  {" "}
                  <FaLinkedin color="#edf1ff" />
                </a>
                <a href="https://www.behance.net/rahulofficial070" className="text-white dark:text-black/90" target="blank">
                  {" "}
                  <FaBehanceSquare color="#edf1ff" />
                </a>
                <a href="whatsapp://send?phone=9605597646" className="text-white dark:text-black/90">
                  <FaWhatsappSquare color="#edf1ff"/>
                </a>
              </div>

            </div>
          </div> */}


        </div>
        {/* <img
          src={AbouImg}
          className="order-1 lg:order-2 mx-auto pt-3 md:pt-0 lg:w-[30em] md:w-[18em] w-[13rem]"
          alt="profileImage"
        /> */}
      </div>
    </div>
  );
}
