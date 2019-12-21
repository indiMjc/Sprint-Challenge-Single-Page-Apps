import React from "react";
import axios from "axios";

const NextButton = props => {
  const getNextPage = url => {
    axios.get(url).then(res => {
      props.setCharacters(res.data.results);
      props.setNext(res.data.info.next);
      props.setPrevious(res.data.info.prev);
    });
  };

  return <button onClick={() => getNextPage(props.next)}>Next Page</button>;
};

export default NextButton;
