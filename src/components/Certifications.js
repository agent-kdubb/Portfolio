import React from "react";

const Certifications = () => {
    return (
        
        <section className="card" id="certifications">            
            <h2 className="section-header">Certifications & Extracurricular</h2>
            <div>
                <h3><a href='https://www.credly.com/badges/e0091dd2-4e29-4d74-852a-314e414efcf9/linked_in_profile'>AWS Certified Cloud Practitioner</a></h3>
                <p>Issued Jun 2023 - Expires Jun 2026</p>
                <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
            </div>
            <div>
                <h3><a href='https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_iKag2YFDPtYrqZkZZ_1723427510635_completion_certificate.pdf'>J.P. Morgan Software Engineering Virtual Experience on Forage</a></h3>
                <p>Issued Aug 2024</p>
                <ul>
                    <li>Set up a local dev environment by downloading the necessary files, tools and dependencies.</li>
                    <li>Fixed broken files in the repository to make web application output correctly.</li>
                    <li>Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.</li>
                </ul>
            </div>
        </section>

    );
};
export default Certifications;