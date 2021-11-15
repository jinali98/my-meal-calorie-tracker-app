import { Badge } from "@material-ui/core";
import React from "react";
import useScreenSize from "../../effects/useScreenSize";
import MobileNav from "../mobile-nav/mobile-nav.component";

import NavLinks from "../nav-links/nav-links.component";

import { HeaderContainer } from "./header.styles";

const Header = () => {
  const isScreenSmall = useScreenSize();
  return (
    <>
      {isScreenSmall ? (
        <MobileNav />
      ) : (
        <HeaderContainer>
          <NavLinks />
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
