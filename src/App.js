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
              <b>Vi er</b> en gruppe som studerer Anvendt datateknologi på
              OsloMet. Vårsemesteret 2020 skal vi lage et bachelorprosjekt og vi
              er på utkikk etter en organisasjon som kan være vår oppdragsgiver.
              Vi ønsker derfor å komme i kontakt med bedrifter eller andre som
              har datatekniske problemer, oppgaver eller prosjekter som vil
              passe som et studentprosjekt.
            </>
          }
          persons={[
            {
              img: require("./img/odin.jpg"),
              name: "Odin Andberg",
              email: "s320926@oslomet.no",
              linkedin: "https://www.linkedin.com/in/odin-andberg-b99969196",
              text:
                "JavaScript-entusiast. Spiller gitar og kontrabass på fritiden."
            },
            {
              img: require("./img/magnus.jpg"),
              name: "Magnus Unstad",
              email: "s235764@oslomet.no",
              linkedin:
                "https://www.linkedin.com/in/magnus-kristoffer-unstad-960510193/",
              text: "Gruppens nordnorske alibi. Å forstå kundens behov er sannsynligvis den viktigste og vanskeligste delen av jobben vi gjør."
            },
            {
              img: require("./img/stian.png"),
              name: "Stian Wingaard",
              email: "s326323@oslomet.no",
              linkedin: "https://www.linkedin.com/in/stian-wingaard-2b7ab5182/",
              text: "Jeg er lidenskapelig opptatt av gode brukeroppplevelser og smarte systemer."
            },
            {
              img: require("./img/unknown.jpg"),
              name: "Marius Haugsand",
              email: "s326277@oslomet.no",
              linkedin: false,
              text:
                "Har den raskeste 240en på denne siden av svenskegrensa."
            },
            {
              img: require("./img/daniel.jpg"),
              name: "Daniel Sørenes",
              email: "s326286@oslomet.no",
              linkedin:
                "https://www.linkedin.com/in/daniel-s%C3%B8renes-949840147/",
              text:
              "Foretrekker back-end og filter kaffe. Vært 6 måneder på utveksling på QUT i Australia."
            }
          ]}
        />
        <Center>
          <Terminal />
        </Center>
      </AboutUsSection>
      <ProjectsSection>
        <H2>Våre prosjekter</H2>
        <ProjectsText>
          Vi har jobbet med mange prosjekter gjennom studietiden. Her er et lite
          utvalg av våre praktiske prosjekter. I tillegg til disse har vi jobbet
          sammen om en rekke akademiske prosjekter.
        </ProjectsText>
        <ProjectCard
          projects={[
            {
              img: require("./img/omsorg_web.png"),
              alt: "Skjermskudd av Omsorg webside",
              title: "Omsorg Webside",
              text:
                "Dette prosjektet er en webside som presenterer en fiktiv app, Omsorg, til bruk i helsesektoren. Prosjektet ble utført som en del av faget Webprosjekt."
            },
            {
              img: require("./img/omsorg_app.png"),
              alt: "Skjermskudd av Omsorg app",
              title: "Omsorg - App prototype",
              text:
                "Vi skapte en prototype av Omsorg-appen i Adobe XD. Prosjektet ble utført som en del av faget Prototyping."
            },
            {
              img: require("./img/fis.png"),
              alt: "Skjermskudd av Forsikring i System",
              title: "Forsikring i System",
              text:
                "Forsikring i System er et skrivebordsprogram utviklet i Java, som fungerer som et forsikringsregister for et fiktivt forsikringsselskap. Prosjektet ble utført som del av faget programutvikling."
            }
          ]}
        />
      </ProjectsSection>
    </div>
  );
}

export default App;
