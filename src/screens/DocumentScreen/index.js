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

const DocumentScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false)

  useEffect(() => {
    input_ref.current._inputElement.focus();
  }, []);

  const validation = yup.object().shape({
    document: yup.string().required("Insira seu CPF").min(14, "Formato de CPF inválido")
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
          initialValues={{ document:"" }}
          validationSchema={validation}
          onSubmit={(values) => {
            navigation.navigate("DateOfBirthScreen")
          }}
        >
          {(props) => (
            <>
              <ContainerHeader>
                <ContainerBar>
                  <Bar width={20} />
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
                <Title>Agora,</Title>
                <Title>digite seu CPF</Title>

                <TextInput
                  placeholder="Seu CPF"
                  name="document"
                  onChangeText={props.handleChange("document")}
                  value={props.values.document}
                  ref={input_ref}
                  keyboardType='number-pad'
                  type={"cpf"}
                />
                {props.touched.document && props.errors.document ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> {props.errors.document} </ErrorMensege>
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

export default DocumentScreen;
