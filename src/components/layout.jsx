/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import Header from './commons/header/index'
import AboutSection from './about/index'
import ExperienceSection from './experience/index'
import EducationSection from './education/index'
import SkillsSection from './skills/index'
import InterestsSection from './interests/index'
import AwardsSection from './awards/index'
import './layout.scss'

const Layout = () => (
  <body id="page-top">
    <Header />
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
