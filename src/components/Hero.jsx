function Hero() {
  return (
    <section className="hero text-center bg-light py-5">
      <div className="container">
        <h1 className="display-4">John Doe</h1>
        <h2 className="lead">Développeur Web en formation</h2>
        <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#githubModal">
          En savoir plus
        </button>
      </div>
    </section>
  );
}

export default Hero;