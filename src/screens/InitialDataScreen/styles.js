import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable";

export const Container = styled(LinearGradient).attrs({
  colors: ["#00d4ff", "#090979"],
  start:{ x: 0, y: 0 },
  end:{ x: 1, y: 1 }
})`
  flex:1;
	justify-content:space-between;
	align-items:center;
`;

export const ContainerButton = styled(Animatable.View).attrs({
  animation:"slideInUp"
})`
  flex:.2;
  width:100%;
  align-items:center;
`
export const Content = styled(Animatable.View).attrs({
  animation:"slideInLeft"
})`
  flex:.8;
  width:80%;
	justify-content:flex-end;
	margin-bottom:20px;
	margin-left:20px;
`
export const Title = styled.Text`
  color: #fff;
  font-size:48px;
  font-family:Roboto_700Bold;
  width:90%;
`;
export const SubTitle = styled.Text`
  color: #fff;
  font-size:18px;
  font-family:Roboto_400Regular;
  width:90%;
`;