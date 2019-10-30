import React from "react";
import styled from "styled-components";

const AvatarCard = ({ src, name, children }) => {
  const Avatar = styled.img`
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 50%;
    border: 2px solid #eaeaea;
  `;

  const Card = styled.div`
    width: 50%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 950px) {
        width: 33%;
    }
  `;

  const Name = styled.span`
    margin: 10px 0 10px 10px;
    color: #333;
    font-size: 1.5em;
    font-weight: bold;
    font-family: monospace;
    text-align: center;
  `;

  const ContentText = styled.p`
    width: 85%;
    margin: 10px 0 10px 10px;
    font-family: monospace;
    text-align: center;
    line-height: 1.6;
  `;

  return (
    <Card>
      <Avatar src={src} alt={name} />
      <Name>{name}</Name>
      <ContentText>{children}</ContentText>
    </Card>
  );
};

export default AvatarCard;
