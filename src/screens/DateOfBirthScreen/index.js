import React, { useEffect, createRef, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

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

const DateOfBirthScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(() => {
    input_ref.current._inputElement.focus();
  }, []);

  const validation = yup.object().shape({
    date_of_birth: yup.string().required("Insira sua data de nascimento"),
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
          initialValues={{ date_of_birth: "" }}
          validationSchema={validation}
          onSubmit={(values) => {
            navigation.navigate("EmailScreen")
          }}
        >
          {(props) => (
            <>
              <ContainerHeader>
                <ContainerBar>
                  <Bar width={30} />
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
                <Title>Qual sua data</Title>
                <Title>de nascimento?</Title>

                <TextInput
                  placeholder="Sua data de nascimento"
                  name="date_of_birth"
                  onChangeText={props.handleChange("date_of_birth")}
                  value={props.values.date_of_birth}
                  ref={input_ref}
                  keyboardType="number-pad"
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                />
                {props.touched.date_of_birth && props.errors.date_of_birth ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> {props.errors.date_of_birth} </ErrorMensege>
                  </ErrorMensegeContainer>
                ) : null}
              </Content>
              <Footer onPress={props.handleSubmit}>
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

export default DateOfBirthScreen;
