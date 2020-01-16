import React, { useState } from "react";
import styled from "styled-components";

const TerminalInput = props => {
  const [inputValue, setInputValue] = useState("");
  const [width, setWidth] = useState(0);

  function updateWidth(func) {
      console.log(width);
      if (width >= 0) {
          setWidth(func);
      }
  }


  const Input = styled.input`
    background-color: transparent;
    border: none;
    color: #fbfbfb;
    font-family: monospace;
    caret-color: transparent;
    font-size: 1em;
    width: ${width}ch;
    &:focus {
      outline: none;
    }
  `;


  function onKeyDownHandler(e) {
    //alphabet  
    if (e.keyCode >= 48 && e.keyCode <= 90) {
        updateWidth(width => ++width);
    }

    //numbers and symbols
    if ((e.keyCode >= 96 && e.keyCode <= 111) || (e.keyCode >= 186 && e.keyCode <= 222)) {
        updateWidth(width => ++width);
    }

    //Enter key
    if (e.keyCode === 13) {
        props.executeCommand(e.target.value);
        setInputValue('');
        setWidth(0);
    }

    //Backspace
    if (e.keyCode === 8 && width === 0) {
        //do nothing
    } else if (e.keyCode === 8) {
        updateWidth(width => --width);
    }

    //Space
    if (e.keyCode === 32) {
        updateWidth(width => ++width);
    }

  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <Input
      tabIndex={0}
      autoFocus
      onKeyDown={onKeyDownHandler}
      value={inputValue}
      onChange={handleChange}
      ref={props.forwardedRef}
    ></Input>
  );
};

export default TerminalInput;
