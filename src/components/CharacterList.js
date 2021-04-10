import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import "./CharacterList.css";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [filter, setFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

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

  function handleStatusFilterChange(statusFilterValue) {
    if (statusFilterValue === "Dead") {
      setFilter("Dead");
    } else if (statusFilterValue === "Alive") {
      setFilter("Alive");
    } else if (statusFilterValue === "unknown") {
      setFilter("unknown");
    } else if (statusFilterValue === "all") {
      setFilter("all");
    }
  }

  function handleNameFilterChange(nameFilterValue) {
    setNameFilter(nameFilterValue);
  }

  function renderCharacters() {
    return characters
      .filter((character) => {
        return character.status === filter || filter === "all";
      })
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          nameFilter === ""
        );
      })
      .map((character) => {
        const { id, name, image, status } = character;

        return (
          <li key={id} className="character-item">
            <Link to={`/characters/${id}`}>
              <div className={`character-card ${status}`}>
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
        <Filter
          onStatusFilterChange={handleStatusFilterChange}
          onNameFilterChange={handleNameFilterChange}
        />
        <ul className="character-list">{renderCharacters()}</ul>
        {page < totalPages && (
          <div className="load-more-button-wrapper">
            <button className="load-more-button" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
