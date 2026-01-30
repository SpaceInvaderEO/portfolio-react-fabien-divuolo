import ServiceCard from "../components/ServiceCard";

function Services() {
  const services = [
    {
      title: "Développement Web",
      description: "Création de sites modernes et responsive.",
      icon: "bi-laptop"
    },
    {
      title: "SEO",
      description: "Optimisation du référencement naturel.",
      icon: "bi-search"
    },
    {
      title: "Maintenance",
      description: "Support et mises à jour régulières.",
      icon: "bi-tools"
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Mes Services</h2>
      <div className="row">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;