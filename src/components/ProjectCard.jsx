function ProjectCard({ title, description, image }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100"
        style={{
          transition: "0.3s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#efefef";
          e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {image && <img src={image} className="card-img-top" alt={title} />}
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <button
            className="btn btn-primary"
            style={{ transition: "0.3s" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#3385ff"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ""}
          >
            Voir le projet
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;