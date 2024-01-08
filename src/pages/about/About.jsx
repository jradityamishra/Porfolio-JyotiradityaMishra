import React from "react";
import "./about.css";
import jsPDF from 'jspdf';
import pdfff from "../../assets/jrcv.pdf"
const About = () => {
    const skill = [
        { name: "CSS", width: 76 },
        { name: "HTML", width: 85 },
        { name: "JAVASCRIPT", width: 70 },
        { name: "REACT - JS", width: 80 },
        { name: "NODE - JS", width: 76 },
        { name: "MONGO - DB", width: 65 },
        { name: "NEXT - JS", width: 60 },
    ];

    const achievements = [
        {
            date: 2023,
            name: "MLH Hack Winner",
            desc: "Won two MLH hackathons",
        },
        {
            date: 2023,
            name: "Diversion Hackathon Winner",
            desc: "Won the Diversion hackathon organized at IEM Kolkata",
        },
        {
            date: 2023,
            name: "Status Code 0 Hackathon Winner",
            desc: "Won the Status Code 0 Hackathon organized at IIIT Kalyani",
        },
        {
            date: 2023,
            name: "Smart India Hackathon 2023 Finalist",
            desc: "Our team was one of the finalists in SIH23",
        },
    ];

    const Experience = [
        {
            date: 2022,
            name: "Spark Foundation",
            desc: "Developing a payment gateway for an organization involves creating a secure and seamless platform that facilitates financial transactions, enabling users to make payments for products or services. The gateway handles the transmission of sensitive payment information, ensures compliance with security standards, and interfaces with various payment methods to provide a reliable and user-friendly payment experience.",
        },
        {
            date: 2023,
            name: "Girl Script Summer of Code",
            desc: "Open source contribution involves actively participating in the development and improvement of freely accessible software projects. Contributors collaborate globally, sharing their expertise to enhance software functionality, fix bugs, and introduce new features. This collaborative model fosters innovation, knowledge sharing, and community-driven development, making a positive impact on the open-source ecosystem."

        },
        {
            data: 2024,
            name: "Baoiam Innovation pvt ltd",
            desc: 'Developing backend solutions with Node.js involves leveraging its event-driven architecture to create scalable and efficient server-side applications. Utilizing JavaScript on both the frontend and backend streamlines development, allowing for seamless communication. Node.js excels in handling concurrent requests, making it a popular choice for building responsive and high-performance web applications.'
        }
    ];
    const handleDownload = async () => {

        const pdfUrl = pdfff;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "jyotiraditya mishra cv.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <section class="about section" id="about">
                <div class="container">
                    <div class="row">
                        <div class="section-title padd-15">
                            <h2>About me</h2>
                        </div>
                    </div>
                    <div class="row">
                        <div class="about-content padd-15">
                            <div class="row">
                                <div class="about-text padd-15">
                                    <h3>
                                        I'm Jyotiraditya Mishra and a{" "}
                                        <span> Full stack Developer</span>
                                    </h3>
                                    <p>
                                        I am a MERN Stack Developer, proficient in MongoDB, Express.js, React.js, and Node.js. With a track record of contributing to various organizations, I specialize in building scalable and efficient web applications. My commitment to staying current with industry trends ensures I deliver impactful solutions for diverse projects
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="personal-info padd-15">
                                    <div class="row">
                                        <div class="info-item padd-15">
                                            <p>
                                                Birthday:<span>06 june 2003</span>
                                            </p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>
                                                Age:<span>20</span>
                                            </p>
                                        </div>

                                        <div class="info-item padd-15">
                                            <p>
                                                Degree:<span>Bachelor of Technology</span>
                                            </p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>
                                                Phone no:<span>+918084885168</span>
                                            </p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>
                                                City:<span>kolkata</span>
                                            </p>
                                        </div>
                                        <div class="info-item padd-15">
                                            <p>
                                                hire-me:<span>always</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="button padd-15"  >
                                            <a class="btn" onClick={handleDownload} style={{ cursor: 'pointer' }}>
                                                Download Resuma
                                            </a>

                                            <a href="#contact" class="btn hire-me">
                                                Hire me
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="skills padd-15">
                                    {/* <div class='row'> */}
                                    {skill.map((e) => (
                                        <div class="row">
                                            <div class="skill-item padd-15">
                                                <h5>{e.name}</h5>
                                                <div class="progress">
                                                    <div
                                                        class="progress-in"
                                                        style={{ width: `${e.width}%` }}
                                                    ></div>
                                                    <div class="skill-percent">{`${e.width}%`}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                {/* kk */}
                            </div>
                            <div class="row">
                                <div class="education padd-15">
                                    <h3 class="title">Achievement</h3>
                                    <div class="row">
                                        <div class="timeline-box padd-15">
                                            <div class="timeline shadow-dark">
                                                {/* <!--timeline items--> */}

                                                {achievements.map((e) => {
                                                    return (
                                                        <>
                                                            <h3 class="timeline-date">
                                                                <i class="fa fa-calendar"></i>
                                                                {e.date}
                                                            </h3>
                                                            <div class="timeline-items">
                                                                <div class="circle-dot"></div>
                                                                <h4 class="timeline-title">{e.name}</h4>
                                                                <p class="timeline-text">{e.desc}</p>
                                                            </div>
                                                        </>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="experience padd-15">
                                    <h3 class="title">Experience</h3>
                                    <div class="row">
                                        <div class="timeline-box padd-15">
                                            <div class="timeline shadow-dark">
                                                {/* <!--timeline items--> */}
                                                {Experience.map((e) => {
                                                    return (
                                                        <>
                                                            <h3 class="timeline-date">
                                                                <i class="fa fa-calendar"></i>{e.date}
                                                            </h3>
                                                            <div class="timeline-items">
                                                                <div class="circle-dot"></div>
                                                                <h4 class="timeline-title">{e.name}</h4>
                                                                <p class="timeline-text">
                                                                    {e.desc}
                                                                </p>
                                                            </div>
                                                        </>
                                                    )
                                                })}



                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
