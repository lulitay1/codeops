import { useState } from 'react'


function Contact({ onSubmit, submitted = false }) {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

 
  const [errors, setErrors] = useState({})


  const handleChange = (event) => {

    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))

  }


  const handleSubmit = (event) => {

    event.preventDefault()


    const newErrors = {}


    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
    }


    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    }


    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
    }


    if (Object.keys(newErrors).length > 0) {

      setErrors(newErrors)
      return

    }


    setErrors({})

    onSubmit(formData)

  }


  return (

    <section
      id="contact"
      className="bg-main py-24"
    >

      <div className="container mx-auto px-6">

        <div className="text-center mb-12">

          <h2 className="text-4xl font-bold text-dark mb-4">
            Contact Me
          </h2>

          <p className="text-brown font-medium">
            Let's Work Together
          </p>

        </div>


        <div className="max-w-3xl mx-auto bg-light rounded-2xl p-8 md:p-12">


          {submitted ? (

            <div className="text-center py-8">

              <h3 className="text-2xl font-bold text-dark mb-3">
                Thank you!
              </h3>

              <p className="text-dark/80">
                Your message has been submitted.
              </p>

            </div>

          ) : (

            <form onSubmit={handleSubmit} className="space-y-6">


              {/* Name */}

              <div>

                <label
                  htmlFor="name"
                  className="block text-dark font-semibold mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-blue bg-main px-4 py-3 outline-none focus:ring-2 focus:ring-brown"
                />

                {errors.name && (

                  <p className="text-brown text-sm mt-1">
                    {errors.name}
                  </p>

                )}

              </div>


              {/* Email */}

              <div>

                <label
                  htmlFor="email"
                  className="block text-dark font-semibold mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-blue bg-main px-4 py-3 outline-none focus:ring-2 focus:ring-brown"
                />

                {errors.email && (

                  <p className="text-brown text-sm mt-1">
                    {errors.email}
                  </p>

                )}

              </div>


              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="block text-dark font-semibold mb-2"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  className="w-full rounded-xl border border-blue bg-main px-4 py-3 outline-none focus:ring-2 focus:ring-brown resize-none"
                />

                {errors.message && (

                  <p className="text-brown text-sm mt-1">
                    {errors.message}
                  </p>

                )}

              </div>


              <button
                type="submit"
                className="w-full bg-brown text-main px-6 py-3 rounded-full font-semibold hover:bg-blue transition-colors"
              >
                Send Message
              </button>

            </form>

          )}

        </div>


        {/* Social links */}

        <div className="flex justify-center gap-6 mt-10">

          <a
            href="https://github.com/lulitay1"
            className="text-dark font-semibold hover:text-brown"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/lulit-ayele-36abb0343/"
            className="text-dark font-semibold hover:text-brown"
          >
            LinkedIn
          </a>

          <a
            href="lulit143ay@gmail.com"
            className="text-dark font-semibold hover:text-brown"
          >
            Email
          </a>

        </div>

      </div>

    </section>

  )
}

export default Contact


// function Contact() {
//   return (
//     <section id="contact" className="bg-main py-24">
//       <div className="container mx-auto px-6">

//         {/* Section heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-dark mb-4">
//             Contact Me
//           </h2>

//           <p className="text-brown font-medium">
//             Let's Work Together
//           </p>
//         </div>

//         {/* Contact content */}
//         <div className="max-w-3xl mx-auto bg-light-blue rounded-2xl p-8 md:p-12 text-center">

//           <p className="text-dark text-lg mb-8">
//             Have an opportunity or project?
//             I'd love to hear from you.
//           </p>

//           <div className="flex flex-wrap justify-center items-center gap-4">

//             <a
//               href="https://github.com/lulitay1"
//               className="bg-dark text-main px-6 py-3 rounded-full font-semibold hover:bg-brown transition-colors"
//             >
//               GitHub
//             </a>

//             <a
//               href="https://www.linkedin.com/in/lulit-ayele-36abb0343/"
//               className="bg-dark text-main px-6 py-3 rounded-full font-semibold hover:bg-brown transition-colors"
//             >
//               LinkedIn
//             </a>

//             <a
//               href="lulit143ay@gmail.com"
//               className="bg-brown text-main px-6 py-3 rounded-full font-semibold hover:bg-blue transition-colors"
//             >
//               Email Me
//             </a>

//           </div>

//         </div>

//       </div>
//     </section>
//   )
// }

// export default Contact