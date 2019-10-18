import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, [setCharacters]);

  return (
    <>
      <SearchForm characters={characters} />
      <section className="character-list">
        {characters.map((char, i) => (
          <Link key={i} to={`/characters/${char.name}`}>
            <CharacterDetails key={char.name} info={char} />
          </Link>
        ))}
      </section>
    </>
  );
}

function CharacterDetails(char) {
  return <CharacterCard key={char.id} info={char} />;
}
