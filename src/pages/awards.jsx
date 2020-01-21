import React from 'react'

import AwarsdsSection from '../components/awards/index'
import Header from '../components/commons/header/index'

import '../components/layout.scss'

const AwardsPage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <AwarsdsSection />
    </div>
  </body>
)

export default AwardsPage
