import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./CharacterList.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

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
  function renderCharacters() {
    return characters.map((character) => {
      const { id, name, status, gender, species, type, image } = character;
      return (
        <Link to={`./character/${id}`}>
          <li key={id} className="character-card">
            <img src={image} alt={name} />
            <h6>{name}</h6>
          </li>
        </Link>
      );
    });
  }

  return (
    <div>
      <Filter />
      <ul className="character-list">{renderCharacters()}</ul>
      {page < totalPages && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Load more characters here
        </button>
      )}
    </div>
  );
}
