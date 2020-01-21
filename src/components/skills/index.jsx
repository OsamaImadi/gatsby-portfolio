import React from 'react'

import './_index.scss'

const SkillsSection = () => (
  <>
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
      <div className="w-100">
        <h2 className="mb-5">Skills</h2>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline dev-icons">
          <li className="list-inline-item">
            <i className="fa fa-html5" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-css3" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-wordpress" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-js" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-angular" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-react" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-node" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-sass" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-less" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-gulp-js" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-grunt-js" />
          </li>
          <li className="list-inline-item">
            <i className="fa fa-npm-js" />
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check" />
            Mobile-First, Responsive Design
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Cross Browser Testing &amp; Debugging
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Cross Functional Teams
          </li>
          <li>
            <i className="fa-li fa fa-check" />
            Agile Development &amp; Scrum
          </li>
        </ul>
      </div>
    </section>
    <hr className="m-0" />
  </>
)

export default SkillsSection
