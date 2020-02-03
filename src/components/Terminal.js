import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import TerminalInput from "./TerminalInput";
import Typist from "react-typist";

const Terminal = props => {
  const [isMaximized, setMaximized] = useState(false);
  const [output, setOutput] = useState([]);
  const inputRef = useRef(null);

  function executeCommand(command) {
    const commands = ["ls", "cat", "help", "cd", "sudo"];

    let trimmedCommand = command;

    commands.forEach(cmd => {
      if (commands.includes(command.substring(0, cmd.length))) {
        trimmedCommand = command.substring(0, cmd.length);
      }
    });

    function Makeoutput() {

      if (command === 'cat README.md') {
        return <>
        ******************************************<br />
        *** Welcome to the terminal README! &nbsp;&nbsp;&nbsp;***<br />
        *** Todo: Write content for the README ***<br />
        ******************************************<br />
        </>;
      }

      switch (trimmedCommand) {
        case "ls":
          return "build package.json public src node_modules  package-lock.json  README.md  yarn.lock";
        case "help":
          return commands.join(" ");
        case "cd": return <>Terminal is locked to current folder.<br /></>

        case "cat":
          return "Permission denied";
        case "sudo":
          return (
            <>
              [sudo] password for dreamteam: <br />{" "}
              <Typist

                onTypingDone={() => {
                  let array = [...output];
                  array.pop();
                  array.push(
                    <>
                      [sudo] password for dreamteam: <br />
                      ... <br />
                      ... <br />
                      You're not my boss! No access for you!<br />
                    </>
                  );
                  setOutput(array);
                }}
                cursor={{ show: false }}
              >
                <Typist.Delay ms={1000} />
                ...
                <Typist.Delay ms={1000} />
                <br />
                ...
                <Typist.Delay ms={1000} />
                <br />
                You're not my boss! No access for you!<br />

              </Typist>
              <br />
            </>
          );

        default:
          return "";
      }
    }

    if (commands.includes(trimmedCommand)) {
      setOutput(
        output.concat(
          <>
            <TerminalPrefix>➜ dreamteam:~$ </TerminalPrefix>
            <br />
            <Makeoutput />
            <br />
          </>
        )
      );
    } else {
      setOutput(
        output.concat(
          <>
            <TerminalPrefix>➜ dreamteam:~$ </TerminalPrefix>
            <br />
            {command}: command not found. Write help to view all available
            commands
            <br />
          </>
        )
      );
    }
  }
  const TerminalWindow = styled.div`
    width: ${props => (props.maximized ? "99%" : "95%")};
    max-height: 400px;
    max-width: ${props => (props.maximized ? "auto" : "800px")};
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  `;

  const TerminalBg = styled.div`
    background-color: #30353a;
    overflow: scroll;
    overflow-x: hidden;
    border-radius: 0 0 0.3em 0.3em;
    height: 100%;
    width: 100%;
    color: white;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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
    color: #f67280;
    text-shadow: none;
    font-weight: 600;
  `;

  const TerminalContent = styled.div`
    font-size: 1.3em;
    font-family: monospace;
    padding: 0.5em 0 0 0.5em;
  `;

  const ColoredText = styled.span`
    color: #f8b195;
  `;

  const blinkKeyframe = keyframes`
    0% {
    opacity: 0;
  }
  49% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

  const Cursor = styled.span`
    color: #fbfbfb;
    animation: ${blinkKeyframe} 1s infinite;
  `;

  return (
    <TerminalWindow
      maximized={isMaximized}
      tabIndex="0"
      onClick={() => {
        inputRef.current.focus();
      }}
    >
      <TerminalHeader>
        <span style={{ flexGrow: 1 }}>
          #dreamteam@the-internet: ~/dev/bachelor-portfolio
        </span>

        <HeaderButton
          onClick={() => {
            setMaximized(false);
          }}
        >
          &minus;
        </HeaderButton>
        <HeaderButton
          onClick={() => {
            setMaximized(true);
          }}
        >
          +
        </HeaderButton>
        <HeaderButton>&times;</HeaderButton>
      </TerminalHeader>
      <TerminalBg>
        <TerminalContent>
          <TerminalPrefix>➜ dreamteam:~$ </TerminalPrefix>Vår teknologistack består av:
          <br />
          Front-end:
          <p>
            <ColoredText>
              ['HTML', 'JavaScript', 'CSS', 'React.js']
            </ColoredText>
          </p>
          Back-end:
          <p>
            <ColoredText>
              ['C#', 'GraphQL', 'PostgreSQL', 'Redis', 'Docker']
            </ColoredText>
          </p>
          Samarbeid, verktøy og produktivitet:
          <p>
            <ColoredText>['VsCode', 'Git', 'miro', 'Slack']</ColoredText>
          </p>
          <p>
            <ColoredText>{output}</ColoredText>
          </p>
          <div style={{ paddingBottom: "1em" }}>
            <TerminalPrefix>
              ➜ dreamteam:~${" "}
              <TerminalInput
                forwardedRef={inputRef}
                executeCommand={executeCommand}
              />
              <Cursor>█</Cursor>
            </TerminalPrefix>
          </div>
        </TerminalContent>
      </TerminalBg>
    </TerminalWindow>
  );
};

export default Terminal;
