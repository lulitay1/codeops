function About() {

  return (

    <section
      id="about"
      className="bg-main py-24"
    >

      <div className="container mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-dark mb-4">
            About Me
          </h2>

          <p className="text-brown font-medium">
            A little bit about me
          </p>

        </div>


        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <AboutCard title="Profile">

            <p className="text-dark/80 leading-relaxed">
              I'm passionate about web development and building
              practical applications that make people's lives easier.
              I enjoy learning new technologies and turning ideas
              into useful applications.
            </p>

          </AboutCard>


          <AboutCard title="Education">

            <p className="text-dark/80 leading-relaxed">
              Bachelor of Science in Software Engineering from Addis Ababa Science and Technology University.
            </p>

          </AboutCard>

        </div>

      </div>

    </section>

  )
}


/* Reusable component using children */

function AboutCard({ title, children }) {

  return (

    <div className="bg-dark-beige rounded-2xl p-8">

      <h3 className="text-2xl font-bold text-dark mb-4">
        {title}
      </h3>

      {children}

    </div>

  )
}


export default About