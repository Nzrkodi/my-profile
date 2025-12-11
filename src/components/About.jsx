const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src="/profile.jpeg" 
            alt="Nazar"
          />
        </div>
        <div className="about-text">
          <h3>Hello! I'm NazarKodi 👋</h3>
          <p>
            I'm a Software Engineer based in Yogyakarta, Indonesia with a Bachelor's Degree 
            in Informatics from STMIK Adhiguna (GPA: 3.6). I have extensive experience in 
            full-stack development, specializing in building robust web applications.
          </p>
          <p>
            Currently working as a Fullstack Developer at Digitalsolusindo International, 
            where I spearhead the development of Property Management Systems. Previously, 
            I contributed to R&D and fulfillment solutions at Kiriminaja.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
