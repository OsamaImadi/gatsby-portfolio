import React from 'react'

import ExperienceSection from '../components/experience/index'
import Header from '../components/commons/header/index'
import '../components/layout.scss'

const ExperiencePage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <ExperienceSection />
    </div>
  </body>
)

export default ExperiencePage
