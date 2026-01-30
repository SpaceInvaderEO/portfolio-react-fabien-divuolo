import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/portfolio/coder.jpg";
import project2 from "../assets/portfolio/espace-bien-etre.jpg";
import project3 from "../assets/portfolio/fresh-food.jpg";
import project4 from "../assets/portfolio/restaurant-japonais.jpg";
import project5 from "../assets/portfolio/screens.jpg";
import project6 from "../assets/portfolio/seo.jpg";

function Portfolio() {
  const projects = [
    { title: "Coder", description: "Site pour développeurs", image: project1 },
    { title: "Espace Bien-Être", description: "Site bien-être et spa", image: project2 },
    { title: "Fresh Food", description: "Site traiteur healthy", image: project3 },
    { title: "Restaurant Japonais", description: "Restaurant japonais moderne", image: project4 },
    { title: "Screens", description: "Portfolio de captures d'écran", image: project5 },
    { title: "SEO", description: "Optimisation SEO pour clients", image: project6 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mes Réalisations</h2>
      <div className="row">
        {projects.map((project, idx) => (
          <ProjectCard
            key={idx}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;