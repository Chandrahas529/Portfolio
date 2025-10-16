import "./Projects.css";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VAarta = [
  "/Projects/Vaarta-1.png",
  "/Projects/Vaarta-2.png",
  "/Projects/Vaarta-3.png",
  "/Projects/Vaarta-4.png",
  "/Projects/Vaarta-5.png"
];
const Homeverse = [
  "/Projects/Homeverse-1.png",
  "/Projects/Homeverse-2.png",
  "/Projects/Homeverse-3.png",
  "/Projects/Homeverse-4.png",
  "/Projects/Homeverse-5.png",
  "/Projects/Homeverse-6.png"
];
const Timelessgem = [
  "/Projects_images/timelessgem-1.png",
  "/Projects_images/timelessgem-2.png",
  "/Projects_images/timelessgem-3.png",
  "/Projects_images/timelessgem-4.png",
  "/Projects_images/timelessgem-5.png",
  "/Projects_images/timelessgem-6.png",
  "/Projects_images/timelessgem-7.png",
  "/Projects_images/timelessgem-8.png",
  "/Projects_images/timelessgem-9.png"
];
const CSHospital = [
  "/Projects_images/CS_hospital-1.png",
  "/Projects_images/CS_hospital-2.png",
  "/Projects_images/CS_hospital-3.png",
  "/Projects_images/CS_hospital-4.png",
  "/Projects_images/CS_hospital-5.png",
  "/Projects_images/CS_hospital-6.png",
  "/Projects_images/CS_hospital-7.png",
  "/Projects_images/CS_hospital-8.png",
  "/Projects_images/CS_hospital-9.png",
  "/Projects_images/CS_hospital-10.png"
];

function Projects() {
  // Store interval IDs and indices for each project
  const intervalIds = useRef({});
  const indices = useRef({
    timelessgem: 0,
    cshospital: 0,
    homeverse: 0,
    vaarta: 0
  });

  // Your original transition functions
  function transitionA() {
    const image = document.querySelector(".timelessgem");
    image.src = Timelessgem[indices.current.timelessgem];
    indices.current.timelessgem = (indices.current.timelessgem + 1) % Timelessgem.length;
  }

  function transitionB() {
    const image = document.querySelector(".cshospital");
    image.src = CSHospital[indices.current.cshospital];
    indices.current.cshospital = (indices.current.cshospital + 1) % CSHospital.length;
  }

  function transitionC() {
    const image = document.querySelector(".homeverse");
    image.src = Homeverse[indices.current.homeverse];
    indices.current.homeverse = (indices.current.homeverse + 1) % Homeverse.length;
  }

  function transitionD() {
    const image = document.querySelector(".vaarta");
    image.src = VAarta[indices.current.vaarta];
    indices.current.vaarta = (indices.current.vaarta + 1) % VAarta.length;
  }

  useEffect(() => {
    const projects = document.querySelectorAll(".project");

    projects.forEach((project, index) => {
      const className = project.querySelector("img").classList[1]; // Get specific class (timelessgem, cshospital, etc.)
      const transitionFn = [transitionA, transitionB, transitionC, transitionD][index];

      project.addEventListener("mouseenter", () => {
        // Start interval only if it hasn't started for this project
        if (!intervalIds.current[className]) {
          intervalIds.current[className] = setInterval(transitionFn, 1000);
        }
      });
    });

    // Optional cleanup: Remove if you want intervals to persist after unmount
    return () => {
      Object.values(intervalIds.current).forEach(clearInterval);
      intervalIds.current = {};
    };
  }, []);

  useGSAP(() => {
    gsap.utils.toArray(".project").forEach((project) => {
      gsap.from(project, {
        opacity: 0,
        y: 150,
        scale: 0.95,
        ease: "power3.out",
        duration: 1,
        scrollTrigger: {
          trigger: project,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });
  }, []);

  return (
    <div className="projects">
      <h2>Some Projects</h2>
      <div className="project-ctn">
        <div className="project">
          <img className="project-img timelessgem" alt="timelessgem" src={Timelessgem[0]} />
          <div>
            <h3 className="project-name">Timelessgem</h3>
            <div className="project-desc">
              It is an e-commerce website especially made for wrist watch shop. I have made this project using the following tools -
            </div>
            <ul className="tools-list">
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>Mongodb</li>
              <li>Javascript</li>
              <li>Css</li>
            </ul>
            <div className="project-links">
              <a href="https://timelessgem.netlify.app/"><i className="fa-solid fa-circle" style={{ color: "#ff0000" }}></i> Live</a>
              <a href="https://github.com/Chandrahas529/TimelessGem_frontend"><i className="fa-solid fa-code" style={{ color: "#1e00ff" }}></i> Code</a>
            </div>
          </div>
        </div>
        <div className="project reverse">
          <div>
            <h3 className="project-name">CS Hospital</h3>
            <div className="project-desc">
              A website where we can make an appointment with specialists of CS Hospital. I have made this project using the following tools -
            </div>
            <ul className="tools-list">
              <li>Reactjs</li>
              <li>Nodejs</li>
              <li>Express</li>
              <li>Mongodb</li>
              <li>Javascript</li>
              <li>Css</li>
            </ul>
            <div className="project-links">
              <a href="https://timelessgem.netlify.app/"><i className="fa-solid fa-circle" style={{ color: "#ff0000" }}></i> Live</a>
              <a href="https://github.com/Chandrahas529/Doctor_appointment_frontend"><i className="fa-solid fa-code" style={{ color: "#1e00ff" }}></i> Code</a>
            </div>
          </div>
          <img className="project-img cshospital" alt="CS_Hospital" src={CSHospital[0]} />
        </div>
        <div className="project">
          <img className="project-img homeverse" alt="Homeverse" src={Homeverse[0]} />
          <div>
            <h3 className="project-name">Homeverse</h3>
            <div className="project-desc">
              It is a clone website of Homeverse, a real estate website. I have made this project using the following tools -
            </div>
            <ul className="tools-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>GSAP</li>
            </ul>
            <div className="project-links">
              <a href="https://chandrahas529.github.io/Homeverse_Clone/"><i className="fa-solid fa-circle" style={{ color: "#ff0000" }}></i> Live</a>
              <a href="https://github.com/Chandrahas529/Homeverse_Clone"><i className="fa-solid fa-code" style={{ color: "#1e00ff" }}></i> Code</a>
            </div>
          </div>
        </div>
        <div className="project reverse">
          <div>
            <h3 className="project-name">VAarta Chat App</h3>
            <div className="project-desc">
              It is a chat app like WhatsApp. It is an ongoing project. I have made this project using the following tools -
            </div>
            <ul className="tools-list">
              <li>Reactjs</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Mongodb</li>
              <li>Mega</li>
              <li>Css</li>
            </ul>
            <div className="project-links">
              <button style={{ cursor: "not-allowed" }}><i className="fa-solid fa-circle" style={{ color: "#ff0000" }}></i> Live</button>
              <button style={{ cursor: "not-allowed" }}><i className="fa-solid fa-code" style={{ color: "#1e00ff" }}></i> Code</button>
            </div>
          </div>
          <img className="project-img vaarta" alt="VAarta" src={VAarta[0]} />
        </div>
      </div>
    </div>
  );
}

export default Projects;