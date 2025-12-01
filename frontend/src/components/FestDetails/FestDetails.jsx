import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { festData } from "../festData";
import "./FestDetails.css";

const FestDetails = () => {
  const { slug } = useParams();
  const [shapes, setShapes] = useState([]);

  // Get event by slug
  const selectedEvent = festData
    .flatMap((cat) => cat.zones)
    .find((zone) => zone.name.toLowerCase().replace(/\s+/g, "-") === slug);

  if (!selectedEvent) {
    return <h2 className="festdetails-notfound">Event Not Found</h2>;
  }

  // Recalculate correct slug from event name
  const eventSlug = selectedEvent.name.toLowerCase().replace(/\s+/g, "-");

  // Events that should show "Purchase Your Robot"
  const purchaseZones = ["dragon-vault", "nautica-quest"];
  const showPurchase = purchaseZones.includes(eventSlug);

  // Floating shapes effect
  useEffect(() => {
    const newShapes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 18 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: ["#FF5E5E", "#5EAFFF", "#FFEB5E", "#8AFF8A"][
        Math.floor(Math.random() * 4)
      ],
      shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));

    setShapes(newShapes);
  }, []);

  return (
    <div className="festdetails-wrapper">

      {/* Floating Shapes */}
      {shapes.map((s) => (
        <span
          key={s.id}
          className={`detail-shape ${s.shape}`}
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            backgroundColor: s.shape === "triangle" ? "transparent" : s.color,
            borderBottomColor: s.shape === "triangle" ? s.color : "transparent",
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}

      {/* Header Section */}
      <div className="festdetails-header">
        <img src={selectedEvent.detailImage} alt={selectedEvent.name} />

        {/* Title + Buttons Row */}
        <div className="festdetails-title-row">
          <h1>{selectedEvent.name}</h1>

          <div className="festdetails-header-buttons">
            {/* Register Now (Top) */}
            {selectedEvent.registerLink && (
              <a
                href={selectedEvent.registerLink}
                target="_blank"
                rel="noreferrer"
                className="festdetails-register-btn"
              >
                🚀 Register Now
              </a>
            )}

            {/* Purchase Your Robot (Top) */}
            {showPurchase && selectedEvent.purchaseLink && (
              <a
                href={selectedEvent.purchaseLink}
                target="_blank"
                rel="noreferrer"
                className="festdetails-purchase-btn"
              >
                🤖 Purchase Your Robot
              </a>
            )}
          </div>
        </div>

        <p className="festdetails-mode">Mode: {selectedEvent.play}</p>

        {selectedEvent.handbook && (
          <a
            href={selectedEvent.handbook}
            target="_blank"
            rel="noreferrer"
            className="festdetails-download-btn"
          >
            📘 Download Handbook
          </a>
        )}
      </div>

      {/* Story */}
      <div className="festdetails-card">
        <h2>Backstory</h2>
        <p>{selectedEvent.backstory}</p>
      </div>

      {/* Objective */}
      <div className="festdetails-card">
        <h2>Objective</h2>
        <p>{selectedEvent.objective}</p>
      </div>

      {/* Arena */}
      <div className="festdetails-card">
        <h2>Arena Overview</h2>
        <pre>{selectedEvent.arenaOverview}</pre>
      </div>

      {/* Game Flow */}
      <div className="festdetails-card">
        <h2>Game Flow</h2>
        <pre>{selectedEvent.gameFlow}</pre>
      </div>

      {/* Rules */}
      <div className="festdetails-card">
        <h2>Rules</h2>

        {/* Participation */}
        <div className="festdetails-rule-group">
          <h3>Participation</h3>
          <ul>
            {selectedEvent.rules.participation.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Conduct */}
        <div className="festdetails-rule-group">
          <h3>Conduct</h3>
          <ul>
            {selectedEvent.rules.conduct.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Scoring */}
        <div className="festdetails-rule-group">
          <h3>Scoring</h3>
          <ul>
            {selectedEvent.rules.scoring.map((r, i) => (
              <li key={i}>
                {r.task && `${r.task}: +${r.points}`}
                {r.bonus && `Bonus: ${r.bonus}`}
                {r.penalty && `Penalty: ${r.penalty}`}
                {r.total && r.total}
              </li>
            ))}
          </ul>
        </div>

        {/* Judging */}
        <div className="festdetails-rule-group">
          <h3>Judging Criteria</h3>
          <ul>
            {selectedEvent.rules.judging.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>

        {/* Safety */}
        <div className="festdetails-rule-group">
          <h3>Safety</h3>
          <ul>
            {selectedEvent.rules.safety.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="festdetails-bottom-buttons">
        {/* Register Now (Bottom) */}
        {selectedEvent.registerLink && (
          <a
            href={selectedEvent.registerLink}
            target="_blank"
            rel="noreferrer"
            className="festdetails-register-btn"
          >
            🚀 Register Now
          </a>
        )}

        {/* Purchase (Bottom) */}
        {showPurchase && selectedEvent.purchaseLink && (
          <a
            href={selectedEvent.purchaseLink}
            target="_blank"
            rel="noreferrer"
            className="festdetails-purchase-btn"
          >
            🤖 Purchase Your Robot
          </a>
        )}
      </div>
    </div>
  );
};

export default FestDetails;
