import React, { useEffect } from "react";

import { Container, Title, Bar } from "./styles";

const PrepareScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("TermScreen");
    }, 2000);
  }, []);

  return (
    <Container>
      <Title>Estamos preparando tudo para começar</Title>
      <Bar />
    </Container>
  );
};

export default PrepareScreen;
