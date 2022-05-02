import React from "react";
// style
import { Wrapper, Content } from "./Movies.styles";

// props types

import PropTypes from "prop-types";

const Movies = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children} </Content>
    </Wrapper>
  );
};

Movies.propTypes = {
  header: PropTypes.string,
};

export default Movies;
