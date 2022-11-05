import { Alert } from "react-native";
import styled from "styled-components/native";
import { CustomInput } from "src/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";
import { SvgAdd } from "src/assets/svgr";

interface PrayerFormFields {
  title: string;
}

export const AddPrayerForm = () => {

  const {handleSubmit, control, formState: {errors}} = useForm<PrayerFormFields>()

  const addPrayer: SubmitHandler<PrayerFormFields> = (data) => {
    Alert.alert("Submit", JSON.stringify(data))
  }

  return (
    <Container>
      <AddButton onPress={handleSubmit(addPrayer)}>
        <SvgAdd />
      </AddButton>
      <CustomInput
        placeholder="Add a prayer..."
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
const AddButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 1;
  top: 19px;
  left: 15px;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`
