import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../../api/apiService";
import { Loader } from "../../components/Loader/styles";
import * as C from "./styles";
import { ICharacter } from "../../types/Character";
import { IComic } from "../../types/Comic";

const Character = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [comics, setComics] = useState<IComic[]>([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await getCharacter(id);
          const characterData = response.data.data.results[0];
          setCharacter(characterData);
          setComics(characterData.comics.items.slice(0, 5));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <C.Container>
      {character ? (
        <C.CardContainer>
          <C.CardInfo>
            <h1>{character.name}</h1>
            <p>{character.description}</p>
            <h2>Quadrinhos:</h2>
            <ul>
              {comics.map((comic) => (
                <li key={comic.resourceURI}>{comic.name}</li>
              ))}
            </ul>
          </C.CardInfo>
          <C.CardImg
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt=""
          />
        </C.CardContainer>
      ) : (
        <Loader />
      )}
    </C.Container>
  );
};

export default Character;
