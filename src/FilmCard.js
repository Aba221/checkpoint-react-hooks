import React from "react";
import { Link } from "react-router-dom";

function FilmCard({ id, title, description, posterURL, note }) {
  return (
    <div className="card mb-4">
      <Link to={`/film/${id}/description`}> {/* Lien vers la page de description */}
        <img src={posterURL} className="card-img-top" alt={title} />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Note : {note}</p>
        <Link to={`/film/${id}/trailer`} className="btn btn-primary">
          Voir la Description et la bande-annonce
        </Link>
      </div>
    </div>
  );
}

export default FilmCard;

