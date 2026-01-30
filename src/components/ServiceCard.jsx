function ServiceCard({ title, description, icon }) {
  return (
    <div className="col-md-4 mb-4">
      <div
        className="card h-100 text-center p-3"
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
        {icon && <i className={`bi ${icon} fs-1 mb-3`}></i>}
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;