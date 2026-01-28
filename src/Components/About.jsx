function About() {
  return (
    <div>
      <h2>About This Project</h2>
      <img
        src="https://cdn.pixabay.com/video/2023/01/13/146414-789177031_tiny.jpg"
        alt="Mental Health Awareness"
        style={{
          width: "100%",
          height: "auto",   // height auto → aspect ratio maintain
          borderRadius: "8px",
          marginBottom: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"  // optional shadow
        }}
      />
      <p>
        Mental health awareness is vital in today’s fast-paced world.  
        This project educates users about mental well-being, encourages positive thinking, 
        and provides a platform to share awareness messages.
      </p>
      <p>
        It helps reduce the stigma surrounding mental health issues, 
        promotes open conversations, and encourages seeking help when needed.
      </p>
      <p>
        Users can navigate through various sections, learn about mental health,
        and contribute their own messages to promote awareness.
      </p>
      <h3>Key Features of This Project</h3>
      <ul>
        <li>Four-page structure: Home, About, Awareness, Contact</li>
        <li>Awareness page with CRUD operations for messages</li>
        <li>Responsive layout with navigation bar</li>
        <li>Images to enhance understanding and visual appeal</li>
      </ul>
    </div>
  );
}
export default About;
