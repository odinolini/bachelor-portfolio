import React from "react";
import styled from "styled-components";
import AvatarCard from "./AvatarCard";

const AboutUs = props => {
  const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  const AboutUsText = styled.p`
    font-family: "Source Sans Pro", sans-serif;
    padding-top: 40px;
    padding-bottom: 40px;
    margin: 0 1.5em 0 1.5em;
    font-size: 1.6em;
    color: #333;
    line-height: 1.6;
    max-width: 90ch;
  `;

  const WidthContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 950px) {
      width: 100%;
    }
  `;

  return (
    <>
      <WidthContainer>
        <AboutUsText>{props.aboutUsText}</AboutUsText>
      </WidthContainer>
      <WidthContainer>
        <Container>
          {props.persons.map(person => {
            return (
              <AvatarCard
                src={person.img}
                name={person.name}
                key={person.name}
                email={person.email}
                linkedin={person.linkedin}
              >
                {person.text}
              </AvatarCard>
            );
          })}
        </Container>
      </WidthContainer>
    </>
  );
};

export default AboutUs;
