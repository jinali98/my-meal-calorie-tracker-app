import { Link } from "react-router-dom";
import styled from "styled-components";
import { color_1, color_3, color_4 } from "../../globalStyles";

export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10vh;
  padding: 10px 20px;
  background-color: ${color_1};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LogoContainer = styled.div`
  width: 10%;
`;

export const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkItem = styled(Link)`
  font-size: 20px;
  font-weight: 400;
  color: ${color_3};

  &:hover {
    color: ${color_4};
  }
`;
