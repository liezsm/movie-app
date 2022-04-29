import React from "react";
// routing
import { Link } from "react-router-dom";
// images

import RMDBLogo from "../../images/react-movie-logo.svg";

import TMDBLogo from "../../images/tmdb_logo.svg";

// import styles

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <Content>
          <Link to='/'>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
          </Link>
          <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
      </Wrapper>
    </header>
  );
};

export default Header;
