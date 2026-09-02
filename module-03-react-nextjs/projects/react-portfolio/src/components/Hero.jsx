import profileImage from '../assets/profile.png'

function Hero({ onProjectsClick }) {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-main"
    >

      {/* =========================
          CURVED HERO BACKGROUND
          ========================= */}
      <div
        className="
          absolute
          left-1/2
          top-[-25%]
          -translate-x-1/2
          w-[180%]
          h-[115%]
          rounded-[50%]
          bg-gradient-to-r
          from-dark-beige
          via-light
          to-dark-beige
        "
      />


      {/* =========================
          HERO CONTENT
          ========================= */}
      <div
        className="
          relative
          z-10
          container
          mx-auto
          min-h-screen
          px-6
          flex
          items-center
        "
      >

        {/* =========================
            HERO TEXT
            ========================= */}
        <div className="w-full md:w-1/2">

          <p className="text-brown text-lg font-semibold mb-3">
            Hello, I'm
          </p>

          <h1
            className="
              text-dark
              text-5xl
              md:text-6xl
              font-bold
              mb-5
            "
          >
            Lulit Ayele
          </h1>

          <p
            className="
              text-dark/80
              text-lg
              max-w-xl
              mb-8
              leading-relaxed
            "
          >
            A software engineering graduate interested in building
            practical web applications that make people's lives easier.
          </p>


          {/* =========================
              BUTTONS
              ========================= */}
          <div className="flex flex-wrap gap-4">

            <button
              type="button"
              onClick={onProjectsClick}
              className="
                bg-brown
                text-main
                px-6
                py-3
                rounded-full
                font-semibold
                hover:bg-blue
                transition-colors
              "
            >
              View Projects
            </button>

            <a
              href="#contact"
              className="
                border-2
                border-brown
                text-brown
                px-6
                py-3
                rounded-full
                font-semibold
                hover:bg-brown
                hover:text-main
                transition-colors
              "
            >
              Contact Me
            </a>

          </div>

        </div>


        {/* =========================
            PROFILE IMAGE
            ========================= */}
        <div
          className="
            hidden
            md:flex
            w-1/2
            justify-center
          "
        >

          {/* Outer holder */}
          <div
            className="
              p-5
              bg-gradient-to-br
              from-beige
              via-light
              to-blue
              shadow-xl

              rounded-[45%_55%_60%_40%/55%_45%_55%_45%]
            "
          >

            {/* Image */}
            <img
              src={profileImage}
              alt="Portrait of Malito Mano"
              className="
                w-80
                h-80
                object-fill

                rounded-[45%_55%_60%_40%/55%_45%_55%_45%]
              "
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero