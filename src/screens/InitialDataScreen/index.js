import React from "react";

import { Container, ContainerButton, Content, Title, SubTitle } from "./styles";
import Button from "../../components/Button";

const InitialDataScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Title>Dados iniciais</Title>
        <SubTitle>Você começa se apresentando</SubTitle>
      </Content>
      <ContainerButton>
        <Button onPress={() => navigation.navigate("NameScreen")}>
          Vamos lá
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default InitialDataScreen;
