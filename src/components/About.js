import React from "react";
import '../About.css';

const About = () => {
    return (
        <section className="container">     
            <section className="card-border">
                <section className="card" id="about">
                    <h2>About Me</h2>
                    <p>I am a full stack web developer with a background in education and a passion for learning. I have experience in JavaScript, CSS, and HTML, as well as skills in MongoDB, Express.js, React.js, and Node.js. I am a natural problem solver and enjoy working in a team environment. I am excited to bring my unique background to a developer role.</p>
                    <button className="download-button" onClick={() => 
                        window.location.href = "../Kimani_Muhammad_Software_Dev_Resume.pdf"
                    }>Download My Resume</button>
                </section>
            </section>
        </section>
    );
};

export default About;