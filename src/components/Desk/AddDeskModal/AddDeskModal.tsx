import { Alert, SafeAreaView} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput, Spinner } from "src/components/UI";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { columnActions } from "src/store/features/column";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation/types";

interface AddFormFields {
  title: string;
}

export const AddDeskModal: React.FC = () => {

  const {handleSubmit, control, formState: {errors}} = useForm<AddFormFields>()
  const dispatch = useAppDispatch()
  const {userInfo} = useAppSelector(state => state.user)
  const {isLoading} = useAppSelector(state => state.column)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


  const onSuccess = () => {
    navigation.navigate("Home")
  }

  const handleAddDesk: SubmitHandler<AddFormFields> = (fieldsValues) => {
    const {title} = fieldsValues
    dispatch(columnActions.addColumn({title, description: "", userId: userInfo?.id, onSuccess}))
  }

  return (
    <Container>
      <SafeAreaView>
        {isLoading && <Spinner />}
        <CustomInput
          placeholder="Name..."
          name="title"
          errors={errors.title}
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
