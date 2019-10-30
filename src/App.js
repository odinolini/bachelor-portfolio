import React from "react";
import "./App.css";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import Terminal from "./components/Terminal";

function App() {
  const Header = styled.header``;

  const H1 = styled.h1`
    font-family: monospace;
    font-size: 50px;
    color: #333;
    margin-left: 40px;
  `;

  const AboutUsSection = styled.section`
    background-color: #ffd500;
  `;

  const Center = styled.span`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  return (
    <div className="App">
      <Header>
        <H1>#DreamTeam</H1>
      </Header>
      <AboutUsSection>
        <AboutUs />
        <Center>
          <Terminal />
        </Center>
      </AboutUsSection>
    </div>
  );
}

export default App;
