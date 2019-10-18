import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // console.log("search props", props.characters);

  useEffect(() => {
    const results = props.characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <form>
        <label>Search characters:</label>
        <input
          id="name"
          type="text"
          name="textField"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="results">
        <ul>
          {searchResults.map(character => (
            <Link key={character.name} to={`/characters/${character.name}`}>
              <li key={character.name}>{character.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
