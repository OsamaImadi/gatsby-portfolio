import React from 'react'

import './_index.scss'
import interestsData from './interestsData'

const InterestsSection = () => (
  <>
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
      <div className="w-100">
        <h2 className="mb-5">Interests</h2>
        {
          interestsData.map((data) => (
            <p>{data.interestDescription}</p>
          ))
        }
      </div>
    </section>
    <hr className="m-0" />
  </>
)

export default InterestsSection
