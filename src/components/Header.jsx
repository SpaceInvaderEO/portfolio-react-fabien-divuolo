import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink
          to="/"
          className={({ isActive }) =>
            "navbar-brand text-uppercase" + (isActive ? " active" : "")
          }
        >
          John Doe
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link text-uppercase" + (isActive ? " active" : "")
                }
              >
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  "nav-link text-uppercase" + (isActive ? " active" : "")
                }
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  "nav-link text-uppercase" + (isActive ? " active" : "")
                }
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link text-uppercase" + (isActive ? " active" : "")
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/legal"
                className={({ isActive }) =>
                  "nav-link text-uppercase" + (isActive ? " active" : "")
                }
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;