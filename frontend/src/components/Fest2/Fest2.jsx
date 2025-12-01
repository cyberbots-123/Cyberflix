import React, { useEffect, useState, useRef } from "react";
import "./Fest2.css";

const Fest2 = ({ target = 100000 }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Floating shapes state
  const [shapes, setShapes] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 6000;
    const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutExpo(progress);

      const current = Math.floor(eased * target);
      setValue(current);

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    // Generate floating shapes
    const newShapes = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      size: Math.random() * 16 + 8,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: ["#FF5E5E", "#5EAFFF", "#FFEB5E", "#8AFF8A"][Math.floor(Math.random() * 4)],
      shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
      duration: Math.random() * 6 + 4,
      delay: Math.random() * 3,
    }));
    setShapes(newShapes);
  }, [started, target]);

  return (
    <div ref={ref} className="nightblue-theme">
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

      <h1 className="nb-title">⚡ Prizes & Rewards ⚡</h1>

      <div className="nb-banner nb-pulse">
        <span className="nb-label">Win prizes worth</span>
        <h2 className="nb-amount nb-flicker">
          ₹{value.toLocaleString("en-IN")}
        </h2>
      </div>

      <p className="nb-note">
        Rewards are distributed based on final scoring, performance, and judge evaluation.
      </p>
    </div>
  );
};

export default Fest2;
