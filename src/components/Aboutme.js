import "./Aboutme.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Aboutme() {
    const introRef = useRef(null);

    useGSAP(() => {
        const letters = introRef.current.querySelectorAll(".intro-letter");

        gsap.fromTo(
            letters,
            { opacity: 0.2, color: "#888" }, 
            {
                opacity: 1,
                color: "#fff",
                duration: 1,
                stagger: 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: introRef.current,
                    start: "top 80%",
                    end: "bottom 50%",
                    scrub: 2,
                },
            }
        );
    }, []);

    const text = `I am not just a web developer. I am a storyteller who weaves narratives through lines of code. With a solid foundation in coding languages and an eye for design, I have embarked on a journey to bring imagination to life on the canvas of the internet. I believe that every website is a portal into a brand's identity, a platform's purpose, or an individual's aspirations.`;

    return (
        <div className="aboutme">
            <h2 className="title">Who Am I?</h2>
            <div className="introduction" ref={introRef}>
                {text.split("").map((char, i) => (
                    <span key={i} className="intro-letter">
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Aboutme;
