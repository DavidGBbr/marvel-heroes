import axiosInstance from "./axiosConfig";

export const getCharacters = () => {
  return axiosInstance.get("");
};
