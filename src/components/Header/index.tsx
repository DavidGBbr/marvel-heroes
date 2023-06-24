import React, { ChangeEvent, useState } from "react";
import * as C from "./styles";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <C.Container>
      <C.Logo src="../../../public/Images/logo.png" alt="Marvel logo" />
      <C.SearchBar>
        <C.InputSearch
          type="text"
          placeholder="Busque seus heróis preferidos aqui..."
          onChange={handleSearchChange}
        />
        <C.SearchBtn>
          <C.SearchIcon>
            <BsSearch />
          </C.SearchIcon>
        </C.SearchBtn>
      </C.SearchBar>
    </C.Container>
  );
};

export default Header;
