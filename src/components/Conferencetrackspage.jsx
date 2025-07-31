import React from 'react'
import Conferencetracks from '../shared/components/Conferencetracks'
import HelmetComponent from './HelmetComponent'

function Conferencetrackspage() {
  return (
    <div>
      <HelmetComponent title={'Conference Tracks - International Conference on Next-Gen Technologies in Healthcare and Security'} canonical={'https://icngths.com/conference-tracks'} />
      <Conferencetracks />
    </div>
  )
}

export default Conferencetrackspage