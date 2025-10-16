import "./Skills.css";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
const skills = [
    { src: "html-5", name: "HTML" },
    { src: "css-3", name: "CSS" },
    { src: "js", name: "Javascript" },
    { src: "react", name: "React" },
    { src: "nodejs", name: "Nodejs" },
    { src: "express", name: "Express" },
    { src: "mongodb", name: "Mongodb" },
    { src: "postman", name: "Postman" },
    { src: "figma", name: "Figma" },
    { src: "gsap", name: "GSAP" },
    { src: "git", name: "Git" },
    { src: "c", name: "C" },
    { src: "c++", name: "C++" },
    { src: "java", name: "Java" },
    { src: "python", name: "Python" },
    { src: "Spring", name: "Spring Boot" },
]
gsap.registerPlugin(useGSAP,ScrollTrigger);
function Skill({ src, name }) {
    return <div className="skill">
        <img src={require(`../images/${src}.png`)} alt={name} className="lang-logo" />
        <label className="language">{name}</label>
    </div>;
}
function Skills() {
    useGSAP(() => {
        // gsap.from(".skill", {
        //     y: 150,
        //     opacity: 0,
        //     duration: 1,
        //     ease: "power4.inOut",
        //     stagger: 0.2,
        //     scrollTrigger: {
        //         trigger: ".skills-list", 
        //         start: "top 80%",
        //         toggleActions: "play none none none",
        //     },
        // });
            gsap.utils.toArray(".skill").forEach((project) => {
                gsap.fromTo(
                    project,
                    { opacity: 0, y: 150 },
                    {
                        opacity: 1,
                        y: 0,
                        ease: "power3.out",
                        duration: 1,
                        scrollTrigger: {
                            trigger: project,
                            start: "top 110%", 
                            end: "top -20%", // Ensures it resets when it leaves
                            toggleActions: "play none none reset", // Triggers only on downward scroll
                        },
                    }
                );
            });
              
    }, [])
    return <div className="Skills">
        <h3 className="skill-title">Skills</h3>
        <div className="skills-list">{
            skills.map((element, index) => {
                return <Skill key={index} src={element.src} name={element.name} />
            })
        }
        </div>
    </div>
}
export default Skills;