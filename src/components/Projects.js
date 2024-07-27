import React from 'react';

const Projects = () => {
    return (
        <section className="card" id="projects">            
            <h2 className="section-header">Projects</h2>
                <div>
                    <h3><a href='https://youtubeminimal.netlify.app'>YouTube Minimal</a></h3>
                    <p>YouTube Minimal uses a youtube API to provide users with a new minimilistic platform to minimize distractions. Users can perform actions in thois application such as, filtering videos by category, searching videos by name, or filter videos by creator. The application features a main dashboard page, video card view, and creator page view.</p>
                    <p><a href='https://github.com/agent-kdubb/YouTube-Minimal'>Tech Stack: React, HTML, CSS, JavaScript</a></p>
                </div>
                <div>
                    <h3>SkyView</h3>
                    <p>SkyView is an online shop dedicated to selling photos of our beautiful sky. With SkyView, people are able to easily view and purchase photos while making it fun!</p>
                    <p><a href='https://github.com/agent-kdubb/SkyView-Backend/'>Tech Stack: React.js, Node.js, TypeScript, React Redux, Axios, Jest, Java 8, Spring Boot, PostgreSQL, etc.</a></p>
                </div>
        </section>
    );
};

export default Projects;