function SkillCard({
  name,
  description,
  level = 'Intermediate'
}) {

  return (

    <div className="bg-beige rounded-2xl p-6 hover:-translate-y-1 transition-transform">

      <h3 className="text-2xl font-bold text-dark mb-3">
        {name}
      </h3>


      <p className="text-dark/80 mb-4">
        {description}
      </p>


      <span className="text-brown font-semibold text-sm">
        {level}
      </span>

    </div>

  )
}

export default SkillCard