import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Tron3.css";

const Tron3 = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade 3-5");

  const gradeCards = {
    "Grade 3-5": [
      {
        title: "Lumina Forge",
        slug: "lumina-forge",
        description:
          "Once a radiant hub of innovation, the Hidden Village now lies in darkness after the Akatsuki’s devastating attack. Young engineers must pilot their NAVIGATION bots to restore essential systems—streetlights, windmills, water pumps, gates—and collect flags. Only the fastest and most precise will light the Hokage Monument and bring the village back to life.",
        image: assets.Tron1,
      },
      {
        title: "Dragon Vault",
        slug: "dragon-vault",
        description:
          "The Dragon Balls, once protecting the land, have been scattered by a powerful villain. Teams of Collector & Snatcher must retrieve the Dragon Balls, outwit opponents, and restore peace.",
        image: assets.Tron2,
      },
    ],

    "Grade 6-8": [
      {
        title: "Nautica Quest",
        slug: "nautica-quest",
        description:
          "Set sail into the Grand Line! The world’s oceans are in chaos after the mysterious appearance of cursed Devil Fruits across the islands. Each island represents the legacy of a Straw Hat Pirate — a test of creativity, control, and courage. Your mission: journey through perilous terrains, face mechanical challenges, and defuse the Big Devil Fruit Bomb before time runs out.",
        image: assets.Tron3,
      },
    ],

    "Grade 9-12": [
      {
        title: "Nexathon",
        slug: "nexathon",
        description:
          "In the futuristic world of NEXA, robotics governs every sector—from industry to defense. But a massive system failure has corrupted all automation codes. To bring the world back online, young engineers must rebuild circuits, trace the right components, and reactivate control through logic-based coding.",
        image: assets.Tron4,
      },
    ],
  };

  const currentCards = gradeCards[selectedGrade];

  return (
    <div className="tron-dark-section">
      <div className="scan-lines"></div>

      {/* Grade Tabs */}
      <div className="tron3-grade-tabs">
        {Object.keys(gradeCards).map((grade) => (
          <button
            key={grade}
            className={`tron3-tab ${selectedGrade === grade ? "active" : ""}`}
            onClick={() => setSelectedGrade(grade)}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="tron3-cards-container">
        {currentCards.map((card, idx) => (
          <div className="tron3-card" key={idx}>
            <img
              src={card.image}
              alt={card.title}
              className="tron3-card-image"
            />

            <div className="tron3-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>

              <Link to={`/tron/${card.slug}`} className="tron3-register-btn">
  View Details
</Link>



            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tron3;
