import React from 'react'

import SkillsSection from '../components/skills/skills.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const SkillsPage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <SkillsSection />
    </div>
  </body>
)

export default SkillsPage
