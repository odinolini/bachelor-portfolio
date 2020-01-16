import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Chooser = ({ items }) => {
  const [keyPressed, setKeyPressed] = useState(false);
  const [cursor, setCursor] = useState(0);

  useEffect(() => {
/*     window.addEventListener("mouseover", downHandler);
    window.addEventListener("mouseout", upHandler);

    return () => {
      window.removeEventListener("mouseover", downHandler);
      window.removeEventListener("mouseout", upHandler);
    }; */
  });

  function downHandler({ key }) {
      console.log("doown")
  }

  function upHandler({ key }) {}

  const List = styled.ul`
    //list-style-type: none;
  `;

  const ListItem = styled.li`
    &:focus {
      background-color: white;
      outline: none;
      color: black;
    }
    &:first-child() {
        
    }
  `;

  return (
    <List>
      {items.map((item, i) => {
        return (
          <ListItem tabIndex="0" key={i} onClick={() => console.log("WHAAA")}>
            {item}
          </ListItem>
        );
      })}
    </List>
  );
};

export default Chooser;
