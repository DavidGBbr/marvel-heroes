import React from "react";
import Characters from "./pages/Characters";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import { GlobalProvider } from "./contexts/AppContext";

const App = () => {
  return (
    <>
      <GlobalProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/:id" element={<Character />} />
        </Routes>
        <Footer />
      </GlobalProvider>
    </>
  );
};

export default App;
