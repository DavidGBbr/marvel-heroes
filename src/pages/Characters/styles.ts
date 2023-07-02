import styled from "styled-components";

export const Container = styled.main`
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
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    justify-content: space-evenly;
  }

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const CardItem = styled.div`
  flex: 0 0 340px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  background-color: #161d2f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  box-shadow: 2px 4px 12px rgb(0 0 0 / 19%);
  transition: 0.5s;

  @media (max-width: 500px) {
    flex: 1;
  }

  img {
    height: 220px;
    border-radius: 10px;
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: 2px 4px 12px rgb(0 0 0 / 40%);
  }
`;

export const CardInfo = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
`;
