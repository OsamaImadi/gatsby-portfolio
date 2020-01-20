import React from 'react'

import EducationSection from '../components/education/education.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const EducationPage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <EducationSection />
    </div>
  </body>
)

export default EducationPage
