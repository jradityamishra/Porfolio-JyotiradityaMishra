import React from 'react'
import Sidebar from './component/Sidebar'
import Services from './pages/services/Services';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import Typed from "typed.js";

import { useEffect, useRef } from "react";
import './home.css';
const Home = () => {
    const el = useRef(null);
    const sceneRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["WEB dEVELOPER", "WEB DESIGNER", "APP DEVELOPER", "SEO", "UI/UX"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        // Stars animation initialization
        const scene = sceneRef.current;

        const createDiv = () => {
            for (let i = 0; i < 10; i++) {
                const star = document.createElement('a');
                scene.appendChild(star);
            }
        };

        createDiv();

        const stars = scene.querySelectorAll('a');
        stars.forEach((star) => {
            let x = `${Math.random() * 200}vmax`;
            let y = `${Math.random() * 100}vh`;
            let z = `${Math.random() * 200 - 100}vmin`;
            let rx = `${Math.random() * 360}deg`;
            star.style.setProperty('--x', x);
            star.style.setProperty('--y', y);
            star.style.setProperty('--z', z);
            star.style.setProperty('--rx', rx);
            let delay = `${Math.random() * 1.5}s`;
            star.style.animationDelay = delay;
        });
    }, []);
    return (
        <div class='body'>
            {/* ===========sidebar start===== */}
            <div class='main-content'>

                <Sidebar />

                {/* ========sidebar end======== */}

                {/* <!---------main content start--------> */}

                {/* <!---------home section started--------> */}
                <div class='main-content scene' ref={sceneRef}>


                    <section class="home section" id="home">

                        <div class="container">
                            <div class="row">
                                <div class="home-info padd-15">
                                    <h3 class="hello">
                                        Hello,I'm <span class="name">Jyotiraditya mishra</span>
                                    </h3>
                                    <h3 class="my-profession">
                                        I am a <span class="typing" ref={el}>Web Developer</span>
                                    </h3>
                                    <p>
                                        Passionate and versatile professional adept at creating dynamic websites and user-friendly interfaces. Skilled in web development, design, and app development, with a focus on optimizing SEO for enhanced online visibility. Dedicated to crafting creative UI/UX designs for seamless user experiences
                                    </p>
                                    <a href="#contact" class="btn hire-me">Hire me</a>
                                </div>
                                <div class="home-img padd-15">
                                    <img src="photowithashu.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <!---------home section ended--------> */}
                    {/* <!------ about section started-------> */}
                    <About />
                    {/* <!------ about section ended-------> */}
                    {/* <!------ services section started-------> */}
                    <Services />
                    {/* <!------ services section ended-------> */}
                    {/* <!------ portfoilo section started-------> */}
                    <Portfolio />
                    {/* <!------ portfolio section ended-------> */}
                    {/* <!------ Contact section started-------> */}
                    <Contact />
                    {/* <!------Contact section Ended----------
                    {/* <!---------main content end--------> */}

                </div>
            </div>
        </div>
    )
}

export default Home