import api from "./axiosConfig";

export const getCharacters = () => {
  return api.get("/characters");
};

export const moreCharacters = (offset: number) => {
  return api.get("/characters", {
    params: {
      offset,
    },
  });
};
