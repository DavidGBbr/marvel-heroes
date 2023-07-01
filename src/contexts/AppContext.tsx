import React, { createContext, useState, ReactNode } from "react";
import { ICharacter } from "../types/Character";

interface IGlobalContext {
  characters: ICharacter[];
  setCharacters: React.Dispatch<React.SetStateAction<ICharacter[]>>;
}

interface IGlobalProviderProps {
  children: ReactNode;
}

export const GlobalContext = createContext<IGlobalContext>({
  characters: [],
  setCharacters: () => {},
});

export const GlobalProvider: React.FC<IGlobalProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  return (
    <GlobalContext.Provider value={{ characters, setCharacters }}>
      {children}
    </GlobalContext.Provider>
  );
};
