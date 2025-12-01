import React from "react";
import "./EventCat.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const events = [
  {
    logo: assets.Cyberflix_Logo,
    name: "Cyberflix",
    venue: "Rudrappaswamy School, Pattravakkam",
    date: "03-01-2026",
    tagline: "Where Innovation Meets Imagination",
    route: "/cyberflix",
  },
  {
    logo: assets.Cyberfest_Logo,
    name: "Cyberfest",
    venue: "Maharishi Vidya Mandir, Chetpet",
    date: "10-01-2026",
    tagline: "A Celebration of Technology & Creativity",
    route: "/cyberfest",
  },
  {
    logo: assets.Cybertron_Logo,
    name: "SV Cybertron",
    venue: "Sudharsanam Vidyaashram, Avadi",
    date: "31-01-2026",
    tagline: "Unleash the Future with Robotics",
    route: "/cybertron",
  },
];

const EventCat = () => {
  const navigate = useNavigate();

  const handleRegister = (route) => {
    navigate(route);
  };

  return (
    <section className="cyber-section" aria-labelledby="upcoming-events">
      <div className="cyber-intro">
        <h2 id="upcoming-events" className="cyber-title">
          Upcoming School Tech Events
        </h2>
        <p className="cyber-sub">
          Step into the neon zone — robotics, coding challenges & immersive tech
          showcases near you.
        </p>
      </div>

      <div className="cyber-grid">
        {events.map((event, i) => (
          <article
            className="cyber-card"
            key={i}
            tabIndex="0"
            role="article"
            aria-label={event.name}
          >
            <div className="neon-frame">
              <div className="logo-wrap">
                <img
                  src={event.logo}
                  alt={`${event.name} logo`}
                  className="neon-logo"
                />
              </div>

              <div className="card-body">
                <h3 className="event-name">{event.name}</h3>
                <p className="event-tag">{event.tagline}</p>

                <div className="meta">
                  <div className="meta-item">
                    <span className="meta-key">📍</span>
                    <span className="meta-value">{event.venue}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-key">📅</span>
                    <span className="meta-value">{event.date}</span>
                  </div>
                </div>

                <div className="card-actions">
                  <button
                    className="neon-btn primary"
                    onClick={() => handleRegister(event.route)}
                  >
                    Register Now
                  </button>
                </div>
              </div>

              <div className="scanlines" aria-hidden="true" />
              <div className="holo-glow" aria-hidden="true" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventCat;
