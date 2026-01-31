import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        <div className="row">
 
          <div className="col-md-4 mb-4">
            <h5>John Doe</h5>
            <p>123 rue du Code</p>
            <p>86525 Codeville</p>
            <p>Tél : +33 6 54 32 10 98</p>
            <div className="d-flex gap-2">
              <a 
                href="https://github.com/github-johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <i className="bi bi-github"></i>
              </a>
              <a 
                href="https://twitter.com/twitter-johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <i className="bi bi-twitter"></i>
              </a>
              <a 
                href="https://linkedin.com/in/linkedin-johndoe" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
 
          <div className="col-md-4 mb-4">
            <h5>Pages</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Accueil</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
              <li><Link to="/legal" className="footer-link">Mentions légales</Link></li>
            </ul>
          </div>
 
          <div className="col-md-4 mb-4">
            <h5>Dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio" className="footer-link">Coder</Link></li>
              <li><Link to="/portfolio" className="footer-link">Espace Bien-être</Link></li>
              <li><Link to="/portfolio" className="footer-link">Fresh Food</Link></li>
              <li><Link to="/portfolio" className="footer-link">Restaurant Japonais</Link></li>
              <li><Link to="/portfolio" className="footer-link">Screens</Link></li>
              <li><Link to="/portfolio" className="footer-link">SEO</Link></li>
            </ul>
          </div>

        </div>

        <div className="text-center mt-3">
          <small>&copy; 2026 John Doe. Tous droits réservés.</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;