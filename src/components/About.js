import React from "react";
import '../About.css';

const About = () => {



    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = process.env.PUBLIC_URL + '/Kimani_Muhammad_Software_Dev_Res.pdf';
        link.target = '_blank';
        link.setAttribute('download', 'Kimani_Muhammad_Software_Dev_Res.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    return (

        <section className="card" id="about">
            <h2 className="section-header">About Me</h2>
            <p>Experienced Full Stack Software Developer with over 2 years of hands-on experience, specializing in AWS, Selenium UI testing, and Java Spring microservices development. Proficient in deploying applications to Kubernetes, configuring log forwarding, and setting up Splunk for monitoring and troubleshooting. I have a strong background in mathematics and a proven ability to solve complex problems efficiently. Currently seeking a new opportunity to leverage my skills and experience in a dynamic software engineering role. Ready to contribute to innovative projects and continue growing in the tech industry.</p>
            <button className="download-button" onClick={handleDownload}>Download My Resume</button>
        </section>

    );
};

export default About;