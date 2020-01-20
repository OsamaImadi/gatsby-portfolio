import React from 'react'

import InterestsSection from '../components/interests/interests.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const InterestsPage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <InterestsSection />
    </div>
  </body>
)

export default InterestsPage
