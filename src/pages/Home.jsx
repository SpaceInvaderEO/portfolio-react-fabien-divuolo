import { useState } from "react";
import GitHubModal from "../components/GitHubModal";
import heroImg from "../assets/hero.jpg";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div> 
      <div
        className="hero d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
        }}
      >
        <div>
          <h1 className="display-4">John Doe</h1>
          <p className="lead">Développeur Web en formation</p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setModalOpen(true)}
          >
            En savoir plus
          </button>
        </div>
      </div>
 
      <GitHubModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        username="github-johndoe"  
      />
 
      <section className="container mt-5">
        <h3>Présentation</h3>
        <p>
          Bonjour, je suis John Doe, développeur web en formation. Je me spécialise
          dans la création d'interfaces modernes et réactives, tout en respectant
          les bonnes pratiques du web.
        </p>

        <h4 className="mt-4">Compétences</h4>
        <div className="mb-3">
          <label>HTML/CSS</label>
          <div className="progress">
            <div
              className="progress-bar bg-success"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="mb-3">
          <label>JavaScript</label>
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow="80"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>

        <div className="mb-3">
          <label>React</label>
          <div className="progress">
            <div
              className="progress-bar bg-warning"
              role="progressbar"
              style={{ width: "70%" }}
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;