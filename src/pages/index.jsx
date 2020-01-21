import React from 'react'
import SEO from '../components/commons/seo/index'


import AboutSection from '../components/about/index'
import Header from '../components/commons/header/index'


const IndexPage = () => (
  <>
    <SEO title="Resume" />
    <body id="page-top">
      <Header />
      <div className="container-fluid p-0">
        <AboutSection />
      </div>
    </body>
  </>
)

export default IndexPage
