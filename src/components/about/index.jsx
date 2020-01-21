import React from 'react'

import aboutData from './about.data'
import './_index.scss'

const AboutSection = () => (
  <>
    <section id="resume-section">
      <div className="w-100">
        <h1 className="mb-0">
          {aboutData.firstName}
          <span className="text-primary">{aboutData.lastName}</span>
        </h1>
        <div className="subheading mb-5">
          {aboutData.contactDetails}
          <a href={aboutData.emailLink}>{aboutData.email}</a>
        </div>
        <p className="lead mb-5">{aboutData.description}</p>
        <div className="social-icons">
          <a href={aboutData.linkedlnProfileLink}>
            <i className="fa fa-linkedin" />
          </a>
          <a href={aboutData.githubProfileLink}>
            <i className="fa fa-github" />
          </a>
          <a href={aboutData.twitterProfileLink}>
            <i className="fa fa-twitter" />
          </a>
          <a href={aboutData.fbProfileLink}>
            <i className="fa fa-facebook-f" />
          </a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
  </>

)
export default AboutSection
