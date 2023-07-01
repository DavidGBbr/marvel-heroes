import styled from "styled-components";

export const Container = styled.main`
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: #10141e;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 0px 20px;
  gap: 20px;
  flex-wrap: wrap;
`;

export const CardImg = styled.img`
  display: flex;
  width: 530px;
  max-width: 100%;
  border-radius: 8px;
`;

export const CardInfo = styled.div`
  color: #fff;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.2rem;
  }

  p {
    font-size: 1.2rem;
  }

  @media (max-width: 1180px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 2.2rem;
    }

    h2 {
      font-size: 2rem;
    }
  }
`;
