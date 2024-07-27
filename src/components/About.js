import React from "react";
import '../About.css';

const About = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../Kimani_Muhammad_Software_Dev_Resume.pdf';
        link.download = 'Kimani_Muhammad_Software_Dev_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (

        <section className="card" id="about">
            <h2 className="section-header">About Me</h2>
            <p>I am a full stack web developer with a background in education and a passion for learning. I have experience in JavaScript, CSS, and HTML, as well as skills in MongoDB, Express.js, React.js, and Node.js. I am a natural problem solver and enjoy working in a team environment. I am excited to bring my unique background to a developer role.</p>
            <button className="download-button" onClick={handleDownload}>Download My Resume</button>
        </section>

    );
};

export default About;