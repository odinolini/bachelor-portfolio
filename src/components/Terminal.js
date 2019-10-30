import React from "react";
import styled from "styled-components";
import Typist from "react-typist";
import "../Typist.css";

const Terminal = props => {
  const TerminalWindow = styled.div`
    width: 95%;
    max-width: 800px;
    height: 400px;
  `;

  const TerminalBg = styled.div`
    background-color: #30353a;
    border-radius: 0 0 0.3em 0.3em;
    height: 100%;
    width: 100%;
    color: white;
  `;

  const TerminalHeader = styled.header`
    background-color: #e0e8f0;
    height: 2em;
    border-radius: 0.3em 0.3em 0 0;
    font-family: monospace;
    text-align: center;
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    font-weight: 600;
  `;

  const HeaderButton = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1em;
  `;

  const TerminalPrefix = styled.span`
    color: green;
    text-shadow: none;
    font-weight: 600;
  `;

  const TerminalContent = styled.div`
    //text-shadow: 0 0 2px #c8c8c8;
    font-size: 1.3em;
    font-family: monospace;
    padding: 0.5em 0 0 0.5em;
  `;

  const AquaText = styled.span`
    color: #9CDCD4;
  `;

  return (
        <TerminalWindow>
          <TerminalHeader>
            <span style={{ flexGrow: 1 }}>
              #dreamteam@the-internet: ~/dev/bachelor-portfolio
            </span>

            <HeaderButton>&minus;</HeaderButton>
            <HeaderButton>+</HeaderButton>
            <HeaderButton>&times;</HeaderButton>
          </TerminalHeader>
          <TerminalBg>
            <TerminalContent>
              <Typist avgTypingDelay={1} cursor={{blink: true, element: '█'}}>
              <TerminalPrefix>➜ dreamteam:~$ </TerminalPrefix>
                I front-end snakker vi:
                <p>
                  <AquaText> ['Semantisk HTML', 'JavaScript', 'React.js']</AquaText>
                </p>
                I back-end har vi erfaring med:
                <p>
                <AquaText> ['Node.js', 'Java', 'C#', 'PHP']</AquaText>
                </p>
                Vi har erfaring med skytjenester:
                <p>
                <AquaText> ['Azure', 'Firebase']</AquaText>
                </p>
                Våre foretrukne arbeidsverktøy:
                <p>
                  <AquaText>['VsCode', 'Git', 'Trello']</AquaText>
                </p>
                  <TerminalPrefix>➜ dreamteam:~$ </TerminalPrefix><br />

              </Typist>
            </TerminalContent>
          </TerminalBg>
        </TerminalWindow>
  );
};

export default Terminal;
