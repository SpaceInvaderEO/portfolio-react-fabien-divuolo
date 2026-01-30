import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact</h1>

      {submitted ? (
        <div className="alert alert-success mt-3">
          ✅ Merci ! Votre message a été envoyé.
        </div>
      ) : (
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              className="form-control"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              borderRadius: "8px",
              border: "1px solid transparent",
              padding: "0.6em 1.2em",
              fontWeight: 500,
              cursor: "pointer",
              transition: "border-color 0.25s"
            }}
            onMouseOver={e => e.currentTarget.style.borderColor = "#646cff"}
            onMouseOut={e => e.currentTarget.style.borderColor = "transparent"}
          >
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;