import React from 'react'
import EventH from '../../components/EventH/EventH'
import EventZones from '../../components/EventZones/EventZones'
import PrizesAndCategories from '../../components/PrizesAndCategories'

const Event = () => {
  return (
    <div>
      <EventH/>
      <PrizesAndCategories/>
      <EventZones/>
    </div>
  )
}

export default Event