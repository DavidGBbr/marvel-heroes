import api from "./axiosConfig";

export const getCharacters = () => {
  return api.get("/characters");
};
