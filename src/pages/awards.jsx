import React from 'react'

import AwarsdsSection from '../components/awards/awards.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const AwardsPage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <AwarsdsSection />
    </div>
  </body>
)

export default AwardsPage
