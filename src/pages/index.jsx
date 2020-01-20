import React from 'react'
import SEO from '../components/seo'


import AboutSection from '../components/about/about.component'
import NavBar from '../components/navbar/navbar.component'


const IndexPage = () => (
  <>
    <SEO title="Resume" />
    <body id="page-top">
      <NavBar />
      <div className="container-fluid p-0">
        <AboutSection />
      </div>
    </body>
  </>
)

export default IndexPage
