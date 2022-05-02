import React from "react";

import { Wrapper, Content, Text } from "./Hero.styles";

// proptyeps

import PropTypes from "prop-types";

const Hero = ({ image, title, text }) => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

Hero.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Hero;
