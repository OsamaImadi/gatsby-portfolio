import React from 'react'

import './about.styles.scss'

const AboutSection = () => (
  <>
    <section id="resume-section">
      <div className="w-100">
        <h1 className="mb-0">
          Clarence
          <span className="text-primary">Taylor</span>
        </h1>
        <div className="subheading mb-5">
          3542 Berry Street · Cheyenne Wells, CO 80810 · (317) 585-8468 ·
          <a href="mailto:name@email.com">name@email.com</a>
        </div>
        <p className="lead mb-5">I am experienced in leveraging agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</p>
        <div className="social-icons">
          <a href="/">
            <i className="fa fa-linkedin" />
          </a>
          <a href="/">
            <i className="fa fa-github" />
          </a>
          <a href="/">
            <i className="fa fa-twitter" />
          </a>
          <a href="/">
            <i className="fa fa-facebook-f" />
          </a>
        </div>
      </div>
    </section>
    <hr className="m-0" />
  </>

)
export default AboutSection