import React from "react";
import { Card, CardText, CardTitle } from "reactstrap";

export default function CharacterCard(props) {
  return (
    <div className="card-container">
      <Card>
        <CardTitle>Name: {props.info.info.name}</CardTitle>
        <CardText>Species: {props.info.info.species}</CardText>
        <CardText>Status: {props.info.info.status}</CardText>
      </Card>
    </div>
  );
}
