import SkillCard from './SkillCard'


function Skills() {

  const skills = [

    {
      id: 1,
      name: 'HTML',
      description: 'Semantic and accessible web structure.',
      level: 'Advanced'
    },

    {
      id: 2,
      name: 'CSS',
      description: 'Responsive layouts and modern styling.',
      level: 'Advanced'
    },

    {
      id: 3,
      name: 'JavaScript',
      description: 'Interactive and dynamic web applications.',
      level: 'Intermediate'
    },

    {
      id: 4,
      name: 'React',
      description: 'Component-based user interfaces.',
      level: 'Intermediate'
    },

    {
      id: 5,
      name: 'Python',
      description: 'Application development and programming.',
      level: 'Intermediate'
    }

  ]


  return (

    <section
      id="skills"
      className="bg-main py-24"
    >

      <div className="container mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-dark mb-4">
            My Skills
          </h2>

          <p className="text-brown font-medium">
            Technologies I work with
          </p>

        </div>


        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {skills.map((skill) => (

            <SkillCard
              key={skill.id}
              {...skill}
            />

          ))}

        </div>

      </div>

    </section>

  )
}

export default Skills