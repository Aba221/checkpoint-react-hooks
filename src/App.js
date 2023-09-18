import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom"; 
import FilmList from "./FilmList";
import FilmDescription from "./FilmDescription";
import FilmTrailer from "./FilmTrailer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "OPPENHEIMER",
      description: "Description du film 1",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_2138020211009140002.jpg",
      trailerURL:"https://video.cinetrafic.fr/videos/203283_sd.mp4",
      descript: "L'un des films les plus attendus de 2023. Oppenheimer est le biopic de J. Robert Oppenheimer, l'homme qui dirigea la conception de la bombe atomique au cours de la Seconde Guerre mondiale. Un scientifique incarné ici par Cillian Murphy (interprète de Thomas Shelby dans Peaky Blinders, et vu aussi dans Le Vent se lève, Batman Begins ou Inception). Avec aussi Robert Downey Jr (Iron Man dans le MCU), ou Matt Damon. Un long-métrage plus méditatif et triste que spectaculaire, réalisé par Christopher Nolan, signataire de The Dark Knight mais aussi d'Interstellar et Inception.",
      note: 6,
    },
    {
      id: 2,
      title: "SPIDER-MAN",
      description: "Description du film 2",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_5683020200327110002.jpg",
      trailerURL: "https://video.cinetrafic.fr/videos/202980_sd.mp4",
      descript: "Attendu comme l'un des meilleurs films d'animation 2023 et comme l'un des grands films de l'année, Spider-Man : Across the Spider-Verse est la suite de Spider-Man : New Generation. Il prend appui lui aussi sur le concept de multivers, pour aller encore plus loin que son prédécesseur. Un grand nombre de spectateurs espèrent qu'il utilisera vraiment ce concept, un peu effleuré dans Doctor Strange 2. Titré à un moment en France Spider-Man : Seul contre tous, il est dirigé par la même équipe que son prédécesseur. Certains le guettent comme un grand film Marvel potentiel.",
      note: 8.5,
    },
    {
      id: 3,
      title: "WAR PONY",
      description: "Description du film 3",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_5987020230109212156.jpg",
      trailerURL: "https://video.cinetrafic.fr/videos/202874_sd.mp4",
      descript: "Deux jeunes hommes de la tribu Oglala Lakota vivent dans la réserve de Pine Ridge, dans le Dakota du Sud. Bill, 23 ans, cherche à joindre les deux bouts à tout prix. Matho, 12 ans, est quant à lui impatient de devenir un homme. Liés par leur quête d’appartenance à une société qui leur est hostile, ils tentent de tracer leur propre voie vers l’âge adulte.",
      note: 7,
    },
    {
      id: 4,
      title: "CHIEN DE LA CASSE",
      description: "Description du film 4",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_6301020230419124055.PNG",
      trailerURL: "https://video.cinetrafic.fr/videos/202713_sd.mp4",
      descript: "Comédie dramatique sociale française, Chien de la casse suit deux amis qui sont aussi deux marginaux sans horizon, dans une petite ville. L'un tombe amoureux, et leur amitié est chamboulée. Ils vont devoir grandir. Avec Anthony Bajon (La Prière, Athéna), Raphaël Quenard (A mon seul désir, La Daronne) et Galatéa Bellugi (A 14 ans, La Fille d'Albino Rodrigue).",
      note: 6.5,
    },
    {
      id: 5,
      title: "JOHN WICK 4",
      description: "Description du film 5",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_2742020210326000007.jpg",
      trailerURL: "https://video.cinetrafic.fr/videos/202458_sd.mp4",
      descript: "Blockbuster à la réalisation ambitieuse, John Wick : Chapitre 4 voit le personnage as du revolver et du combat, joué par Keanu Reeves, s'opposer au français Vincent Bisset de Gramont, membre éminent de la Grande Table. Un méchant joué par Bill Skarsgard (Pennywise dans Ca). Avec toujours Chad Stahelski à la réalisation, comme sur les volets précédents, et avec Donnie Yen (la saga Ip Man) et Laurence Fishburne (Morpheus dans la saga Matrix entre autres).",
      note: 7.5,
    },
    {
      id: 6,
      title: "Donjons & Dragons",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_8940020201231040007.jpg",
      trailerURL: "https://video.cinetrafic.fr/videos/202620_sd.mp4",
      descript: "Le jeu de rôle sur table Donjons & Dragons a droit à une seconde chance au cinéma. Cette fois, Chris Pine (les sagas Star Trek et Wonder Woman), Regé-Jean Page (La Chronique des Bridgerton) ou Sophia Lillis (Ca) sont de la partie au casting. Et beaucoup de gags sont apparemment à prévoir.",
      note: 6.5,
    },
    {
      id: 7,
      title: "LES HERBES SECHES",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_7514020230712111718.PNG",
      trailerURL: "https://video.cinetrafic.fr/videos/203253_sd.mp4",
      descript: "Samet est un jeune enseignant dans un village reculé d’Anatolie. Alors qu’il attendait depuis plusieurs années sa mutation à Istanbul, une série d’événements lui fait perdre tout espoir. Jusqu’au jour où il rencontre Nuray, jeune professeure comme lui…",
      note: 8,
    },
    {
      id: 8,
      title: "BURNING DAYS",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_7384020220425190038.jpg",
      trailerURL: "https://video.cinetrafic.fr/videos/202740_sd.mp4",
      descript: "Emre, un jeune procureur déterminé et inflexible, vient d’être nommé dans une petite ville reculée de Turquie. À peine arrivé, il se heurte aux notables locaux bien décidés à défendre leurs privilèges par tous les moyens, même les plus extrêmes.",
      note: 6.5,
    },
  ]);

  const [newFilm, setNewFilm] = useState({
    title: "",
    description: "",
    posterURL: "",
    note: 0,
  });

  
  // Fonction pour ajouter un nouveau film
  const addNewFilm = () => {
    // Vérifiez que les champs du formulaire ne sont pas vides
    if (
      newFilm.title.trim() !== "" &&
      newFilm.description.trim() !== "" &&
      newFilm.posterURL.trim() !== "" &&
      newFilm.note > 0
    ) {
      // Créez un nouvel objet film en ajoutant un ID unique
      const newFilmWithId = {
        ...newFilm,
        id: films.length + 1,
      };

      // Mettez à jour la liste des films avec le nouveau film
      setFilms([...films, newFilmWithId]);

      // Réinitialisez le formulaire d'ajout de film
      setNewFilm({
        title: "",
        description: "",
        posterURL: "",
        note: 0,
      });
    } else {
      alert("Veuillez remplir tous les champs du formulaire.");
    }
  };
  
  
return (
  <Router> 
    <div className="container">
      <h1 className="mt-5 mb-4">Ma Liste de Films</h1>

      {/* Formulaire d'ajout de film */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Titre du film"
          value={newFilm.title}
          onChange={(e) => setNewFilm({ ...newFilm, title: e.target.value })}
          className="form-control"
        />
        <input
          type="text"
          placeholder="Description du film"
          value={newFilm.description}
          onChange={(e) =>
            setNewFilm({ ...newFilm, description: e.target.value })
          }
          className="form-control mt-2"
        />
        <input
          type="text"
          placeholder="URL de l'affiche du film"
          value={newFilm.posterURL}
          onChange={(e) =>
            setNewFilm({ ...newFilm, posterURL: e.target.value })
          }
          className="form-control mt-2"
        />
        <input
          type="number"
          placeholder="Note du film"
          value={newFilm.note}
          onChange={(e) => setNewFilm({ ...newFilm, note: e.target.value })}
          className="form-control mt-2"
        />
        <button onClick={addNewFilm} className="btn btn-primary mt-2">
          Ajouter un Film
        </button>
      </div>

        {/* Liste des films */}
        
    
        <Routes>
          <Route
            path="/"
            element={<FilmList films={films} />}
          />

          {/* Route pour la description d'un film */}
          <Route
            path="/film/:id/description"
            element={<FilmDescription films={films} />}
          />

          {/* Route pour la bande-annonce d'un film */}
          <Route
            path="/film/:id/trailer"
            element={<FilmTrailer films={films} />}
          />
        </Routes>
    </div>
  </Router>
);
}

export default App;

