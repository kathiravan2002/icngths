import React from 'react'
import Home from '../shared/components/Home'
import HelmetComponent from './HelmetComponent'

function Homepage() {
  return (
    <div>
      <HelmetComponent title={'Home - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/'} />
      <Home />
    </div>
  )
}

export default Homepage