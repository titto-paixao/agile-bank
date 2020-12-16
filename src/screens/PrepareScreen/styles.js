import styled from "styled-components/native";
import {LinearGradient} from 'expo-linear-gradient'
import * as Animatable from "react-native-animatable";

export const Container = styled(LinearGradient).attrs({
  colors: ["#00d4ff", "#090979"],
  start:{ x: 0, y: 0 },
  end:{ x: 1, y: 1 }
})`
  flex:1;
	justify-content:flex-end;
	align-items:center;
  padding-top:30px;
  padding-bottom:30px;
`;
export const Title = styled.Text`
  color: #fff;
  font-size:48px;
  font-family:Roboto_700Bold;
  width:90%;
`;
export const Bar = styled(Animatable.View).attrs({
  animation:"slideInLeft"
})`
  width:100%;
  height:10px;
  position:absolute;
  bottom:0;
  background-color:#4fc3f7;
`;