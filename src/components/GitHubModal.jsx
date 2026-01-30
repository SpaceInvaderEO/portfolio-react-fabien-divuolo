import { useState, useEffect } from "react";

function GitHubModal({ show, onClose, username }) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!show || !username) return;
 
    const fetchProfile = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (!res.ok) throw new Error("Erreur lors du chargement du profil");
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [show, username]);

  if (!show) return null;

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Profil GitHub</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            {loading && <p>Chargement...</p>}
            {error && <p className="text-danger">{error}</p>}
            {profile && (
              <>
                <div className="text-center mb-3">
                  <img
                    src={profile.avatar_url}
                    alt={profile.login}
                    className="rounded-circle"
                    width="100"
                  />
                </div>
                <p><strong>Nom :</strong> {profile.name || profile.login}</p>
                <p><strong>Bio :</strong> {profile.bio || "Aucune description"}</p>
                <p><strong>Followers :</strong> {profile.followers}</p>
                <p><strong>Following :</strong> {profile.following}</p>
                <p>
                  <strong>Repos publics :</strong>{" "}
                  <a href={profile.html_url} target="_blank" rel="noopener noreferrer">
                    {profile.public_repos}
                  </a>
                </p>
              </>
            )}
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GitHubModal;