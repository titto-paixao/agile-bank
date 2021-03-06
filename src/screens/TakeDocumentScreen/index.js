import React,  {useState, useEffect} from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import {Feather, FontAwesome} from "@expo/vector-icons"
import { StatusBar } from "expo-status-bar";
import { Camera } from 'expo-camera'

import self from '../../assets/self.png'

import Button from '../../components/Button'
import ButtonSecundaryBlue from '../../components/ButtonSecundaryBlue'

import {
	Container,
	Title,
	Content,
	Line,
	ContentContainer,
	SubTitle,
	ContainerHeader,
	Header,
	ContainerBar,
	Bar,
	Modal,
  ModalContent,
  ModalContentContainer,
  ModalHeader,
  ModalTitle,
	ModalSubTitle,
	Footer,
	FooterText
} from './styles';

const TakeDocumentScreen = ({navigation}) => {
	const [visibleModal, setVisibleModal] = useState(false)
	const [camera, setCamera] = useState(null);
	const [visibleModalCamera, setVisibleModalCamera] = useState(false)
	const [hasPermission, setHasPermission] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);
  
  const [indexPhoto, setIndexPhoto] = useState(0)
	
	const [image, setImage] = useState(null)

	useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
	}, []);
	
	if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>Sem acesso a câmera</Text>;
  }

  return(
		<Container>
			<StatusBar translucent={true} backgroundColor={"transparent"} style="dark" />
			<ContainerHeader>
				<ContainerBar>
					<Bar width={70} />
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
        <Line />
        <ContentContainer>
					<Title>Agora vamos cadastrar o seu documento</Title>
					<FontAwesome name="id-card-o" size={100} color="#4f4f4f" />
          <SubTitle>Tire uma foto nítida em</SubTitle>
          <SubTitle>um local iluminado</SubTitle>
        </ContentContainer>
      </Content>

			<Footer onPress={() => image === null ? setVisibleModalCamera(true) : navigation.navigate("InitialAdressScreen")} >
				<FooterText>{image === null ? "Tirar foto" : "Continuar"}</FooterText>
				<Feather name={image === null ? "camera" : "chevron-right"} size={25} color="#020024" />
			</Footer>

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

			<Modal
				visible={visibleModalCamera}
			>
				<Camera style={{flex:1}} type={type} ref={(ref) => setCamera(ref)} >
          <View
            style={{
              flex:1,
              alignItems:"center",
              justifyContent:"center"
            }}
          >
            <View
              style={{
                position: "absolute",
                top: 20,
                flex: 1,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                width:"80%"
              }}
            >
              <Text
                style={{
                  color:"#FFF",
                  fontSize:18,
                  fontFamily:"Roboto_500Medium"
                }}
              >
                {indexPhoto === 0 ? "Capture a parte da frente do seu RG" : "Capture a parte traseira do seu RG"}
              </Text>
            </View>

            <View
              style={{
                backgroundColor:"transparent",
                borderWidth:1,
                borderColor:"#fff",
                width:"70%",
                height:"65%"
              }}
            >

            </View>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 20,
                flex: 1,
                flexDirection: "row",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#FFF",
                padding: 20,
                borderRadius: 100,
              }}
              onPress={async () => {
                let photo = await camera.takePictureAsync({ base64: false });
                setImage(photo)
                if(indexPhoto === 0){
                  setIndexPhoto(1)
                }else{
                  setVisibleModalCamera(false)
                }
              }}
            >
              <Feather name="camera" size={40} />
            </TouchableOpacity>
          </View>
        </Camera>
			</Modal>

		</Container>
	);
}

export default TakeDocumentScreen;