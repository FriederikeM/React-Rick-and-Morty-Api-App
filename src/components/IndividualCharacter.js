import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./IndividualCharacter.css";

export default function IndividualCharacter() {
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

  return (
    <article className="individual-character">
      <h4>{character.name}</h4>
      <div className="individual-character-box">
        <img src={character.image} alt={character.name} />
        <ul className="description">
          <li>Status: {character.status}</li>
          <li>Gender: {character.gender}</li>
          <li>Species: {character.species}</li>
          {character.type !== "" && <li>Type: {character.type}</li>}
        </ul>
      </div>
    </article>
  );
}
