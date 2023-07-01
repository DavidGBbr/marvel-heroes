import React, { useContext } from "react";
import * as C from "./styles";
import { Loader } from "../../components/Loader/styles";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/AppContext";

const Characters = () => {
  const navigate = useNavigate();
  const { characters } = useContext(GlobalContext);

  return (
    <C.Container>
      {characters.length ? (
        <C.CardContainer>
          {characters.map((character) => (
            <C.CardItem
              key={character.id}
              onClick={() => navigate(`/${character.id}`)}
            >
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
      ) : (
        <Loader />
      )}
    </C.Container>
  );
};

export default Characters;
