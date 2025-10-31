import React, { useEffect } from 'react'
import './Abtbanner.css'
import { assets } from '../../assets/assets'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Abtbanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true 
    })
  }, [])

  return (
    <div className="abt-banner">
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={assets.abtVid} />
        Your browser does not support the video tag.
      </video>
      <div className="banner-overlay">
        <div className="banner-text" data-aos="fade-up">
          <h1>Welcome to CyberBots</h1>
          <p>Innovating the future through technology and creativity</p>
        </div>
      </div>
    </div>
  )
}

export default Abtbanner
