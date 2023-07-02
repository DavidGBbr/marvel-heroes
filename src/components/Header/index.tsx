import React, {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as C from "./styles";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import {
  findHeroes,
  getCharacters,
  moreCharacters,
} from "../../api/apiService";
import { GlobalContext } from "../../contexts/AppContext";

const Header = () => {
  const { characters, setCharacters } = useContext(GlobalContext);
  const [search, setSearch] = useState("");
  const [infinite, setInfinite] = useState(true);
  const navigate = useNavigate();

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
    const fetchData = async () => {
      try {
        const response = await findHeroes(search);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    if (search.length) {
      fetchData();
    }
  }, [search, setCharacters]);

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

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleLogoClick = () => {
    setSearch("");
    navigate("/");
    getCharacters()
      .then((response) => {
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <C.Container>
      <C.Logo
        src="../../../public/Images/logo.png"
        alt="Marvel logo"
        onClick={handleLogoClick}
      />
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
