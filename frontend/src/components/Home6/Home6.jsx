import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { assets } from "../../assets/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";


const blogPosts = [
  {
    id: 1,
    title: "CYBERFEST 2025",
    description: "Dive into the future at Cyberfest 2025 – the ultimate robotics showdown where innovation meets adrenaline.From intense bot battles to awe-inspiring tech, this is where young minds rise and ideas come alive.",
    image: assets.Cyberfest2025,
  },
  {
    id: 2,
    title: "SV CYBERTRON 2025",
    description: "Welcome to SV Cybertron 2025, where the smartest bots and brightest brains collide. This event celebrates creativity, engineering, and teamwork with challenges that push every limit.Be there to experience the power of next-gen robotics like never before.",
    image: assets.Cybertron,
  },
  {
    id: 3,
    title: "CYBERSHOW 2024",
    description: "Cybershow 2024 is all about showcasing innovation and imagination in the world of robotics.From interactive demos to futuristic displays, it’s a tech exhibition you won’t forget.Come explore, learn, and get inspired by what’s next in the world of AI and automation.",
    image: assets.Cybershow2024,
  },
  {
    id: 4,
    title: "CYBERMANIA 2024",
    description: "Gear up for the madness at Cybermania 2024 – a thrilling blend of tech, creativity, and competition!.With high-stakes challenges and electrifying energy, this is where passion for robotics truly comes alive.",
    image: assets.Cybermania2024,
  },
  {
    id: 5,
    title: "CYBERFEST 2024",
    description: "Cyberfest 2024 set the stage for groundbreaking innovations and unforgettable robotic action.It brought together tech enthusiasts, problem-solvers, and creators in a celebration of pure engineering spirit.",
    image: assets.Cyberfest2024,
  },
  {
    id: 6,
    title: "CYBERMANIA 2023",
    description: "Cybermaina 2024 was a high-energy, hands-on experience where young tech talents ruled the arena.From designing bots to tackling real-world problems, it sparked curiosity and creative thinking.An unforgettable chapter in our journey of innovation and discovery.",
    image: assets.Cybermania2023,
  },
];

const Home6 = () => {
 const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container py-5">
      <div className="text-center mb-4" data-aos="fade-down">
        <h2 className="fw-bold text-primary">Our News & Blogs</h2>
        <p className="text-muted">Latest News and Articles</p>
        <button
          className="btn btn-outline-primary"
          onClick={() => navigate("/blog")}
        >
          View All Posts
        </button>

      </div>
      <div className="row">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="col-md-6 col-lg-4 mb-4"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card shadow border-0 h-100">
              <img
                src={post.image}
                className="card-img-top"
                alt={post.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text text-muted">{post.description}</p>
                <button
                  className="btn btn-primary mt-auto"
                  onClick={() => navigate("/blog")}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home6;
