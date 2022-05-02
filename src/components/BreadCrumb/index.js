import React from "react";
// routing
import { Link } from "react-router-dom";
// styles
import { Wrapper, Content } from "./BreadCrumb.styles";

// props types

import PropTypes from "prop-types";

const MovieBreadCrumb = ({ movieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{movieTitle}</span>
      </Content>
    </Wrapper>
  );
};

MovieBreadCrumb.propTypes = {
  movieTitle: PropTypes.string,
};

export default MovieBreadCrumb;
