const Projects = () => {
  const projects = [
    {
      emoji: '🏢',
      title: 'Property Management System',
      desc: 'Full-stack custom PMS with seamless data synchronization between UI and server-side architecture. Managing entire software development lifecycle from concept to deployment.',
      tags: ['Laravel', 'Golang', "Payment Gateway (Xendit, Doku)", 'React.js', 'PostgreeSQL']
    },
    {
      emoji: '📦',
      title: 'Kiriminaja Plus Fulfillment',
      desc: 'Led implementation of fulfillment solutions and complex problem-solving tasks, ensuring seamless operational workflows and enhanced customer satisfaction.',
      tags: ['JavaScript', 'REST API', 'Xendit Payment Gateway', 'Laravel']
    },
    {
      emoji: '📊',
      title: 'Omnichannel Marketing Dashboard',
      desc: 'Integrated omnichannel marketing strategies within Kiriminaja dashboard, optimizing cross-platform marketing efforts and improving engagement metrics.',
      tags: ['Vue.js', 'Laravel', 'MySQL', 'Xendit Payment Gateway']
    },
    {
      emoji: '📝',
      title: 'SIPORAT - Letter Numbering System',
      desc: 'Developed letter numbering information system using jQuery, AJAX, REST APIs with Laravel and MySQL backend.',
      tags: ['jQuery', 'AJAX', 'Laravel', 'MySQL']
    },
    {
      emoji: '📄',
      title: 'SIKETA - Letter Management UI',
      desc: 'Designed and implemented responsive web UI for letter numbering system, integrating REST APIs with Laravel and MySQL.',
      tags: ['jQuery', 'AJAX', 'REST API']
    },
    {
      emoji: '☁️',
      title: 'Google Cloud Integration',
      desc: 'Integrated Google Email API and Google Cloud Storage (GCS) into various applications, enhancing data storage and email functionalities.',
      tags: ['Google Cloud', 'API Integration']
    }
  ]

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">{project.emoji}</div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
