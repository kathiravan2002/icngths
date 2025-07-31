import React from 'react'
import Papersubmission from '../shared/components/Papersubmission'
import HelmetComponent from './HelmetComponent'

function Papersubmissionpage() {
  return (
    <div>
      <HelmetComponent title={'Paper Submission - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/paper-submission'} />
      <Papersubmission />
    </div>
  )
}

export default Papersubmissionpage