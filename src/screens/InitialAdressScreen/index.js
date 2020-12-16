import React from "react";

import { Container, ContainerButton, Content, Title, SubTitle } from "./styles";
import Button from "../../components/Button";

const InitialAdressScreen = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Title>Endereço</Title>
        <SubTitle>Insira um endereço para entregarmos o seu cartão</SubTitle>
      </Content>
      <ContainerButton>
        <Button onPress={() => navigation.navigate("ZipCodeScreen")}>
          Vamos lá
        </Button>
      </ContainerButton>
    </Container>
  );
};

export default InitialAdressScreen;
