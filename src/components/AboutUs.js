import React from "react";
import styled from "styled-components";
import AvatarCard from "./AvatarCard";

const AboutUs = props => {
  const H2 = styled.h2`
    font-family: monospace;
    font-size: 2em;
    color: #333;
    margin-left: 40px;
    padding-top: 1em;
  `;

  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const AboutUsText = styled.p`
    font-family: monospace;
    padding-top: 40px;
    margin: 40px 20px 40px 40px;
    font-size: 2em;
    color: #333;
    line-height: 1.6;
  `;


  return (
    <>
      <AboutUsText>
          <b>Vi er</b> en gruppe som har jobbet sammen gjennom hele studieløpet, i fag som Prototyping, Webprosjekt, Webprogrammering, Databaser, Informasjonsarkitektur, Systemutvikling mm.
      </AboutUsText>
      <Container>
        <AvatarCard src={require("../img/odin.jpg")} name="Odin Andberg">
          Lorem ipsum brukes som fylltekst i grafisk design og sideombrekking
          for å demonstrere det grafiske utseende før den endelige teksten er
          klargjort.
        </AvatarCard>
        <AvatarCard
          src={require("../img/magnus.jpg")}
          name="Magnus Kristoffer Unstad"
        >
          Lorem ipsum er opprinnelig et lettere redigert utdrag fra De finibus
          bonorum et malorum (Om det høyeste mål for godt og ondt) av Cicero.
        </AvatarCard>
        <AvatarCard src={require("../img/stian.jpg")} name="Stian Wingaard">
          Opprinnelig begynte avsnittet: Neque porro quisquam est qui dolorem
          ipsum quia dolor sit amet, consectetur, adipisci velit
        </AvatarCard>
        <AvatarCard
          src={require("../img/unknown.jpg")}
          name="Marius Andre Haugsand"
        >
          «Ingen liker smerte for smertens skyld, eller søker den og ønsker den,
          bare fordi den er smerte…»
        </AvatarCard>
        <AvatarCard src={require("../img/unknown.jpg")} name="Daniel Sørenes">
          Denne bruken betegnes som greeking. Lipsum er også hyppig benyttet for
          å demonstrere skriftsnitt innen typografien.
        </AvatarCard>
      </Container>
    </>
  );
};

export default AboutUs;
