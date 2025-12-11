import React from "react";
import { useParams } from "react-router-dom";
import { tronData } from "../tronData";
import "./TronDetails.css";

const TronDetails = () => {
  const { slug } = useParams();

  const formatSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  let selectedEvent = null;

  tronData.forEach((category) => {
    category.zones.forEach((zone) => {
      if (formatSlug(zone.name) === slug) {
        selectedEvent = zone;
      }
    });
  });

  if (!selectedEvent) {
    return (
      <div className="text-center text-white p-10 text-3xl">
        ❌ Event Not Found
      </div>
    );
  }

  return (
    <div className="tron-details-page">
      {/* Header */}
      <div className="tron-header">
        <h1 className="tron-title">{selectedEvent.name}</h1>
      </div>

      {/* Banner / Image */}
      <div className="tron-detail-image-box">
        <img
          src={selectedEvent.detailImage}
          alt={selectedEvent.name}
          className="tron-detail-image"
        />
      </div>

      {/* Register Now (Top) */}
      <div className="tron-register-box">
        {selectedEvent.registerLink && (
          <a
            href={selectedEvent.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="tron-register-btn"
          >
            ⚡ Register Now
          </a>
        )}

        {selectedEvent.purchaseLink && (
          <div className="tron-purchase-box bottom">
            <a
              href={selectedEvent.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tron-purchase-btn"
            >
              🤖 Purchase Your Robot
            </a>
          </div>
        )}
      </div>

      {/* Play Mode & Handbook */}
      <div className="tron-quick-info">
        <p><strong>Play Mode:</strong> {selectedEvent.play}</p>

        {selectedEvent.handbook && (
          <a
            href={selectedEvent.handbook}
            target="_blank"
            rel="noopener noreferrer"
            className="tron-handbook-btn"
          >
            📘 Download Handbook
          </a>
        )}
      </div>

      {/* Backstory */}
      <section className="tron-section">
        <h2>Backstory</h2>
        <p>{selectedEvent.backstory}</p>
      </section>

      {/* Objective */}
      <section className="tron-section">
        <h2>Objective</h2>
        <p>{selectedEvent.objective}</p>
      </section>

      {/* Arena Overview */}
      <section className="tron-section">
        <h2>Arena Overview</h2>
        <pre className="tron-pre">{selectedEvent.arenaOverview}</pre>
      </section>

      {/* Game Flow */}
      <section className="tron-section">
        <h2>Game Flow</h2>
        <pre className="tron-pre">{selectedEvent.gameFlow}</pre>
      </section>

      {/* Challenges */}
      {selectedEvent.challenges && (
        <section className="tron-section">
          <h2>Challenges</h2>
          <ul className="tron-list">
            {selectedEvent.challenges.map((ch, index) => (
              <li key={index}>
                <strong>{ch.name}</strong> <br />
                <span>{ch.type}</span> — {ch.description} <br />
                <em>{ch.reward}</em>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Rules */}
      <section className="tron-section">
        <h2>Rules</h2>

        <h3>Participation</h3>
        <ul className="tron-list">
          {selectedEvent.rules.participation.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <h3>Conduct</h3>
        <ul className="tron-list">
          {selectedEvent.rules.conduct.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <h3>Scoring</h3>
        <ul className="tron-list">
          {selectedEvent.rules.scoring.map((sc, i) => (
            <li key={i}>
              {sc.task ? `${sc.task}: ${sc.points} pts` : ""}
              {sc.bonus ? `Bonus: ${sc.bonus}` : ""}
              {sc.penalty ? `Penalty: ${sc.penalty}` : ""}
              {sc.total ? `${sc.total}` : ""}
            </li>
          ))}
        </ul>

        <h3>Judging</h3>
        <ul className="tron-list">
          {selectedEvent.rules.judging.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <h3>Safety</h3>
        <ul className="tron-list">
          {selectedEvent.rules.safety.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      </section>

      {/* Register Now (Bottom) */}
      {selectedEvent.registerLink && (
        <div className="tron-register-box bottom">
          <a
            href={selectedEvent.registerLink}
            target="_blank"
            rel="noopener noreferrer"
            className="tron-register-btn"
          >
            ⚡ Register Now
          </a>
        </div>
      )}

      {/* Purchase Robot (Bottom) */}
      {selectedEvent.purchaseLink && (
        <div className="tron-purchase-box bottom">
          <a
            href={selectedEvent.purchaseLink}
            target="_blank"
            rel="noopener noreferrer"
            className="tron-purchase-btn"
          >
            🤖 Purchase Your Robot
          </a>
        </div>
      )}
    </div>
  );
};

export default TronDetails;
