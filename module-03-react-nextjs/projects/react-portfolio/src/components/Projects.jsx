import { forwardRef } from 'react'

import ProjectCard from './ProjectCard'
import ProjectFilter from './ProjectFilter'


const Projects = forwardRef(function Projects(
  {
    projects,
    activeFilter,
    setActiveFilter,
    loading,
    error
  },
  ref
) {

  return (

    <section
      id="projects"
      ref={ref}
      className="bg-beige py-24"
    >

      <div className="container mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-dark mb-4">
            My Projects
          </h2>

          <p className="text-brown font-medium">
            Some things I have built
          </p>

        </div>


        {/* Filter */}

        <ProjectFilter
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
        />


        {/* Loading */}

        {loading && (

          <p className="text-center text-dark">
            Loading projects...
          </p>

        )}


        {/* Error */}

        {error && (

          <p className="text-center text-brown font-semibold">
            Unable to load projects.
          </p>

        )}


        {/* Projects */}

        {!loading && !error && (

          <>

            {projects.length > 0 ? (

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {projects.map((project) => (

                  <ProjectCard
                    key={project.id}
                    {...project}
                  />

                ))}

              </div>

            ) : (

              <p className="text-center text-dark">
                No projects found.
              </p>

            )}

          </>

        )}

      </div>

    </section>

  )
})


export default Projects