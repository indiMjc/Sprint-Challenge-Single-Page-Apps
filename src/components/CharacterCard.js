import React from "react";

export default function CharacterCard(props) {
  console.log(props.info.info);
  return (
    <>
      <h2>Name: {props.info.info.name}</h2>
      <p>Species: {props.info.info.species}</p>
      <p>Status: {props.info.info.status}</p>
    </>
  );
}
