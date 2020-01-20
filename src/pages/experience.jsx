import React from 'react'

import ExperienceSection from '../components/experience/experience.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const ExperiencePage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <ExperienceSection />
    </div>
  </body>
)

export default ExperiencePage
