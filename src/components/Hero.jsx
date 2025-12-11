import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const roles = ['Software Engineer', 'Fullstack Developer', 'Backend Engineer']
  
  useEffect(() => {
    const current = loopNum % roles.length
    const fullText = roles[current]
    
    const tick = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )
      
      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }
    
    const delta = isDeleting ? 50 : 100
    const timer = setTimeout(tick, delta)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum])

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm <span>Nazar</span></h1>
        <p className="typing">{text}</p>
        <p className="hero-location">📍 Yogyakarta, Indonesia</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
