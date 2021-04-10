import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./CharacterList.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setCharacters((previousCharacter) => {
          return [...previousCharacter, ...apiData.results];
        });
        setTotalPages(apiData.info.pages);
      });
  }, [page]);

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function handleFilterChange(filterValue) {
    if (filterValue === "dead") {
      setFilter("dead");
    } else if (filterValue === "alive") {
      setFilter("alive");
    } else if (filterValue === "unknown") {
      setFilter("unknown");
    } else if (filterValue === "all") {
      setFilter("");
    }
  }

  function renderCharacters() {
    let filteredCharacters;
    if (filter === "dead") {
      filteredCharacters = characters.filter(
        (character) => character.status === "Dead"
      );
      console.log(characters);
    } else if (filter === "alive") {
      filteredCharacters = characters.filter(
        (character) => character.status === "Alive"
      );
    } else if (filter === "unknown") {
      filteredCharacters = characters.filter(
        (character) => character.status === "unknown"
      );
    } else {
      filteredCharacters = characters;
    }

    return filteredCharacters.map((character) => {
      const { id, name, image, status } = character;
      let classForAlive;
      if (status === "Alive") {
        classForAlive = "alive";
      }
      let classForDead;
      if (status === "Dead") {
        classForDead = "dead";
      }
      let classForUnknown;
      if (status === "unknown") {
        classForUnknown = "unknown";
      }

      return (
        <li key={id} className="character-item">
          <Link to={`/characters/${id}`}>
            <div
              className={`character-card ${classForAlive} ${classForDead} ${classForUnknown}`}
            >
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
              <div className="name-container">
                <h6>{name}</h6>
              </div>
            </div>
          </Link>
        </li>
      );
    });
  }

  return (
    <div>
      <div className="characters-main">
        <Filter onFilterChange={handleFilterChange} />
        <ul className="character-list">{renderCharacters()}</ul>
        {page < totalPages && (
          <button className="load-more-button" onClick={handleLoadMore}>
            Load more characters here
          </button>
        )}
      </div>
    </div>
  );
}
