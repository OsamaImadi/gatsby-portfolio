import React from 'react'

import AboutSection from '../components/about/index'
import Header from '../components/commons/header/index'

import '../components/layout.scss'

const AboutPage = () => (
  <body id="page-top">
    <Header />
    <div className="container-fluid p-0">
      <AboutSection />
    </div>
  </body>
)

export default AboutPage
