import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButton";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        // console.log(res.data.info.next);
        setCharacters(res.data.results);
        setNext(res.data.info.next);
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }, [setCharacters]);

  return (
    <>
      <div className="top">
        <SearchForm characters={characters} />
        <PreviousButton
          setNext={setNext}
          setCharacters={setCharacters}
          previous={previous}
          setPrevious={setPrevious}
        />
        <br />
        <NextButton
          next={next}
          setNext={setNext}
          setCharacters={setCharacters}
          setPrevious={setPrevious}
        />
      </div>
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
