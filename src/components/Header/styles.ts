import styled from "styled-components";

export const Container = styled.header`
  padding: 0px 50px;
  background-color: #161d2f;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
`;

export const SearchBar = styled.div`
  display: flex;
  border: 2px solid red;
  border-radius: 15px;
`;

export const InputSearch = styled.input`
  padding: 15px;
  width: 40vw;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border: none;
  font-size: 18px;
  color: #f1f1f1;
  background-color: transparent;
`;

export const SearchBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  padding: 10px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  cursor: pointer;
  background-color: transparent;
`;

export const SearchIcon = styled.span`
  font-size: 18px;
  color: #fff;
  transition: 0.5s;

  &:hover {
    font-size: 22px;
  }
`;
