import React from "react";
import styled from "styled-components";

const ProjectCard = props => {
  const Container = styled.div`
    display: flex;
    @media (max-width: 950px) {
      flex-direction: column;
      width: 90%;
    }
  `;

  const Card = styled.div`
    width: 33%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 1em;
    padding: 1em;
    background-color: rgba(251, 251, 251, 0.7);
    display: flex;
    flex-direction: column;
    @media (max-width: 950px) {
      width: 100%;
      flex-direction: column;
    }
  `;

  const Img = styled.img`
    padding: 0 1em 0 1em;
    width: 230px;
    height: 230px;
    object-fit: cover;
    object-position: 0 0;
    @media (max-width: 950px) {
      margin: 0 auto;
    }
  `;

  const TextContainer = styled.div`
    margin: 0;
    padding: 1em 0 0 1em;
  `;

  const H3 = styled.h3`
    margin: 0;
    font-family: "Source Sans Pro", sans-serif;
    color: #333;
  `;

  return (
      <Container>
        {props.projects.map(project => {
          return (
            <Card key={project.alt}>
              <a href={project.img} style={{margin: '0 auto'}}>
                <Img src={project.img} alt={project.alt} />
              </a>
              <TextContainer>
                <H3>{project.title}</H3>
                <p>{project.text}</p>
              </TextContainer>
            </Card>
          );
        })}
      </Container>
  );
};

export default ProjectCard;
