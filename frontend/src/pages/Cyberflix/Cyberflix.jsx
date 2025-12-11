import React from 'react'
import EventH from '../../components/EventH/EventH'
import EventZones from '../../components/EventZones/EventZones'
import PrizesAndCategories from '../../components/PrizesAndCategories'

const Cyberflix = () => {
  return (
    <>
    <EventH/>
     <PrizesAndCategories/>
    {/* <EventZones/> */}
    <div id="event-zones">
    <EventZones />
  </div>
    </>
  )
}

export default Cyberflix