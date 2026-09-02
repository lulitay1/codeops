import { useState } from 'react'


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)


  const navLinks = [
    { id: 1, name: 'Home', link: '#home' },
    { id: 2, name: 'About Me', link: '#about' },
    { id: 3, name: 'Skills', link: '#skills' },
    { id: 4, name: 'My Projects', link: '#projects' },
    { id: 5, name: 'Contact Me', link: '#contact' }
  ]


  const handleLinkClick = () => {
    setMenuOpen(false)
  }


  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="container mx-auto px-6 py-5">

        <div className="flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="font-bold text-dark text-2xl md:text-3xl"
          >
            Lulit Ayele
          </a>


          {/* Desktop navigation */}

          <nav className="hidden md:flex items-center gap-7 font-medium">

            {navLinks.map((link) => (

              <a
                key={link.id}
                href={link.link}
                className="text-dark hover:text-brown transition-colors"
              >
                {link.name}
              </a>

            ))}

          </nav>


          {/* Desktop contact */}

          <a
            href="#contact"
            className="hidden md:block bg-brown text-main px-5 py-2.5 rounded-full font-semibold hover:bg-blue transition-colors"
          >
            Contact Me
          </a>


          {/* Mobile menu button */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-dark text-2xl"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>


        {/* Mobile menu */}

        {menuOpen && (

          <nav className="md:hidden mt-4 bg-beige rounded-2xl p-5 shadow-lg">

            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (

                <a
                  key={link.id}
                  href={link.link}
                  onClick={handleLinkClick}
                  className="text-dark font-medium hover:text-brown"
                >
                  {link.name}
                </a>

              ))}

            </div>

          </nav>

        )}

      </div>

    </header>
  )
}

export default Navbar