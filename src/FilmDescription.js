// FilmDescription.js
import React from "react";
import { useParams } from "react-router-dom"; // Importez useParams

function FilmDescription({ films }) {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID du film à partir de l'URL

  // Utilisez l'ID pour extraire les détails du film
  const film = films.find((f) => f.id === Number(id));

  return (
    <div>
      <h1>Description du Film</h1>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      
    </div>
  );
}

export default FilmDescription;


