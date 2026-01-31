import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>John Doe</h5>
            <p>123 Rue du Web, 75000 Paris</p>
            <p>+33 1 23 45 67 89</p>
            <div className="d-flex gap-2">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Liens</h5>
            <ul className="list-unstyled">
              <li><a href="/">Accueil</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><a href="/portfolio">Projet 1</a></li>
              <li><a href="/portfolio">Projet 2</a></li>
              <li><a href="/portfolio">Projet 3</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;