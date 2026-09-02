function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
  category
}) {

  return (

    <article className="bg-dark-beige rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">

      {/* Image */}

      <div className="h-56 bg-blue overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />

      </div>


      {/* Content */}

      <div className="p-6">

        <div className="flex justify-between items-start gap-4 mb-3">

          <h3 className="text-2xl font-bold text-dark">
            {title}
          </h3>

          <span className="text-xs font-semibold text-brown bg-beige px-3 py-1 rounded-full">
            {category}
          </span>

        </div>


        <p className="text-dark/80 leading-relaxed mb-4">
          {description}
        </p>


        <div className="flex flex-wrap gap-2 mb-5">

          {technologies.map((technology) => (

            <span
              key={technology}
              className="text-sm text-dark bg-main px-3 py-1 rounded-full"
            >
              {technology}
            </span>

          ))}

        </div>


        <a
          href={link}
          className="text-brown font-bold hover:text-blue transition-colors"
        >
          View Project →
        </a>

      </div>

    </article>

  )
}

export default ProjectCard