function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contactez-moi</h2>

      <div className="row"> 
        <div className="col-md-6 mb-4">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nom</label>
              <input type="text" className="form-control" id="name" required />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Courriel</label>
              <input type="email" className="form-control" id="email" required />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Numéro de téléphone</label>
              <input type="tel" className="form-control" id="phone" required />
            </div>

            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Sujet</label>
              <input type="text" className="form-control" id="subject" required />
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
 
        <div className="col-md-6">
          <h5>Mes coordonnées</h5>
          <p><strong>Adresse :</strong> 123 Rue du Code, 88525 Codeville</p>
          <p><strong>Téléphone :</strong> +33 6 78 90 12 34</p>
          <p><strong>Email :</strong> john@doe.com</p>

          <h5 className="mt-4">Localisation</h5>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999999999999!2d2.352221!3d48.856614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d9c3f00001%3A0xabcdef1234567890!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1680000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;