import React from "react";
import CustomButton from "../custom-button/custom-button.component";

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
          healthy recipes,collect your favourite recipes, and learn about
          calorie content of various food items.
        </LandingPara>
        <CustomButton size="large" color="secondary" variant="contained">
          Get Started
        </CustomButton>
      </ContentWrapper>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </LandingContentContainer>
  );
};

export default LandingContent;
