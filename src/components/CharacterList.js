import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`).then(res => {
      console.log(res.data.results);
      setCharacters(res.data.results);
    });
  }, [setCharacters]);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map((char, i) => (
        <Link key={i} to={`/characters/${char.name}`}>
          <CharacterDetails key={char.name} info={char} />
          {/* <h2>Name: {char.name}</h2>
          <p>Species: {char.species}</p>
          <p>Status: {char.status}</p> */}
        </Link>
      ))}
    </section>
  );
}

function CharacterDetails(char) {
  return <CharacterCard key={char.id} info={char} />;
}
