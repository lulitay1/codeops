function ProjectFilter({
  activeFilter,
  setActiveFilter,
  filters = ['All', 'React', 'JavaScript', 'HTML/CSS']
}) {

  return (

    <div className="flex flex-wrap justify-center gap-3 mb-10">

      {filters.map((filter) => (

        <button
          key={filter}
          type="button"
          onClick={() => setActiveFilter(filter)}
          className={`
            px-5
            py-2
            rounded-full
            font-semibold
            transition-colors
            ${
              activeFilter === filter
                ? 'bg-brown text-main'
                : 'bg-light-blue text-dark hover:bg-blue hover:text-main'
            }
          `}
        >
          {filter}
        </button>

      ))}

    </div>

  )
}

export default ProjectFilter