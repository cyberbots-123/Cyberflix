import React, { useState } from 'react';
import './Blogs.css';
import { assets } from '../../assets/assets';

const dummyBlogs = [
  {
    id: 1,
    title: 'CYBERFEST 2025 - National Robotics Challenge',
    author: 'Cyberbots',
    date: 'March 15, 2025',
    summary: 'CYBERFEST 2025 brought together the brightest minds in robotics with thrilling battles, innovative projects, and nationwide participation.',
    image: assets.Cyberfest2025,
    description: `
CYBERFEST 2025 was a spectacular convergence of robotics enthusiasts from over 50 universities across the nation. The event featured an array of competitions such as the Autonomous Rover Race, Obstacle Navigation Bots, and a Drone Formation Show.

Industry leaders from Tesla Robotics and Boston Dynamics delivered keynote speeches on the future of AI-integrated machines. Interactive workshops on ROS (Robot Operating System) and AI for Robotics attracted hundreds of eager participants.

The grand finale witnessed an intense bot combat tournament where precision, strategy, and automation collided in a dramatic showdown.
    `,
  },
  {
    id: 2,
    title: 'SV CYBERTRON 2025 - AI Meets Hardware',
    author: 'Cyberbots',
    date: 'February 28, 2025',
    summary: 'SV CYBERTRON showcased intelligent automation with self-driving bots, robotic arms, and an AI-integrated drone challenge.',
    image: assets.Cybertron,
    description: `
SV CYBERTRON 2025 was a groundbreaking fusion of artificial intelligence and hardware innovation. The event introduced intelligent robotics systems capable of real-time decision-making and environment adaptation.

Highlights included an AI-powered self-driving car demo, robotic arms performing precise assembly tasks, and a drone maze powered by machine learning. Teams presented solutions integrating TensorFlow models with microcontrollers for smart robotics.

The event concluded with an AI vs Human Robot Chess Challenge, showcasing how far neural network-trained bots have come in critical thinking.
    `,
  },
  {
    id: 3,
    title: 'CYBERSHOW 2024 - Tech Carnival of Bots',
    author: 'Cyberbots',
    date: 'December 10, 2024',
    summary: 'CYBERSHOW 2024 was a futuristic expo of student-built robots, IoT projects, and machine learning in motion.',
    image: assets.Cybershow2024,
    description: `
CYBERSHOW 2024 was a vibrant carnival of innovation, where technology enthusiasts unveiled student-built robots and futuristic IoT prototypes. Attendees experienced gesture-controlled drones, smart home automation demos, and robotic pets powered by Python and Raspberry Pi.

Seminars on edge computing and the role of AI in manufacturing gave valuable industry insights. A “Build-a-Bot” zone allowed visitors to assemble and program their own mini-robots.

The highlight of the show was the “Hack-a-Bot” 12-hour challenge where teams created assistive tech for elderly care using Arduino and AI vision.
    `,
  },
  {
    id: 4,
    title: 'CYBERMANIA 2024 - Battle of Bots',
    author: 'Cyberbots',
    date: 'September 25, 2024',
    summary: 'A thrilling event with high-stakes robot combat, maze-solving bots, and autonomous rover competitions.',
    image: assets.Cybermania2024,
    description: `
CYBERMANIA 2024 brought an adrenaline rush to the world of student robotics with its iconic Battle of Bots. Competitors entered the arena with combat-ready bots built for offense, defense, and endurance.

Aside from combat, events such as Maze Solvers and Terrain Navigators tested the bots' autonomous decision-making and sensory capabilities. Students showcased rovers using LIDAR, ultrasonic sensors, and custom-built chassis for enhanced mobility.

Workshops included PCB designing, sensor fusion, and robotic vision, and the event ended with a drone light show synchronized to electronic music.
    `,
  },
  {
    id: 5,
    title: 'CYBERFEST 2024 - RoboFest Reloaded',
    author: 'Cyberbots',
    date: 'March 14, 2024',
    summary: 'The 2024 edition featured robotics hackathons, drone racing, and live demos of human-robot interaction.',
    image: assets.Cyberfest2024,
    description: `
CYBERFEST 2024 returned with an even more energetic lineup of robotics competitions and tech showcases. The Drone Racing Arena saw custom-designed drones navigating tight corners and high-speed gates, all controlled by VR-integrated remotes.

Participants also explored human-robot interaction through voice-activated bots and emotional response sensors. Teams engaged in a 24-hour robotics hackathon aimed at solving real-world problems like warehouse automation and disaster response.

A highlight was the “Humanoid Dance Off” where robots synced choreography to music using motion prediction and servo programming.
    `,
  },
  {
    id: 6,
    title: 'CYBERMANIA 2023 - The Original Bot Battle',
    author: 'Cyberbots',
    date: 'October 12, 2023',
    summary: 'CYBERMANIA 2023 kicked off the annual tradition of robotics excellence with innovative student projects and intense robot face-offs.',
    image: assets.Cybermania2023,
    description: `
The inaugural CYBERMANIA 2023 laid the foundation for a new era of campus-level robotics excellence. The event featured classic robot battles where metal met metal in fierce clashes, judged for agility, impact, and control.

Student-led booths demonstrated robotic arms built from recycled materials, Arduino-based surveillance bots, and 3D printed chassis prototypes. A technical symposium on embedded systems and microcontroller integration added academic depth.

This event ignited a robotics culture that continues to grow, setting a precedent for creativity, engineering, and competitive spirit among young innovators.
    `,
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <div className="blogs-container">
      <h1 className="blogs-heading">Robotics Events & Highlights</h1>
      <div className="blogs-list">
        {dummyBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-meta">By {blog.author} on {blog.date}</p>
              <p className="blog-summary">{blog.summary}</p>
              <button className="blog-button" onClick={() => setSelectedBlog(blog)}>Read More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedBlog && (
  <div className="blog-modal-overlay" onClick={() => setSelectedBlog(null)}>
    <div className="blog-modal" onClick={(e) => e.stopPropagation()}>
      <button className="blog-modal-close" onClick={() => setSelectedBlog(null)}>×</button>

      <div className="modal-top">
        <div className="modal-image-wrapper">
          <img src={selectedBlog.image} alt={selectedBlog.title} className="modal-image" />
        </div>

        <div className="modal-top-content">
          <h2 className="modal-title">{selectedBlog.title}</h2>
          <p className="modal-meta">By {selectedBlog.author} on {selectedBlog.date}</p>
          <p className="modal-summary">{selectedBlog.summary}</p>
        </div>
      </div>

      <div className="modal-description">
        <p>{selectedBlog.description}</p>
      </div>
    </div>
  </div>
)}




    </div>
  );
};

export default Blogs;
