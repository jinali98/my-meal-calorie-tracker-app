import React from "react";

import {
  ContentWrapper,
  Image,
  ImageContainer,
  LandingContentContainer,
  LandingHeading,
  LandingPara,
} from "./landing-content.styles";

const LandingContent = () => {
  return (
    <LandingContentContainer>
      <ContentWrapper>
        <LandingHeading>Fitness starts with what you eat.</LandingHeading>
        <LandingPara>
          Take control of your goals. Track your daily calorie intake, find
          healthy receipes,collect your favourite receipes, and learn about
          calorie content of various food items.
        </LandingPara>
        <button>Get Started</button>
      </ContentWrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </LandingContentContainer>
  );
};

export default LandingContent;
