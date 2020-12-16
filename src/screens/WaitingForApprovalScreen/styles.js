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
  justify-content: center;
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
  margin-top: 20px;
	margin-bottom:20px;
`;

export const Text = styled.Text`
  color: #4f4f4f;
  font-size: 18px;
  font-family: Roboto_500Medium;
  text-align: center;
  width:80%;
  margin-top: 20px;
	margin-bottom:20px;
`;
