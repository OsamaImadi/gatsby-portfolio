import React from 'react'

import AboutSection from '../components/about/about.component'
import NavBar from '../components/navbar/navbar.component'

import '../components/layout.scss'

const AboutPage = () => (
  <body id="page-top">
    <NavBar />
    <div className="container-fluid p-0">
      <AboutSection />
    </div>
  </body>
)

export default AboutPage
