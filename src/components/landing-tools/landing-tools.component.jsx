import React from "react";
import { TOOL_TYPES } from "../../constants";
import LandingToolCard from "../landing-tool-card/landing-tool-card.component";
import {
  LandingToolsContainer,
  ToolTypesContainer,
} from "./landing-tool.styles";

const LandingTools = () => {
  return (
    <LandingToolsContainer>
      <h1>Food Tools</h1>
      <ToolTypesContainer>
        {TOOL_TYPES.map((each) => (
          <LandingToolCard key={each.title} tool={each} />
        ))}
      </ToolTypesContainer>
    </LandingToolsContainer>
  );
};

export default LandingTools;
