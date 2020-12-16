import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  width: 80%;
  flex: 0.8;
`;

export const ContentContainer = styled.View`
  background-color:#FFF;
	justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Line = styled.View`
	background-color:#4fc3f7;
	width:160%;
	height:4px;
	transform:rotate(130deg);
	position:absolute;
`;

export const ContainerButton = styled.View`
  align-items: center;
  justify-content: space-between;
  width: 90%;
  flex: 0.2;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: #020024;
  margin-top: 20px;
  font-size: 24px;
  font-family: Roboto_500Medium;
  width: 80%;
  text-align: center;
`;

export const SubTitle = styled.Text`
  color: #4fc3f7;
  font-size: 18px;
  font-family: Roboto_500Medium;
  text-align: center;
  border-bottom-width: 2px;
  border-bottom-color: #4fc3f7;
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
	top:0;
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

export const Footer = styled.TouchableOpacity`
	width:100%;
	flex-direction:row;
	padding-left:20px;
	padding-right:20px;
	height:56px;
	align-items:center;
	justify-content:space-between;
	background-color:#4FC3F7;
	position:absolute;
	bottom:0;
`;
export const FooterText = styled.Text`
	font-size:18px;
	width:90%;
	font-family:Roboto_500Medium;
	color:#020024;
`;