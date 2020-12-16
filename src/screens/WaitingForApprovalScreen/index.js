import React from "react";
import {View} from 'react-native'
import {Feather} from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar";

import Button from '../../components/Button'
import ButtonSecundaryBlue from '../../components/ButtonSecundaryBlue'

import {
  Container,
  Title,
  SubTitle,
  Content,
  ContainerButton,
  Line,
  ContentContainer,
  Text
} from './styles';

const WaitingForApprovalScreen = ({navigation}) => {
  return(
    <Container>
      <StatusBar translucent={true} backgroundColor={"transparent"} style="dark" />
      <Content>
        <Line />
        <ContentContainer>
          <Feather name="clock" size={35} color="#020024" />
          <Title>Aguardando aprovação</Title>
          <SubTitle>Estamos no processo de análise</SubTitle>
        </ContentContainer>
      </Content>

      <Text>Em breve você terá novidades sobre a sua Agili conta</Text>
      
      <ContainerButton>
        <Button onPress={() => navigation.navigate("OnboardingScreen")} >Ok</Button>
      </ContainerButton>
    </Container>
  );
};

export default WaitingForApprovalScreen;