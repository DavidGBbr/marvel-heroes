import styled from "styled-components";

export const Footer = styled.footer`
  color: #fff;
  text-align: center;
  background-color: #161d2f;
  padding: 20px;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  a {
    font-size: 2rem;
    color: #fff;
    transition: 0.2s;

    :hover {
      color: #ccc;
    }
  }
`;
