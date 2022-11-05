import { Alert, SafeAreaView} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "src/components/UI";

interface AddFormFields {
  name: string;
}

export const AddDeskModal: React.FC = () => {

  const {handleSubmit, control, formState: {errors}} = useForm<AddFormFields>()

  const handleAddDesk: SubmitHandler<AddFormFields> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <Container>
      <SafeAreaView>
        <CustomInput
          placeholder="Name..."
          name="name"
          errors={errors.name}
          control={control}
          required={true}
          handleSubmit={handleSubmit}
          onSubmitEditing={handleAddDesk}
        />
        <SubmitButton onPress={handleSubmit(handleAddDesk)}>
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
