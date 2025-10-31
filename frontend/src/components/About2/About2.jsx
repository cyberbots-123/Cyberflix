import React, { useEffect } from 'react'
import "./About2.css"
import { assets } from '../../assets/assets'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <div className="about2-container">
      <h1 data-aos="fade-up">
        Tamilnadu Centre of excellence for Skilling
      </h1>

      <div className="about2-content" data-aos="fade-right">
        <div className="about2-text">
          <p>
            Cyberbots is responsible for co-ordination of all Skill Development efforts across the country, removal of disconnect between demand and supply of skilled manpower, building the vocational and technical training framework, skill up-gradation, building of new skills and innovative thinking not only for existing jobs but also jobs that are to be created. Cyberbots aims to skill on a large scale with speed and high standards in order to achieve its vision of a ‘Skilled India’.
          </p>
        </div>
        <img src={assets.Abt2} alt="AI Conference" data-aos="zoom-in" />
      </div>

      <div className="about2-extra-section" data-aos="fade-up">
        <h1>Often imitated, never replicated</h1>
        <p>
          Welcome to the nation’s original and most trusted youth STEM educator, with 25 years of expertise and 650,000 alumni! No other STEM enrichment program can compete with our relatable, world-class instructors, iconic partners, prestigious campus locations, exclusive content, and courses that truly speak to kids’ interests. We’re trusted by over 1 million parents because we’ve forged an unmatched path to future success. With personalized learning and elite instructors who fuel kids' passions, Cyberbots is the place to invest in your kids’ futures. 
        </p>
      </div>

      <div className="about2-extra-section" data-aos="fade-up">
        <h1>Humble brag? We bring the best.</h1>
        <p>
          Real recognizes real. Our prestigious partners know we’ve got the top programs, and our instructors know we’re bringing the best curriculum. That’s how Cyberbots is able to partner with tech industry juggernauts and recruit instructors from the most elite universities. Experience the Cyberbots difference today!  
        </p>
      </div>
    </div>
  )
}

export default About2
