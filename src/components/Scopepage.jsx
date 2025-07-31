import React from 'react'
import Scope from '../shared/components/Scope'
import HelmetComponent from './HelmetComponent'

function Scopepage() {
  return (
    <div>
      <HelmetComponent title={'Scope of Conference - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/scope'} />
      <Scope />
    </div>
  )
}

export default Scopepage