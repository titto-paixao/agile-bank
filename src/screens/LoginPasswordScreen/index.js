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
  ErrorMensege
} from "./styles";

const LoginPasswordScreen = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(false)
  const [secureText, setSecureText] = useState(true)
  
  useEffect(() => {
    input_ref.current.focus();
  }, []);

  const validation = yup.object().shape({
    password: yup.string().required("Insira sua senha")
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
            navigation.navigate("OnboardingScreen");
          }}
        >
          {(props) => (
            <>
              <ContainerHeader>
                <ContainerBar>
                  <Bar width={100} />
                </ContainerBar>
                <Header>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("TermScreen")}
                  >
                    <Feather name="chevron-left" size={35} color="#020024" />
                  </TouchableOpacity>
                  <TouchableOpacity >
                    <Feather name="x" size={.1} color="#020024" />
                  </TouchableOpacity>
                </Header>
              </ContainerHeader>

              <Content>
                <Title>Digite sua</Title>
                <Title>senha</Title>

                <SubTitle>Esqueci minha senha</SubTitle>
                
                <ContainerTextInput>
                  <TextInput
                    placeholder="Sua senha de acesso"
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
              </Content>
              <Footer onPress={props.handleSubmit}>
                <FooterText>Entrar</FooterText>
                <Feather name="log-in" size={25} color="#020024" />
              </Footer>
            </>
          )}
        </Formik>
      </Container>

    </KeyboardAvoidingView>
  );
};

export default LoginPasswordScreen;
