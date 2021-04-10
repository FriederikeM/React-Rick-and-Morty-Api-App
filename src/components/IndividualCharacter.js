import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./IndividualCharacter.css";

export default function IndividualCharacter() {
  const history = useHistory();
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setCharacter(apiData);
      });
  }, [id]);

  function capitalize(status) {
    if (status) {
      return status[0].toUpperCase() + status.slice(1);
    }
  }

  return (
    <article className="individual-character">
      <div className="name-wrapper">
        <h4>{character.name}</h4>
      </div>
      <div className="background-wrapper">
        <div className="individual-character-box">
          <img src={character.image} alt={character.name} />
          <ul className="description">
            <li>Status: {capitalize(character.status)}</li>
            <li>Gender: {capitalize(character.gender)}</li>
            <li>Species: {character.species}</li>
            {character.type !== "" && <li>Type: {character.type}</li>}
          </ul>
        </div>
      </div>
      <div className="back-button-wrapper">
        <button className="back-button" onClick={() => history.goBack()}>
          GO BACK
        </button>
      </div>
    </article>
  );
}
