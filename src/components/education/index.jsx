import React from 'react'

import './_index.scss'
import educationData from './educationData'

const EducationSection = () => (
  <>
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">

      <div className="w-100">
        <h2 className="mb-5">Education</h2>

        {educationData
          .map((data) => (
            <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="resume-content">
                <h3 className="mb-0">{data.institute}</h3>
                <div className="subheading mb-3">{data.degree}</div>
                <div>{data.major}</div>
                <p>{data.score}</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">
                  {data.startDate} - {data.endDate}
                </span>
              </div>
            </div>
          ))}
      </div>

    </section>
  </>
)

export default EducationSection
