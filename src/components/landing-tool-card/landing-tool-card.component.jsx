import React from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import {
  Button,
  CardContainer,
  DetailContainer,
  ImageContainer,
  Title,
  Value,
} from "./landing-tool-card.styles";

const LandingToolCard = ({
  tool: { title, value, imageUrl, button, url },
  history,
}) => {
  return (
    <CardContainer>
      <ImageContainer style={{ backgroundImage: `url(${imageUrl})` }} />
      <DetailContainer>
        <Title>{title}</Title>
        <Value>{value}</Value>
        <Button onClick={() => history.push(url)}>{button}</Button>
      </DetailContainer>
    </CardContainer>
  );
};

export default withRouter(LandingToolCard);
