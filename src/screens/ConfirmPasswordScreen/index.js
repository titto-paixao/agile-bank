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
  SubTitle,
  Footer,
  FooterText,
  ContainerBar,
  Bar,
  TextInput,
  ContainerTextInput,
  ErrorMensegeContainer,
  ErrorMensege,
  Modal,
  ModalContent,
  ModalContentContainer,
  ModalHeader,
  ModalTitle,
  ModalSubTitle
} from "./styles";

const ConfirmPasswordScreen = ({ navigation, route }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [secureText, setSecureText] = useState(true)
  const [errorMensseger, setErrorMenseger] = useState(false)
  const [password] = useState(route.params.password)
  
  useEffect(() => {
    input_ref.current.focus();
  }, []);

  const validation = yup.object().shape({
    password: yup.string().required("Confirme sua senha"),
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
          initialValues={{ password: "" }}
          validationSchema={validation}
          onSubmit={(values) => {
            if(values.password !== password){
              setErrorMenseger(true)
              setTimeout(() => {
                setErrorMenseger(false)
              }, 3000)
            }else{
              navigation.navigate("WaitingForApprovalScreen");
            }
          }}
        >
          {(props) => (
            <>
              <ContainerHeader>
                <ContainerBar>
                  <Bar width={90} />
                </ContainerBar>
                <Header>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TermScreen")}
                  >
                    <Feather name="chevron-left" size={35} color="#020024" />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setVisibleModal(true)} >
                    <Feather name="x" size={35} color="#020024" />
                  </TouchableOpacity>
                </Header>
              </ContainerHeader>

              <Content>
                <Title>Confirme sua</Title>
                <Title>senha de acesso</Title>
                
                <ContainerTextInput>
                  <TextInput
                    placeholder="Confirmar senha"
                    name="password"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    secureTextEntry={secureText}
                    ref={input_ref}
                  />
                  <TouchableOpacity onPress={() => setSecureText(!secureText)} style={{position:"absolute", right:16, top:15}} >
                    <Feather name={secureText ? "eye" : "eye-off"} size={25} color="#4f4f4f" />
                  </TouchableOpacity>
                </ContainerTextInput>
                {props.touched.password && props.errors.password ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> {props.errors.password} </ErrorMensege>
                  </ErrorMensegeContainer>
                ) : null}
                {!props.errors.password && errorMensseger ? (
                  <ErrorMensegeContainer>
                    <ErrorMensege> As senhas não correspondem </ErrorMensege>
                  </ErrorMensegeContainer>
                ) : null}
              </Content>
              <Footer onPress={props.handleSubmit}>
                <FooterText>Finalizar</FooterText>
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

export default ConfirmPasswordScreen;
