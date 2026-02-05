function About() {
  return (
    <div className="about">
      <h2 className="about-title">About This Project</h2>
      <p className="about-desc">
        This Mental Health Awareness project is created to educate people about
        mental well-being and encourage healthy habits using a simple web
        interface.
      </p>
      <section className="about-section">
        <h3>🎯 Project Objectives</h3>
        <ul>
          <li>Spread awareness about mental health</li>
          <li>Encourage stress-free and healthy living</li>
          <li>Provide simple mental health tips</li>
          <li>Allow users to share awareness messages</li>
        </ul>
      </section>
      <section className="about-section">
        <h3>🧭 Pages Included</h3>
        <ul>
          <li>Home – Introduction & tips</li>
          <li>Awareness – Add & view awareness messages</li>
          <li>Contact – Support & help details</li>
          <li>Login / Signup – User authentication</li>
        </ul>
      </section>
      <section className="about-section">
        <h3>⚙️ Technologies Used</h3>
        <p>
          React JS, React Router, CSS, Local Storage
        </p>
      </section>
    </div>
  );
}
export default About;
