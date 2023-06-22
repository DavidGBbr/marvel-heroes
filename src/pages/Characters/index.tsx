import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api/apiService";
import { Character } from "../../types/Character";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharacters();
        setCharacters(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Heroes</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <span className="name">{character.name}</span>
            <span className="description">{character.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Characters;
