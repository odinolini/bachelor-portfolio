import React from "react";
import "./App.css";
import styled from "styled-components";
import AboutUs from "./components/AboutUs";
import Terminal from "./components/Terminal";
import ProjectCard from "./components/ProjectCard";

function App() {
  const Header = styled.header`
    border-bottom: solid 10px #f67280;
  `;

  const H1 = styled.h1`
    padding-left: 12.5%;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 3em;
    color: #333;
    color: rgba(251, 251, 251, 0.9);
    @media (max-width: 950px) {
      font-size: 2em;
      padding-left: 1em;
    }
  `;

  const H2 = styled.h2`
    padding-left: 4%;
    font-family: "Source Sans Pro", sans-serif;
    margin-bottom: 0;
    font-size: 3em;
    color: rgba(251, 251, 251, 0.9);
    @media (max-width: 950px) {
      font-size: 2em;
      padding-left: %;
    }
  `;

  const AboutUsSection = styled.section`
    background-color: #f8b195;
    border-bottom: solid 10px #f67280;
  `;

  const ProjectsSection = styled.section`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 950px) {
      width: 100%;
    }
  `;

  const ProjectsText = styled.p`
    font-family: "Source Sans Pro", sans-serif;
    padding-top: 40px;
    margin: 0 20px 40px 40px;
    font-size: 1.6em;
    color: #fbfbfb;
    line-height: 1.6;
    max-width: 90ch;
  `;

  const Center = styled.span`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 2em;
    margin-bottom: 4em;
  `;

  return (
    <div>
      <Header>
        <H1>#Bachelorgruppe 2020</H1>
      </Header>

      <AboutUsSection>
        <AboutUs
          aboutUsText={
            <>
              <h2>Gruppe 21 - Salg eller utleie – En webapplikasjon for Nabobil.no</h2>
              <h3>Oppgavebeskrivelse</h3>
              <p>
                Prosjektoppgaven går ut på at vi skal utvikle en
                bilpriskalkulator for Nabobil. Løsningen skal bli en
                webapplikasjon hvor potensielle utleiere kan få vite hvor mye de
                kan tjene på salg av bilen i forhold til utleie av bil gjennom
                interaktive visualiseringer og integrasjon med sosiale medier.
              </p>
            </>
          }
          persons={[
            {
              img: require("./img/odin.jpg"),
              name: "Odin Andberg",
              email: "s320926@oslomet.no",
              linkedin: "https://www.linkedin.com/in/odin-andberg-b99969196",
              text: "Front-end utvikler & Universell utforming"
            },
            {
              img: require("./img/magnus.jpg"),
              name: "Magnus Unstad",
              email: "s235764@oslomet.no",
              linkedin:
                "https://www.linkedin.com/in/magnus-kristoffer-unstad-960510193/",
              text: "Teamleder & Interaksjonsdesign"
            },
            {
              img: require("./img/stian.png"),
              name: "Stian Wingaard",
              email: "s326323@oslomet.no",
              linkedin: "https://www.linkedin.com/in/stian-wingaard-2b7ab5182/",
              text: "Backend-utvikler & Sikkerhet"
            },
            {
              img: require("./img/daniel.jpg"),
              name: "Daniel Sørenes",
              email: "s326286@oslomet.no",
              linkedin:
                "https://www.linkedin.com/in/daniel-s%C3%B8renes-949840147/",
              text: "Backend-utvikler & Skytjenester"
            }
          ]}
        />
        <Center>
          <Terminal />
        </Center>
      </AboutUsSection>
      <ProjectsSection>
        <H2>Dokumentasjon</H2>
        <ProjectCard
          projects={[
            {
              img: require("./img/PDF.svg"),
              alt: "Statusrapport",
              title: "Statusrapport",
              text: "Statusrapport skrevet før prosjektstart",
              src: "./docs/Statusrapport.pdf"
            },
            {
              img: require("./img/PDF.svg"),
              alt: "Prosjektskisse",
              title: "Prosjektskisse",
              text: "beskrivelse av prosjektet og teknologiene vi benytter",
              src: "./docs/Prosjektskisse.pdf"
            },
            {
              img: require("./img/PDF.svg"),
              alt: "Forprosjektrapport",
              title: "Forprosjektrapport",
              text:
                "Inneholder bl.a. kravspesifikasjon, brukerhistorier, mål & rammebetingelser",
              src: "./docs/Forprosjektrapport.pdf"
            } ,
            {
              img: require("./img/PDF.svg"),
              alt: "Sluttrapport",
              title: "Sluttrapport",
              text: "./docs/Sluttrapport.pdf"
            }
          ]}
        />
      </ProjectsSection>
    </div>
  );
}

export default App;
