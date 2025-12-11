import React from 'react'
import Tron1 from '../../components/Tron1/Tron1'
import Tron3 from '../../components/Tron3/Tron3'
import TronPrize from '../../components/TronPrize/TronPrize'
import TronFAQ from '../../components/TronFAQ/TronFAQ'

const Cybertron = () => {
  return (
    <>
    <Tron1/>
    <TronPrize/>
    {/* <Tron3/> */}
    <div id="tron3-section">
        <Tron3/>
      </div>
    <TronFAQ/>
    </>
  )
}

export default Cybertron