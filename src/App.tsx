import React from "react";
import Characters from "./pages/Characters";
import Header from "./components/Header";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Characters />
      <Footer />
    </>
  );
};

export default App;
