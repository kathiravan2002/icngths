import React from 'react'
import Editorial from '../shared/components/Editorial'
import HelmetComponent from './HelmetComponent'

function Editorialpage() {
  return (
    <div>
      <HelmetComponent title={'Editorial Board - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/editorial-board'} />
      <Editorial />
    </div>
  )
}

export default Editorialpage