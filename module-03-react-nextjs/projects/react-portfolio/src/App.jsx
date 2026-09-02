import { useEffect, useRef, useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { projects as initialProjects } from './data/projects'


function App() {

  // -----------------------------
  // PROJECT STATE
  // -----------------------------

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // -----------------------------
  // PROJECT FILTER STATE
  // -----------------------------

  const [activeFilter, setActiveFilter] = useState('All')

  // -----------------------------
  // CONTACT FORM STATE
  // -----------------------------

  const [formSubmitted, setFormSubmitted] = useState(false)

  // -----------------------------
  // PROJECT SECTION REF
  // -----------------------------

  const projectsRef = useRef(null)


  // -----------------------------
  // LOAD PROJECTS
  // -----------------------------

  useEffect(() => {

    try {

      setLoading(true)

      // Simulating loading external data
      setTimeout(() => {
        setProjects(initialProjects)
        setLoading(false)
      }, 700)

    } catch (error) {

      console.error(error)
      setError(true)
      setLoading(false)

    }

  }, [])


  // -----------------------------
  // FILTER PROJECTS
  // -----------------------------

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(
          project => project.category === activeFilter
        )


  // -----------------------------
  // SCROLL TO PROJECTS
  // -----------------------------

  const scrollToProjects = () => {

    projectsRef.current?.scrollIntoView({
      behavior: 'smooth'
    })

  }


  // -----------------------------
  // CONTACT FORM
  // -----------------------------

  const handleFormSubmit = () => {

    setFormSubmitted(true)

  }


  return (
    <main className="min-h-screen bg-main text-dark">

      <Navbar />

      <Hero onProjectsClick={scrollToProjects} />

      <About />

      <Skills />

      <Projects
        ref={projectsRef}
        projects={filteredProjects}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        loading={loading}
        error={error}
      />

      <Contact
        onSubmit={handleFormSubmit}
        submitted={formSubmitted}
      />

      <Footer />

    </main>
  )
}

export default App