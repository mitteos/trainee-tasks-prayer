import { Alert, Image } from "react-native";
import styled from "styled-components/native";
import { CustomInput } from "src/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";

interface PrayerFormFields {
  title: string;
}

export const AddPrayerForm = () => {

  const {register, handleSubmit, control, formState: {errors}} = useForm<PrayerFormFields>()

  const addPrayer: SubmitHandler<PrayerFormFields> = (data) => {
    Alert.alert("Submit", JSON.stringify(data))
  }

  return (
    <Container>
      <AddButtonContainer onPress={handleSubmit(addPrayer)}>
        <Image source={require("src/assets/img/addFormIcon.png")} />
      </AddButtonContainer>
      <CustomInput
        placeholder="Add a prayer..."
        register={register}
        name="title"
        errors={errors.title}
        control={control}
        required={true}
        styles={InputStyles}
        handleSubmit={handleSubmit}
        onSubmitEditing={addPrayer}
      />
    </Container>
  );
};

const Container = styled.View`
  margin: 16px 15px 18px 15px;
  position: relative;
`
const InputStyles = {
  paddingLeft: 50
}
const AddButtonContainer = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  top: 19px;
  left: 15px;
`
