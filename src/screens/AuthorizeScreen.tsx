import styled from "styled-components/native";
import React, { useState } from "react";
import { CustomInput } from "src/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";
import { Alert, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/components/Layout/Navigator/types";

interface AuthorizeFields {
  email: string;
  name: string;
  password: string;
}

export const AuthorizeScreen = () => {

  const [activeTab, setActiveTab] = useState<string>("sign-in")
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const {register, handleSubmit, control, formState: {errors}, reset} = useForm<AuthorizeFields>()

  const authorize: SubmitHandler<AuthorizeFields> = (data) => {
    Alert.alert(JSON.stringify(data))
    navigation.navigate("Home")
  }
  const switchAuth = () => {
    setActiveTab(activeTab === "sign-in" ? "sign-up" : "sign-in")
    reset()
  }

  return (
    <Container>
      <Title>{activeTab === "sign-in" ? "Sign-in" : "Sign-up"}</Title>
      <CustomInput
        placeholder="Email"
        register={register}
        name="email"
        errors={errors.email}
        control={control}
        onSubmitEditing={authorize}
        handleSubmit={handleSubmit}
        styles={inputsStyles}
        required={true}
      />
      {activeTab === "sign-up" &&
        <CustomInput
          placeholder="Name"
          register={register}
          name="name"
          errors={errors.name}
          control={control}
          onSubmitEditing={authorize}
          handleSubmit={handleSubmit}
          styles={inputsStyles}
          required={true}
        />
      }
      <CustomInput
        placeholder="Password"
        register={register}
        name="password"
        errors={errors.password}
        control={control}
        onSubmitEditing={authorize}
        handleSubmit={handleSubmit}
        styles={inputsStyles}
        required={true}
      />
      <ButtonContainer onPress={handleSubmit(authorize)}>
        <ButtonInner>{activeTab === "sign-in" ? "Login" : "Register"}</ButtonInner>
      </ButtonContainer>
      <Text>{activeTab === "sign-in" ? "Don't have an account?" : "Already have an account?"}</Text>
      <TouchableOpacity onPress={switchAuth}>
        <SwitchText>{activeTab === "sign-in" ? "Create account" : "Sign-in"}</SwitchText>
      </TouchableOpacity>
    </Container>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 20px;
`
const inputsStyles = {
  alignSelf: "stretch",
  marginLeft: 15,
  marginRight: 15,
  marginBottom: 10
}
const ButtonContainer = styled.TouchableOpacity`
  background-color: #72A8BC;
  align-self: stretch;
  border-radius: 10px;
  padding: 15px;
  margin: 10px 15px 10px 15px;
`
const ButtonInner = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 18px;
`
const SwitchText = styled.Text`
  color: #72A8BC;
  font-size: 18px;
`
