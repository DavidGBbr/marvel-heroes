import React, { useCallback, useEffect, useState } from "react";
import { getCharacters, moreCharacters } from "../../api/apiService";
import { Character } from "../../types/Character";
import * as C from "./styles";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [infinite, setInfinite] = useState(true);

  const handleMore = useCallback(async () => {
    try {
      const offset = characters.length;
      const response = await moreCharacters(offset);
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        ...response.data.data.results,
      ]);
    } catch (err) {
      console.log(err);
    }
  }, [characters]);

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

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          handleMore();
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite, handleMore]);

  return (
    <C.Container>
      <C.CardContainer>
        {characters.map((character) => (
          <C.CardItem key={character.id}>
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
            />
            <C.CardInfo>
              <h2 className="name">{character.name}</h2>
            </C.CardInfo>
          </C.CardItem>
        ))}
      </C.CardContainer>
    </C.Container>
  );
};

export default Characters;
