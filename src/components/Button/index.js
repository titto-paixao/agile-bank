import React from "react";
import { Container, ButtonText } from "./styles";

const Button = ({ children, color, ...rest }) => {
  return (
    <Container {...rest} color={color}>
      <ButtonText>{children}</ButtonText>
    </Container>
  );
};

export default Button;