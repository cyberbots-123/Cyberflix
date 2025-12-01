import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Fest3.css";

const Fest3 = () => {
  const [selectedGrade, setSelectedGrade] = useState("Grade 3-5");

  // Shapes state
  const [shapes, setShapes] = useState([]);

  const gradeCards = {
    "Grade 3-5": [
      {
        title: "Lumina Forge",
        slug: "lumina-forge",
        description:
          "Once a radiant hub of innovation, the Hidden Village now lies in darkness after the Akatsuki’s devastating attack. Young engineers must pilot their NAVIGATION bots to restore essential systems—streetlights, windmills, water pumps, gates—and collect flags. Only the fastest and most precise will light the Hokage Monument and bring the village back to life.",
        image: assets.Fest1,
      },
      {
        title: "Dragon Vault",
        slug: "dragon-vault",
        description:
          "The Dragon Balls, once protecting the land, have been scattered by a powerful villain. Teams of Collector & Snatcher must retrieve the Dragon Balls, outwit opponents, and restore peace.",
        image: assets.Fest2,
      },
    ],
    "Grade 6-8": [
      {
        title: "Nautica Quest",
        slug: "nautica-quest",
        description:
          "Set sail into the Grand Line! The world’s oceans are in chaos after the mysterious appearance of cursed Devil Fruits across the islands. Each island represents the legacy of a Straw Hat Pirate — a test of creativity, control, and courage. Your mission: journey through perilous terrains, face mechanical challenges, and defuse the Big Devil Fruit Bomb before time runs out.",
        image: assets.Fest3,
      },
    ],
    "Grade 9-12": [
      {
        title: "Nexathon",
        slug: "nexathon",
        description:
          "In the futuristic world of NEXA, robotics governs every sector—from industry to defense. But a massive system failure has corrupted all automation codes. To bring the world back online, young engineers must rebuild circuits, trace the right components, and reactivate control through logic-based coding.",
        image: assets.Fest4,
      },
    ],
  };

  const currentCards = gradeCards[selectedGrade];

  // Generate shapes dynamically
  useEffect(() => {
    const newShapes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 16 + 8, // 8px-24px
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: ["#FF5E5E", "#5EAFFF", "#FFEB5E", "#8AFF8A"][Math.floor(Math.random() * 4)],
      shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="fest3-section">
      {/* Floating Shapes */}
      {shapes.map((s) => (
        <span
          key={s.id}
          className={`floating-shape ${s.shape}`}
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

      {/* Grade Tabs */}
      <div className="fest3-grade-tabs">
        {Object.keys(gradeCards).map((grade) => (
          <button
            key={grade}
            className={`fest3-tab ${selectedGrade === grade ? "active" : ""}`}
            onClick={() => setSelectedGrade(grade)}
          >
            {grade}
          </button>
        ))}
      </div>

      {/* Horizontal Cards */}
      <div className="fest3-cards-container">
        {currentCards.map((card, idx) => (
          <div className="fest3-card" key={idx}>
            <img
              src={card.image}
              alt={card.title}
              className="fest3-card-image"
            />
            <div className="fest3-card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
             <Link to={`/fest/${card.slug}`}>
  <button className="fest3-register-btn">View Details</button>
</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fest3;
