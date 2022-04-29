import React from "react";

// style

import { ButtonStyle } from "./Button.styles";

const Button = ({ text, callback }) => {
  return (
    <ButtonStyle type='button' onClick={callback}>
      {text}
    </ButtonStyle>
  );
};

export default Button;
