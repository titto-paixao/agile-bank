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
  ContentContainer
} from './styles';

const TermScreen = ({navigation}) => {
  
  return(
    <Container>
      <StatusBar translucent={true} backgroundColor={"transparent"} style="dark" />
      <Content>
        <Line />
        <ContentContainer>
          <Feather name="lock" size={35} color="#020024" />
          <Title>Antes de começar precisamos que você aceite os termos e condições abaixo.</Title>
          <SubTitle>Ler termos e condições</SubTitle>
        </ContentContainer>
      </Content>
      <ContainerButton>
        <View style={{width:"50%"}} >
          <ButtonSecundaryBlue onPress={() => navigation.navigate("OnboardingScreen")} >Não aceito</ButtonSecundaryBlue>
        </View>
        <View style={{width:"50%"}} >
          <Button onPress={() => navigation.navigate("InitialDataScreen")} >Eu aceito</Button>
        </View>
      </ContainerButton>
    </Container>
  );
};

export default TermScreen;