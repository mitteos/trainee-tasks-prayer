import styled from "styled-components/native";
import React, { useState } from "react";
import { CustomInput, Spinner } from "src/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";
import { Text, TouchableOpacity } from "react-native";
import { emailPattern } from "src/utils/patterns";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { userActions } from "src/store/features/user";

interface AuthorizeFields {
  email: string;
  name: string;
  password: string;
}

export const AuthorizeScreen = () => {

  const [activeTab, setActiveTab] = useState<string>("sign-in")
  const {handleSubmit, control, formState: {errors}, reset} = useForm<AuthorizeFields>()
  const {isLoading, error} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  const authorize: SubmitHandler<AuthorizeFields> = (fieldsValues) => {
    activeTab === "sign-up"
      ? dispatch(userActions.register(fieldsValues))
      : dispatch(userActions.login(fieldsValues))
  }
  const switchAuth = () => {
    setActiveTab(activeTab === "sign-in" ? "sign-up" : "sign-in")
    reset()
  }

  return (
    <Container>
      {isLoading && <Spinner />}
      <Title>{activeTab === "sign-in" ? "Sign-in" : "Sign-up"}</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <CustomInput
        placeholder="Email"
        name="email"
        errors={errors.email}
        control={control}
        onSubmitEditing={authorize}
        handleSubmit={handleSubmit}
        styles={inputsStyles}
        required={true}
        pattern={emailPattern}
      />
      {activeTab === "sign-up" &&
        <CustomInput
          placeholder="Name"
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
        name="password"
        errors={errors.password}
        control={control}
        onSubmitEditing={authorize}
        handleSubmit={handleSubmit}
        styles={inputsStyles}
        required={true}
        secure={true}
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
const ErrorMessage = styled.Text`
  color: #AC5253;
  margin: 10px 0;
  text-align: center;
`
