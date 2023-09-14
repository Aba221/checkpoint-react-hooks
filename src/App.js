import React, { useState } from "react";
import FilmList from "./FilmList";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [films, setFilms] = useState([
    {
      id: 1,
      title: "OPPENHEIMER",
      description: "Description du film 1",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_2138020211009140002.jpg",
      note: 6,
    },
    {
      id: 2,
      title: "SPIDER-MAN",
      description: "Description du film 2",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_5683020200327110002.jpg",
      note: 8.5,
    },
    {
      id: 3,
      title: "WAR PONY",
      description: "Description du film 3",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_5987020230109212156.jpg",
      note: 7,
    },
    {
      id: 4,
      title: "Chien de la casse",
      description: "Description du film 4",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_6301020230419124055.PNG",
      note: 6.5,
    },
    {
      id: 5,
      title: "John Wick 4",
      description: "Description du film 5",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_2742020210326000007.jpg",
      note: 7.5,
    },
    {
      id: 6,
      title: "Donjons & Dragons",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_8940020201231040007.jpg",
      note: 6.5,
    },
    {
      id: 7,
      title: "Les 3 Mousquetaires",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_9216020221215205356.jpg",
      note: 8,
    },
    {
      id: 8,
      title: "Burning days",
      description: "Description du film 6",
      posterURL: "https://www.cinetrafic.fr/images/affiches/fiche/aff_7384020220425190038.jpg",
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
    <FilmList films={films} />
  </div>
);
}

export default App;

