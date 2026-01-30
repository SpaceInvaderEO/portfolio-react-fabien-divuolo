import { useState } from "react";

function Legal() {
  const [sections, setSections] = useState({
    editor: true,
    host: false,
    credits: false
  });

  const toggleSection = (key) => {
    setSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="container mt-5">
      <h1>Mentions légales</h1>
 
      <div className="mb-3">
        <button
          className="btn btn-secondary mb-2"
          onClick={() => toggleSection("editor")}
        >
          Éditeur du site
        </button>
        {sections.editor && (
          <div className="p-3 border rounded">
            <p>John Doe</p>
            <p>Adresse : 123 Rue Exemple, 75000 Paris</p>
            <p>Email : john@doe.com</p>
          </div>
        )}
      </div>
 
      <div className="mb-3">
        <button
          className="btn btn-secondary mb-2"
          onClick={() => toggleSection("host")}
        >
          Hébergeur du site
        </button>
        {sections.host && (
          <div className="p-3 border rounded">
            <p>Hébergeur : OVH</p>
            <p>Adresse : 2 rue Kellermann, 59100 Roubaix</p>
            <p>Téléphone : 1007</p>
          </div>
        )}
      </div>
 
      <div className="mb-3">
        <button
          className="btn btn-secondary mb-2"
          onClick={() => toggleSection("credits")}
        >
          Crédits
        </button>
        {sections.credits && (
          <div className="p-3 border rounded">
            <p>Images : Unsplash, Pexels</p>
            <p>Icônes : FontAwesome</p>
            <p>Framework : React, Bootstrap, Vite</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Legal;