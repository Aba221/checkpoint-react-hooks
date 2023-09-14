import React, { useState } from "react";
import FilmCard from "./FilmCard";

function FilmList({ films }) {
  // États pour les filtres de titre et de note
  const [filterTitle, setFilterTitle] = useState("");
  const [filterNote, setFilterNote] = useState("");

  // Filtrage des films en fonction des filtres actuels
  const filteredFilms = films.filter((film) => {
    const titleMatch = film.title.includes(filterTitle);
    const noteMatch = !filterNote || film.note >= parseFloat(filterNote);

    // Inclure le film si les conditions de filtrage sont remplies
    return titleMatch && noteMatch;
  });

  return (
    <div>
      {/* Formulaire de filtre par titre et note */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Filtrer par titre"
          value={filterTitle}
          onChange={(e) => setFilterTitle(e.target.value)}
          className="form-control"
        />
        <input
          type="number"
          placeholder="Filtrer par note minimale"
          value={filterNote}
          onChange={(e) => setFilterNote(e.target.value)}
          className="form-control mt-2"
        />
      </div>

      {/* Liste des films filtrés */}
      <div className="film-card-column">
        {filteredFilms.map((film) => (
          <div key={film.id} className="film-card">
            {/* Utilisation du composant FilmCard */}
            <FilmCard {...film} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilmList;

