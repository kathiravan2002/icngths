import React from 'react'
import About from '../shared/components/About'
import HelmetComponent from './HelmetComponent'

function Aboutpage() {
  return (
    <div>
      <HelmetComponent title={'About us - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/about'} />
      <About />
    </div>
  )
}

export default Aboutpage