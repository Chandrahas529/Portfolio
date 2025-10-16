import "./Hero.css";
import image_hero from "../images/rb_693.png";
import { useRef } from "react";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
    const nameRefs = useRef([]);
    
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.5 } });

        // Set initial state
        gsap.set(nameRefs.current, { y: 50, opacity: 0 });
        gsap.set(".hero-img", { scale: 0.6, opacity: 0 });
        gsap.set(".social", { scale: 0, opacity: 0 });

        // Animate name characters smoothly
        tl.to(nameRefs.current, {
            y: 0,
            opacity: 1,
            stagger: 0.1, // More fluid stagger
        });

        // Smooth hero image animation
        tl.to(".hero-img", {
            scale: 1,
            opacity: 1,
            duration: 2,
            ease: "power4.out",
        }, "-=1"); // Overlap with name animation

        // Social icons appear smoothly
        tl.to(".social", {
            scale: 1,
            opacity: 1,
            stagger: 0.2,
            ease: "back.out(1.5)",
        }, "-=1");
    }, []);
    
    return (
        <div className="hero">
            <div className="hero-left">
                Hii I'm<br />
                <div className="name">
                    {"CHANDRAHAS SAHU".split("").map((char, i) => (
                        <span
                            key={i}
                            ref={(el) => (nameRefs.current[i] = el)}
                            className="animate-name"
                            style={{ "--i": i + 1 }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))}
                </div><br />
                a passionate web developer.
                <div className="social-links">
                    <a className="social-link" href="https://www.linkedin.com/in/chandrahas-sahu-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="social fa-brands fa-linkedin"></i></a>
                    <a className="social-link" href="https://github.com/Chandrahas529"><i className="social fa-brands fa-github"></i></a>
                    <a className="social-link" href="mailto:sahuchandrahas534@gmail.com"><i className="social fa-solid fa-envelope"></i></a>
                </div>
            </div>
            <div className="hero-right">
                <img className="hero-img" src={image_hero} alt="laptop png" />
            </div>
        </div>
    );
}

export default Hero;
