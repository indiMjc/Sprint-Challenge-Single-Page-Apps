import React from "react";
import axios from "axios";

const PreviousButton = props => {
  const getPreviousPage = url => {
    axios.get(url).then(res => {
      props.setCharacters(res.data.results);
      props.setNext(res.data.info.next);
      props.setPrevious(res.data.info.prev);
    });
  };

  return (
    <button onClick={() => getPreviousPage(props.previous)}>
      Previous Page
    </button>
  );
};

export default PreviousButton;
