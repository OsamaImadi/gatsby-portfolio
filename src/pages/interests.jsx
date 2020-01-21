import React from 'react'

import InterestsSection from '../components/interests/index'
import Header from '../components/commons/header/index'

import '../components/layout.scss'

const InterestsPage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <InterestsSection />
    </div>
  </body>
)

export default InterestsPage
