import { useState } from "react";
import GitHubModal from "../components/GitHubModal";

function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="container mt-5">
       
      <div className="text-center mb-5">
        <h1>John Doe</h1>
        <h2>Développeur Web en formation</h2>
        <button
          className="btn btn-primary mt-3"
          onClick={() => setModalOpen(true)}
        >
          En savoir plus
        </button>
      </div>

       
      <GitHubModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        username="github-johndoe" 
      />

       
      <section>
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