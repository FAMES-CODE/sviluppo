import React, { useRef, useEffect } from "react";
import Navbar from "../navbar/Navbar";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//test
import "./main.css";

export default function Mainpage() {
  const theemail = "myfrefezfezf@gmail.com";
  const MyRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let postsSection = document.querySelector("#introtext");
    gsap.to(MyRef.current, {
      y: (i, el) =>
        -1 *
        parseFloat(el.getAttribute("data-speed")) *
        postsSection.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: postsSection,
        invalidateOnRefresh: true,
        scrub: 1,
        markers: false,
      },
    });
  }, []);

  return (
    <div id="maincontainer">
      <Navbar />
      <div id="mainbody">

        <img src="./Group88.svg" alt="."/>
          <h1 id="sw">Sviluppo Web</h1>
        <div id="introtext">
          <h1 data-aos="zoom-in">
            WE DEVELOP <br /> YOUR IDEA.
          </h1>
          <p>
            WE MAKE
            <span id="boxRef">
              <a href="#s2"> DIGITAL PRODUCTS </a>
            </span>
            FOR YOU !
          </p>
          <span id="scroll">
            Scroll <br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
              id="arrow"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
              />
            </svg>
          </span>

          <img id="paralex" data-speed="1"  alt="." ref={MyRef} src="./Saly-10.svg" />
        </div>
      </div>

      <div id="s1">
        <img src="./Group89.svg"  alt="." />

        <div id="s1cont">
          <div>
            <img
              id="aboutimg"
              data-aos="flip-left"
              data-aos-duration="1500"
              src="./about.svg"
              alt="."
            />
          </div>

          <div id="s1text">
            <h1 data-aos="fade-down" data-aos-duration="1000">About us</h1>
            <br />
            <p data-aos="fade-up" data-aos-duration="1000">
              WE'RE A DEVELOPEMENT STUDIO FOCUSED ON CREATING INNOVATIVE DIGITAL
              PRODUCTS 
              WE HELP COMPANIES TO HAVE A GLOBAL IMPACT AND SHARE MEANINGFUL
              CONNECTIONS WITH THEIR AUDIENCE AND RE-DISCOVER THEIR
              IDENTITY. WE HELP OUR CLIENTS REALIZE THEIR FULL  POTENTIAL
              AND SET THEM APART FROM THEIR COMPETITION.
            </p>
          </div>
        </div>
      </div>

      <div id="s2">
        <img src="./Group47.svg"  alt="." />

        <div id="s2cont">
          <div id="s2text">
            <h1>What we can do</h1>
            <br />
            <p>WE DEVELOP TO MAKE YOUR BUSINESS GROW</p>
            <br />
            <ul>
              <li data-aos="fade-right">WEBSITES</li>
              <li data-aos="fade-right">WEB APPLICATION</li>
              <li data-aos="fade-right">E-COMMERCE SHOP</li>
              <li data-aos="fade-right">WORDPRESS INTEGRATIONS</li>
              <li data-aos="fade-right">PROMO WEBSITES</li>
              <li data-aos="fade-right">CORPORATE WEBSITES</li>
            </ul>

            <br />

            <p>
              OUR SERVICES ARE RESULT-ORIENTED. AND WE OFFER A 30-DAY WARRANTY
              AGREEMENT FREE OF CHARGE FOR ALL OF THEM.
            </p>
          </div>
          <div id="skill">
            <img
              id="skills"
              data-aos="flip-right"
              data-aos-duration="1000"
              src="./skills.svg"
              alt="."
            />
          </div>
        </div>
      </div>

      <div id="s3">
        <img src="./Group87.svg"  alt="."/>
        <div id="s3cont">
          <div id="works">
            <img id="work" src="./work.svg"  alt="." />
          </div>

          <div id="s3text">
            <h1>Contact us</h1>

            <a href="mailto:lol@gmail.com?subject=Mail from Our Site">
              {theemail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/*   
  <div id="introtext">
     

        <div id="aboutus">
          <div id="aboutus2">
         
          
          </div>

          <div id="aboutus3">
            <ul>
              <li>WEB DEVELOPMENT</li>
              <li>WEB APP</li>
              <li>E-COMMERCE</li>
              
              <li>PROMO WEBSITES</li>
              <li>PROGRESSIVE WEB APPS</li>
            </ul>
          </div>
        </div>
        */

/*https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 */
