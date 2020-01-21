import React from 'react'

import SkillsSection from '../components/skills/index'
import Header from '../components/commons/header/index'

import '../components/layout.scss'

const SkillsPage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <SkillsSection />
    </div>
  </body>
)

export default SkillsPage
