import React from "react";
import { Wrapper, Content } from "./Movies.styles";

const Movies = ({ header, children }) => {
  return (
    <Wrapper>
      <h1>{header}</h1>
      <Content>{children} </Content>
    </Wrapper>
  );
};

export default Movies;
