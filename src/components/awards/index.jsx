import React from 'react'
import './_index.scss'

import awardsData from './awardsData'

const AwardsSection = () => (
  <>
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="awards">
      <div className="w-100">
        <h2 className="mb-5">Awards &amp; Certifications</h2>
        <ul className="fa-ul mb-0">
          {awardsData
            .map((awards) => (
              <li>
                <i className="fa-li fa fa-trophy text-warning" />
                {awards.award}
              </li>
            ))}

        </ul>
      </div>
    </section>

  </>
)

export default AwardsSection
