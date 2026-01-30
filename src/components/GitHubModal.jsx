import { useEffect, useState } from "react";

function GitHubModal({ show, onClose, username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!show) return;

    setLoading(true);
    setError(null);

    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Utilisateur introuvable");
        }
        return res.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Impossible de charger le profil GitHub");
        setLoading(false);
      });
  }, [show, username]);

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body text-center">
            {loading && <p>Chargement...</p>}
            {error && <p className="text-danger">{error}</p>}

            {user && (
              <>
                <img
                  src={user.avatar_url}
                  alt="Avatar GitHub"
                  className="rounded-circle mb-3"
                  width="120"
                />
                <h5>{user.name || user.login}</h5>
                <p className="text-muted">{user.bio || "Pas de bio disponible"}</p>

                <p>
                  <strong>{user.public_repos}</strong> repositories publics
                </p>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  Voir le profil GitHub
                </a>
              </>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default GitHubModal;