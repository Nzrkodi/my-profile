const Skills = () => {
  const skills = [
    { 
      icon: '💻', 
      title: 'Languages', 
      desc: 'JavaScript, TypeScript, PHP, Golang, MySQL, HTML, CSS' 
    },
    { 
      icon: '🚀', 
      title: 'Frameworks', 
      desc: 'Laravel, Vue.js, Next.js, Tailwind CSS, Bootstrap, jQuery' 
    },
    { 
      icon: '🔧', 
      title: 'Tools', 
      desc: 'GitHub, VSCode, Nginx, Cloud Server' 
    },
    { 
      icon: '🗄️', 
      title: 'Backend', 
      desc: 'REST APIs, Laravel, MySQL, PostgreSQL, Google Cloud Storage' 
    },
    { 
      icon: '⚡', 
      title: 'Frontend', 
      desc: 'Vue.js, Next.js, AJAX, Responsive Design' 
    },
    { 
      icon: '☁️', 
      title: 'Cloud & APIs', 
      desc: 'Google Cloud Storage, Google Email API, Nginx' 
    },
  ]

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
