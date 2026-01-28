function Contact() {
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
          background: "rgba(0,0,0,0.45)"
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "20px"
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h2>Contact & Support</h2>
          <p>
            If you are feeling overwhelmed or need help,
            please reach out. You are not alone.
          </p>
          <h3>📞 Mental Health Helplines (India)</h3>
          <p>Kiran: 1800-599-0019</p>
          <p>AASRA: +91 9820466726</p>
          <p>Sneha: 044-24640050</p>
          <h3>📩 Contact Us</h3>
          <input
            type="text"
            placeholder="Your Name"
            style={inputStyle}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={inputStyle}
          />
          <textarea
            placeholder="Your Message"
            style={{ ...inputStyle, height: "80px" }}
          ></textarea>
          <br /><br />
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "4px",
  border: "none"
};
export default Contact;
