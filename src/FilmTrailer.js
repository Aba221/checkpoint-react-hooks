import React from "react";
import { useParams, Link } from "react-router-dom";

function FilmTrailer({ films }) {
  // Utilisez useParams pour obtenir les paramètres de l'URL
  const { id } = useParams();

  // Utilisez l'ID pour récupérer le lien de la bande-annonce du film de votre liste de films
  const film = films.find((f) => f.id === Number(id));

  if (!film) {
    // Gérez le cas où le film n'est pas trouvé (par exemple, affichez un message d'erreur)
    return <div>Le film n'a pas été trouvé.</div>;
  }

  return (
    <div>
      <h1>Description du Film</h1>
      <p>{film.descript}</p>
      <h1>Bande-Annonce du Film</h1>
      {/* Affichez la bande-annonce du film ici, en utilisant la propriété trailerURL du film */}
      <video controls>
        <source src={film.trailerURL} type="video/mp4" />
      </video>
      <br></br>
      {/* Ajoutez un lien vers la page d'accueil */}
      <Link to="/" className="retour-accueil">
        Retour à la page d'accueil</Link>

    </div>
  );
}

export default FilmTrailer;




