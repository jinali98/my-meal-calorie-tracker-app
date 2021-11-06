import styled from "styled-components";
import { color_1 } from "../../globalStyles";

export const LandingToolsContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;
`;

export const LandingToolHeading = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 900;
  padding: 10px;
  letter-spacing: 2px;
  color: ${color_1};
`;

export const ToolTypesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  text-align: center;
`;
