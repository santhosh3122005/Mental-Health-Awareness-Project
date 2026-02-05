import { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = () => {
    if (!name || !email || !msg) {
      alert("Please fill all fields");
      return;
    }
    alert("Message sent successfully! 💙");
    setName(""); setEmail(""); setMsg("");
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)"
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "white",
          padding: "40px",
          textAlign: "center"
        }}
      >
        <h2>Contact & Support</h2>
        <p>You are not alone. Help is available.</p>
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "30px"
          }}
        >
          <GlassCard title="📞 Kiran" subtitle="24/7 Support" contact="1800-599-0019" />
          <GlassCard title="📞 AASRA" subtitle="Suicide Prevention" contact="+91 9820466726" />
          <GlassCard title="📞 Sneha" subtitle="Emotional Support" contact="044-24640050" />
        </div>
        <div
          style={{
            maxWidth: "500px",
            margin: "40px auto",
          }}
        >
          <h3>📩 Send Us a Message</h3>
          <input
            style={inputStyle}
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            style={inputStyle}
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <textarea
            style={{ ...inputStyle, height: "80px" }}
            placeholder="Your Message"
            value={msg}
            onChange={e => setMsg(e.target.value)}
          ></textarea>
          <button
            onClick={handleSubmit}
            style={{
              padding: "10px 22px",
              border: "none",
              borderRadius: "5px",
              background: "#4a90e2",
              color: "white",
              cursor: "pointer",
              marginTop: "10px"
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
function GlassCard({ title, subtitle, contact }) {
  return (
    <div className="glass-card" style={glassCardStyle}>
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <b>{contact}</b>
    </div>
  );
}
const glassCardStyle = {
  width: "230px",
  padding: "18px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.15)",
  backdropFilter: "blur(10px)",      
  WebkitBackdropFilter: "blur(10px)", 
  border: "1px solid rgba(255,255,255,0.25)",
  color: "white",
  cursor: "pointer",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0 4px 14px rgba(0,0,0,0.3)"
};
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "none"
};
export default Contact;
