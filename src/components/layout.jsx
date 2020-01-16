/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import NavBar from './navbar/navbar.component'
import AboutSection from './about/about.component'
import ExperienceSection from './experience/experience.component'
import EducationSection from './education/education.component'
import SkillsSection from './skills/skills.component'
import InterestsSection from './interests/interests.component'
import AwardsSection from './awards/awards.component'
import './layout.scss'

const Layout = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <InterestsSection />
      <AwardsSection />
    </div>
  </body>

)


export default Layout
