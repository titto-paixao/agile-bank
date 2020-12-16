import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

/* Screens */
import OnboardingScreen from "./screens/OnboardingScreen"
import LoginScreen from "./screens/LoginScreen"
import LoginDocumentScreen from "./screens/LoginDocumentScreen"
import LoginPasswordScreen from "./screens/LoginPasswordScreen"
import PrepareScreen from "./screens/PrepareScreen"
import TermScreen from "./screens/TermScreen"
import InitialDataScreen from "./screens/InitialDataScreen"
import NameScreen from "./screens/NameScreen"
import DocumentScreen from "./screens/DocumentScreen"
import DateOfBirthScreen from "./screens/DateOfBirthScreen"
import EmailScreen from "./screens/EmailScreen"
import PhoneScreen from "./screens/PhoneScreen"
import SelfScreen from "./screens/SelfScreen"
import TakeDocumentScreen from "./screens/TakeDocumentScreen"
import InitialAdressScreen from "./screens/InitialAdressScreen"
import ZipCodeScreen from "./screens/ZipCodeScreen"
import NeighborhoodScreen from "./screens/NeighborhoodScreen"
import AddressScreen from "./screens/AddressScreen"
import WaitingForApprovalScreen from "./screens/WaitingForApprovalScreen"
import PasswordScreen from "./screens/PasswordScreen"
import ConfirmPasswordScreen from "./screens/ConfirmPasswordScreen"

function Routes() {
  return (
    <Stack.Navigator
			screenOptions={{
				headerShown:false
			}}
		>
      <Stack.Screen
        name="OnboardingScreen"
				component={OnboardingScreen}
			/>
      <Stack.Screen
        name="LoginDocumentScreen"
				component={LoginDocumentScreen}
			/>
      <Stack.Screen
        name="LoginPasswordScreen"
				component={LoginPasswordScreen}
			/>
      <Stack.Screen
        name="PrepareScreen"
				component={PrepareScreen}
			/>
      <Stack.Screen
        name="TermScreen"
				component={TermScreen}
			/>
      <Stack.Screen
        name="InitialDataScreen"
				component={InitialDataScreen}
			/>
      <Stack.Screen
        name="NameScreen"
				component={NameScreen}
			/>
      <Stack.Screen
        name="DocumentScreen"
				component={DocumentScreen}
			/>
      <Stack.Screen
        name="DateOfBirthScreen"
				component={DateOfBirthScreen}
			/>
      <Stack.Screen
        name="EmailScreen"
				component={EmailScreen}
			/>
      <Stack.Screen
        name="PhoneScreen"
				component={PhoneScreen}
			/>
      <Stack.Screen
        name="SelfScreen"
				component={SelfScreen}
			/>
      <Stack.Screen
        name="TakeDocumentScreen"
				component={TakeDocumentScreen}
			/>
      <Stack.Screen
        name="InitialAdressScreen"
				component={InitialAdressScreen}
			/>
      <Stack.Screen
        name="ZipCodeScreen"
				component={ZipCodeScreen}
			/>
      <Stack.Screen
        name="NeighborhoodScreen"
				component={NeighborhoodScreen}
			/>
      <Stack.Screen
        name="AddressScreen"
				component={AddressScreen}
			/>
      <Stack.Screen
        name="PasswordScreen"
				component={PasswordScreen}
			/>
      <Stack.Screen
        name="ConfirmPasswordScreen"
				component={ConfirmPasswordScreen}
			/>
      <Stack.Screen
        name="WaitingForApprovalScreen"
				component={WaitingForApprovalScreen}
			/>
    </Stack.Navigator>
  );
}

export default Routes;