function Legal() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mentions Légales</h2>
 
      <div className="accordion" id="legalAccordion">
 
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEditor">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEditor"
              aria-expanded="true"
              aria-controls="collapseEditor"
            >
              Éditeur du site
            </button>
          </h2>
          <div
            id="collapseEditor"
            className="accordion-collapse collapse show"
            aria-labelledby="headingEditor"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              John Doe<br />
              123 Rue du Web, 75000 Paris<br />
              Email: john.doe@example.com
            </div>
          </div>
        </div>
 
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingHost">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseHost"
              aria-expanded="false"
              aria-controls="collapseHost"
            >
              Hébergeur du site
            </button>
          </h2>
          <div
            id="collapseHost"
            className="accordion-collapse collapse"
            aria-labelledby="headingHost"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              OVH SAS<br />
              2 rue Kellermann – 59100 Roubaix – France<br />
              Tel: 1007
            </div>
          </div>
        </div>
 
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingCredits">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseCredits"
              aria-expanded="false"
              aria-controls="collapseCredits"
            >
              Crédits
            </button>
          </h2>
          <div
            id="collapseCredits"
            className="accordion-collapse collapse"
            aria-labelledby="headingCredits"
            data-bs-parent="#legalAccordion"
          >
            <div className="accordion-body">
              Images libres de droits : <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a><br />
              Favicon : <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Legal;