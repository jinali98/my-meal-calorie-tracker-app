import styled from "styled-components";
import { ReactComponent as LandingImage } from "../../assets/image_1.svg";
import { color_1, color_2, color_5 } from "../../globalStyles";

export const LandingContentContainer = styled.div`
  width: 80vw;
  height: 80vh;
  margin: 1rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  width: 50%;
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;
export const Image = styled(LandingImage)`
  width: 100%;
  height: 100%;
`;
export const LandingHeading = styled.h1`
  font-size: 60px;
  letter-spacing: 2px;
  font-weight: 900;
  color: ${color_1};
  margin-bottom: 1rem;
`;
export const LandingPara = styled.p`
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 300;
  color: ${color_5};
  margin-bottom: 1rem;
`;
