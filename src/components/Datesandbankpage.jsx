import React from 'react'
import Datesandbank from '../shared/components/Datesandbank'
import HelmetComponent from './HelmetComponent'

function Datesandbankpage() {
  return (
    <div>
      <HelmetComponent title={'Key Dates - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/key-dates'} />
      <Datesandbank />
    </div>
  )
}

export default Datesandbankpage