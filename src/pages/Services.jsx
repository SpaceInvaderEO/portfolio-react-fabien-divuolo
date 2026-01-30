function Services() {
  const hoverStyle = {
    backgroundColor: "#efefef",  
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transform: "translateY(-2px)",
  };

  const defaultStyle = {
    backgroundColor: "#ffffff",
    color: "#000",
    cursor: "pointer",
    minHeight: "150px",
    padding: "1rem",
    transition: "all 0.3s ease",
    boxShadow: "none",       
    transform: "translateY(0)",  
  };

  const servicesData = [
    {
      title: "Développement Front-end",
      text: "Création d'interfaces utilisateur réactives et modernes.",
    },
    {
      title: "Développement Back-end",
      text: "Création d'API sécurisées et gestion de bases de données.",
    },
    {
      title: "Responsive Design",
      text: "Adaptation des sites pour tous les appareils (mobile, tablette, desktop).",
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Nos Services</h2>
      <div className="row mt-4 g-4">
        {servicesData.map((service, idx) => (
          <div key={idx} className="col-md-4 d-flex">
            <div
              style={{ ...defaultStyle }}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, defaultStyle)}
            >
              <h5>{service.title}</h5>
              <p>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;