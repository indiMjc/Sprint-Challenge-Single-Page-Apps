import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/" render={() => <WelcomePage />} />
      <Route path="/characters" render={() => <CharacterList />} />
    </main>
  );
}
