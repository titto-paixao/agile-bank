import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

export const Container = styled.View`
	flex:1;
`;
export const Header = styled.View`
	width:100%;
	flex-direction:row;
	padding-left:20px;
	padding-right:20px;
	height:56px;
	align-items:center;
	justify-content:space-between;
`;
export const ContainerHeader = styled.View`
	width:100%;
	position:absolute;
`;

export const ContainerBar = styled.View`
	width:100%;
	height:10px;
	background-color:#4CF4;
`;

export const Bar = styled.View`
	width:${props => !!props.width ? props.width : 0 }%;
	height:10px;
	background-color:#4FC3F7;
`;

export const Content = styled.View`
	flex:1;
	align-items:center;
	justify-content:center;
`;

export const Title = styled.Text`
	font-size:28px;
	width:80%;
	text-align:center;
	font-family:Roboto_500Medium;
`;
export const SubTitle = styled.Text`
	font-size:18px;
	width:90%;
	text-align:center;
	font-family:Roboto_400Regular;
`;
export const Footer = styled.TouchableOpacity`
	width:100%;
	flex-direction:row;
	padding-left:20px;
	padding-right:20px;
	height:56px;
	align-items:center;
	justify-content:center;
	background-color:#4FC3F7;
`;
export const FooterText = styled.Text`
	font-size:18px;
	width:90%;
	font-family:Roboto_500Medium;
	color:#020024;
`;

export const TextInput = styled.TextInput`
	width:80%;
	border-bottom-width:2px;
	border-bottom-color:#CCC;
	text-align:center;
	font-size:22px;
	padding:10px;
`;

export const ErrorMensegeContainer = styled(Animatable.View).attrs({
  animation:"slideInLeft"
})`
	width:90%;
	align-items:center;
`;
export const ErrorMensege = styled.Text`
	text-align:center;
	font-size:18px;
	font-family:Roboto_400Regular;
	color:red;
`;

export const Modal = styled.Modal.attrs({
	transparent:true,
    statusBarTranslucent:true
})``;

export const ModalContent = styled.View`
	flex:1;
	background-color:#0005;
	justify-content:flex-end;
`;

export const ModalContentContainer = styled.View`
	flex:.7;
	background-color:#FFF;
	padding:20px;
	border-top-left-radius:40px;
	border-top-right-radius:40px;
	align-items:center;
	justify-content:center;
`;

export const ModalHeader = styled.View`
	width:100%;
	align-items:center;
	position:absolute;
	top:20px;
	align-self: center;
`;

export const ModalTitle = styled.Text`
	font-size:28px;
	width:90%;
	font-family:Roboto_500Medium;
`;

export const ModalSubTitle = styled.Text`
	font-size:18px;
	width:90%;
	font-family:Roboto_400Regular;
`;