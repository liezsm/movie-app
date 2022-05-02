import React from "react";

// style
import { ButtonStyle } from "./Button.styles";

// prop types

import PropTypes from "prop-types";

const Button = ({ text, callback }) => {
  return (
    <ButtonStyle type='button' onClick={callback}>
      {text}
    </ButtonStyle>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
