import React from "react";
import {
  Button,
  CardContainer,
  DetailContainer,
  ImageContainer,
  Title,
  Value,
} from "./landing-tool-card.styles";

const LandingToolCard = ({ tool: { title, value, imageUrl } }) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <DetailContainer>
        <Title>{title}</Title>
        <Value>{value}</Value>
        <Button>Meal Diary</Button>
      </DetailContainer>
    </CardContainer>
  );
};

export default LandingToolCard;
