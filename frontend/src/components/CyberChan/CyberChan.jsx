import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./CyberChan.css";

const cyberChanScript = (assets) => ({
  greeting:
    "👋 Hi there! I’m CyberChan, your friendly event guide. Ask me anything about dates, registration, activities, or what to bring!",
  menu: [
    { label: "📅 Agenda", key: "schedule" },
    { label: "📝 Sign-up?", key: "register" },
    { label: "🎮 Battle", key: "activities" },
    { label: "🎒 Essentials", key: "bring" },
    { label: "💬 Enquire", key: "human" },
  ],
  responses: {
    schedule: `📅 Our event kicks off on **Nov 8th** at *Vani Vidyalaya*!  
⏰ Timings: 8:30 AM – 4:30 PM  
We’ve got events and fun zones lined up!  
👉 <a href="${assets.EventHandbook}" target="_blank" rel="noopener noreferrer">Download Schedule PDF</a>`,
    register: `📝 Registration is easy!  
👉 <a href="https://docs.google.com/forms/d/1MCW2VkkbIeub7JzScvNr2595juP_Smqinrv7VbQ3uzg/edit" target="_blank" rel="noopener noreferrer">Click here to Register</a>  
🎟 Entry Fee: 850 Rs  
👨‍👩‍👧 Open to students from Grade 3 – 12`,
    activities: `🎮 Competitions:  
- Lumina Forge (3–5)  
- Dragon Vault (3–5)  
- NauticaQuest (6–8)  
- Nexackathon (9–12)  
+ extra fun gimmicks 🎉`,
    bring: `🎒 Bring along:  
✅ School ID  
✅ Registration confirmation  
✅ Snacks & water  
✅ Team spirit!  
👕 Uniform is must, anime accessories allowed 🎌`,
    human: `💬 A team member is ready to help! 📞 +91 7358239311`,
    surprise: "🎉 Surprise sneak peek coming soon 🚀🤖",
    tech: "✨ TECH MAGIC: Our coolest bots & AI demos revealed!",
    preview: "🎥 Preview Showcase: Last year highlights & new AI lineup!",
  },
});

const CyberChan = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: cyberChanScript(assets).greeting },
  ]);

  const handleUserMessage = (text, key) => {
    const script = cyberChanScript(assets);
    setMessages((prev) => [...prev, { sender: "user", text }]);

    let reply = script.responses[key];
    if (!reply && text.toLowerCase().includes("surprise"))
      reply = script.responses.surprise;
    if (!reply && text.toLowerCase().includes("tech"))
      reply = script.responses.tech;
    if (!reply && text.toLowerCase().includes("preview"))
      reply = script.responses.preview;

    if (reply) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      }, 400);
    }
  };

  return (
    <>
      {/* Floating Robot Button */}
      <button
        className="robot-btn"
        onClick={() => setOpen(!open)}
        aria-label="Chat with CyberChan"
      >
        <img src={assets.Robot} alt="CyberChan" />
      </button>

      {/* Chatbot Window */}
      {open && (
        <div className="chatbot-window">
          <div className="chat-header">
            🤖 CyberChan
            <button className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </button>
          </div>

          <div className="chat-box">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`message ${m.sender === "bot" ? "bot" : "user"}`}
                dangerouslySetInnerHTML={{ __html: m.text }}
              />
            ))}
          </div>

          {/* Quick Menu */}
          <div className="menu">
            {cyberChanScript(assets).menu.map((item, i) => (
              <button
                key={i}
                onClick={() => handleUserMessage(item.label, item.key)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CyberChan;
