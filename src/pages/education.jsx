import React from 'react'

import EducationSection from '../components/education/index'
import Header from '../components/commons/header/index'
import '../components/layout.scss'

const EducationPage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <EducationSection />
    </div>
  </body>
)

export default EducationPage
