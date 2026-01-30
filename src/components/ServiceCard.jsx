function ServiceCard({ title, description }) {
  return (
    <div className="card p-3 h-100">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;