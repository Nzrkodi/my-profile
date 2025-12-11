const Experience = () => {
  const experiences = [
    {
      role: 'Fullstack Developer',
      company: 'Digitalsolusindo International',
      period: 'Oct 2024 - Present',
      highlights: [
        'Spearheaded full-stack development of custom Property Management System (PMS)',
        'Managed entire software development lifecycle from concept to deployment',
        'Collaborated with cross-functional teams for scalable solutions'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Kiriminaja',
      period: 'Jul 2023 - Oct 2024',
      highlights: [
        'Contributed to R&D department, creating features for better UX and efficiency',
        'Led fulfillment solutions implementation in Kiriminaja Plus',
        'Integrated omnichannel marketing strategies within dashboard'
      ]
    },
    {
      role: 'Backend Engineer',
      company: 'Kiriminaja',
      period: 'Apr 2021 - Feb 2023',
      highlights: [
        'Developed SIPORAT & SIKETA systems using jQuery, AJAX, Laravel, MySQL',
        'Integrated Google Email API and Google Cloud Storage (GCS)',
        'Built responsive and user-friendly interfaces with REST APIs'
      ]
    }
  ]

  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="period">{exp.period}</span>
              <ul>
                {exp.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
