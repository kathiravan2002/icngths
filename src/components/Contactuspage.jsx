import React from 'react'
import Contactus from '../shared/components/Contactus'
import HelmetComponent from './HelmetComponent'

function Contactuspage() {
  return (
    <div>
      <HelmetComponent title={'Contact us - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/contact-us'} />
      <Contactus />
    </div>
  )
}

export default Contactuspage