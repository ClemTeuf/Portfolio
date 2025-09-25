import React, { useState } from "react";

function Project({ img, title, techno, description, technos, competences, github, site }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`projet ${open ? "open" : ""}`}>
      <div className="projet-header" onClick={() => setOpen(!open)}>
        <img src={img} alt={title} loading="lazy" />
        <h3>{title}</h3>
        <div className="technos">{techno}</div>
        <span className="arrow">&#9662;</span>
      </div>
      <div className={`projet-details ${open ? "open" : ""}`}>
        <p><strong>Description : </strong>{description}</p>
        <p><strong>Technologies utilisées :</strong>{technos}</p>
        <p><strong>Compétences mises en pratique :</strong>{competences}</p>
        {github && <a href={github} target="_blank" rel="noopener noreferrer" className="btn-projet">Voir le projet</a>}
        {site && <a href={site} target="_blank" rel="noopener noreferrer" className="btn-projet">Voir le site</a>}
      </div>
    </div>
  );
}

export default Project;
