import React from 'react'
import About2 from '../../components/About2/About2'
import Navbar from '../../components/Navbar/Navbar'
import CardList from '../../components/CardList/CardList'
import About4 from '../../components/About4/About4'
import StatsSection from '../../components/StatsSection/StatsSection'
import TeamCards from '../../components/TeamCards/TeamCards'
import MDProfile from '../../components/MDProfile/MDProfile'
import Abtbanner from '../../components/Abtbanner/Abtbanner'


const About = () => {
  return (
    <>
    {/* <Navbar/> */}
    <Abtbanner/>
    <About2/>
    <CardList/>
    <MDProfile/>
    <TeamCards/>
    <About4/>
    <StatsSection/>
    </>
  )
}

export default About