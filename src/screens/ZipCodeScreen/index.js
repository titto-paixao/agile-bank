import React, { useEffect, createRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import axios from 'axios'

import Button from '../../components/Button'
import ButtonSecundaryBlue from '../../components/ButtonSecundaryBlue'

import {
  Container,
  Header,
  ContainerHeader,
  Content,
  Title,
  Footer,
  FooterText,
  ContainerBar,
  Bar,
  TextInput,
  ErrorMensegeContainer,
  ErrorMensege,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalHeader,
  ModalTitle,
  ModalSubTitle
} from "./styles";

const ZipCodeScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [erroMensseger, setErrorMensseger] = useState(false)

  useEffect(() => {
    input_ref.current._inputElement.focus();
  }, []);

  const handleSubmit = (values) => {
    axios.get(`https://viacep.com.br/ws/${values.zip_code}/json/`)
      .then((response) => {
        if(response.data.erro){
          setErrorMensseger(true)
        }else{
          setErrorMensseger(false)
          navigation.navigate("NeighborhoodScreen", {uf:response.data.uf, city:response.data.localidade, neighborhood:response.data.bairro})
        }
      });
  }

  const validation = yup.object().shape({
    zip_code: yup.string().required("Insira seu CEP").min(9, "Formato de CEP inválido")
  });

  const input_ref = createRef();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <Container>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          style="dark"
          hidden={true}
        />
        <Formik
          initialValues={{ zip_code:"" }}
          validationSchema={validation}
          onSubmit={(values) => {
            handleSubmit(values)
          }}
        >
          {(props) => (
            <>
              <ContainerHeader>
                <ContainerBar>
                  <Bar width={80} />
                </ContainerBar>
                <Header>
                  <TouchableOpacity
                    onPress={() => navigation.goBack()}
                  >
                    <Feather name="chevron-left" size={35} color="#020024" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setVisibleModal(true)} >
                    <Feather name="x" size={35} color="#020024" />
                  </TouchableOpacity>
                </Header>
              </ContainerHeader>

              <Content>
                <Title>Qual o seu CEP?</Title>

                <TextInput
                  placeholder="Seu CEP"
                  name="zip_code"
                  onChangeText={props.handleChange("zip_code")}
                  value={props.values.zip_code}
                  ref={input_ref}
                  keyboardType='number-pad'
                  type={'zip-code'}
                />
                {props.touched.zip_code && props.errors.zip_code ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> {props.errors.zip_code} </ErrorMensege>
                  </ErrorMensegeContainer>
                ) : null}
                {erroMensseger ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> CEP inválido </ErrorMensege>
                  </ErrorMensegeContainer>
                ) : null}
              </Content>
              <Footer onPress={props.handleSubmit} >
                <FooterText>Continuar</FooterText>
                <Feather name="chevron-right" size={25} color="#020024" />
              </Footer>
            </>
          )}
        </Formik>
      </Container>

      <Modal visible={visibleModal} >
        <ModalContent>
            <ModalContentContainer>
              <ModalHeader>
                <TouchableOpacity onPress={() => setVisibleModal(false)} >
                  <Feather name="chevron-down" size={30} color="#020024" />
                </TouchableOpacity>
              </ModalHeader>

              <ModalTitle>Você tem certeza que deseja cancelar o processo de abertura de conta?</ModalTitle>
              <ModalSubTitle>Você pode voltar e finalizar o processo quando quiser.</ModalSubTitle>

              <Button onPress={() => navigation.navigate("OnboardingScreen")} >Sim, cancelar</Button>
              <ButtonSecundaryBlue onPress={() => setVisibleModal(false)} >Continuar abrindo conta</ButtonSecundaryBlue>

            </ModalContentContainer>
        </ModalContent>
      </Modal>

    </KeyboardAvoidingView>
  );
};

export default ZipCodeScreen;
