import { Alert, Button, SafeAreaView, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { CustomInput } from "../../UI";
import { SubmitHandler, useForm } from "react-hook-form";

interface AddFormFields {
  name: string;
}

export const AddDeskModal: React.FC = () => {

  const {register, handleSubmit, control, formState: {errors}} = useForm<AddFormFields>()

  const addDeskHandler: SubmitHandler<AddFormFields> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <Container>
      <SafeAreaView>
        <CustomInput
          placeholder="Name..."
          register={register}
          name="name"
          errors={errors.name}
          control={control}
          required={true}
        />
        <SubmitButton onPress={handleSubmit(addDeskHandler)}>
          <SubmitButtonText>Add</SubmitButtonText>
        </SubmitButton>
      </SafeAreaView>
    </Container>
  );
};

const Container = styled.View`
  padding: 15px;
  justify-content: center;
`
const SubmitButton = styled.TouchableOpacity`
  padding: 15px 0;
  background-color: #BFB393;
  border-radius: 10px;
  margin-top: 15px;
`
const SubmitButtonText = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`
