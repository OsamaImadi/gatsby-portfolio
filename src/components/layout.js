/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from "./navbar/navbar.component"
import AboutSection from "./about/about.component"
import ExperienceSection from "./experience/experience.component"
import EducationSection from "./education/education.component"
import SkillsSection from "./skills/skills.component"
import InterestsSection from "./interests/interests.component"
import AwardsSection from "./awards/awards.component"
import "./layout.css"

const Layout = () => (
  <>
    <NavBar />
    <AboutSection />
    <ExperienceSection />
    <EducationSection />
    <SkillsSection />
    <InterestsSection />
    <AwardsSection />
  </>

)


export default Layout
