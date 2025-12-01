import React, { useEffect, useState, useRef } from "react";
import "./TronPrize.css";

const TronPrize = ({ target = 100000 }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // 👀 Detect when component enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setStarted(true);   // 🔥 trigger animation
        }
      },
      { threshold: 0.4 } // 40% visibility required
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    let startTime = null;
    const duration = 6000; // ⏳ 6 seconds

    // Smooth exponential animation
    const easeOutExpo = (t) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = easeOutExpo(progress);

      const current = Math.floor(eased * target);
      setValue(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <div ref={ref} className="tron-prize-page">
      <h1 className="tron-prize-title">🔥 Prizes & Rewards 🔥</h1>

      <div className="tron-prize-banner">
        <span className="glow-text">Win Up To</span>

        <h2 className="prize-amount">
          ₹{value.toLocaleString("en-IN")}
        </h2>
      </div>

      <p className="tron-prize-note">
        Rewards are distributed based on final scoring, performance, and judge evaluation.
      </p>
    </div>
  );
};

export default TronPrize;
