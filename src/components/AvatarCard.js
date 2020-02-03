import React from "react";
import styled from "styled-components";

const AvatarCard = ({ src, name, children, email, linkedin }) => {
  const Card = styled.div`
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin-bottom: 1em;
    padding: 1em;
    margin: 1em;
    background-color: rgba(251, 251, 251, 0.7);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 950px) {
      width: 20%;
    }
  `;

  const Avatar = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #eaeaea;
    align-self: center;
  `;

  const CardHeader = styled.span`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const Name = styled.span`
    margin: 10px 0 10px 10px;
    color: #333;
    font-size: 1.5em;
    font-weight: bold;
    font-family: "Source Sans Pro", sans-serif;
    //text-align: center;
  `;

  const ContentText = styled.p`
    color: #333;
    margin: 10px 0 10px 10px;
    font-family: "Source Sans Pro", sans-serif;
    max-width: 45ch;
    line-height: 1.6;
    flex-grow: 1;
  `;

  const Icon = styled.img`
    height: 1em;
    width: 1em;
    margin: 0 2em 0 2em;
  `;

  return (
    <Card tabIndex="0">
      <CardHeader>
        <Avatar src={src} alt={name} />
        <Name>{name}</Name>
      </CardHeader>
      <ContentText>{children}</ContentText>
      <div>
        <a href={"mailto:" + email}>
          <Icon src={require("../img/email-outline.png")} alt="Email" />
        </a>
        
        {linkedin && <a href={linkedin}>
          <Icon src={require("../img/linkedin-outline.png")} alt="LinkedIn" />
        </a>}
      </div>
    </Card>
  );
};

export default AvatarCard;
