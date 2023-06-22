import React, { useEffect } from "react";
import { getCharacters } from "./api/apiService";

const App = () => {
  useEffect(() => {
    getCharacters()
      .then((response) => console.log(response.data.data))
      .catch((err) => console.log(err));
  }, []);
  return <div>Marvel</div>;
};

export default App;
