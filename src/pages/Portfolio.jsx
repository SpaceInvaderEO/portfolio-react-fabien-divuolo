function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Projet Portfolio",
      description: "Site personnel réalisé avec React et Vite.",
      link: "#",
    },
    {
      id: 2,
      title: "Application To-Do",
      description: "Application de gestion de tâches en JavaScript.",
      link: "#",
    },
    {
      id: 3,
      title: "Site vitrine",
      description: "Site vitrine responsive en HTML / CSS.",
      link: "#",
    },
  ];

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Portfolio</h1>

      <div className="row">
        {projects.map((project) => (
          <div className="col-md-4 mb-4" key={project.id}>
            <div className="card h-100">
               
              <div
                className="bg-secondary d-flex align-items-center justify-content-center text-white"
                style={{ height: "200px" }}
              >
                Image du projet
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-primary mt-auto"
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le projet
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;