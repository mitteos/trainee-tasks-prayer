import styled from "styled-components/native";
import { CustomInput } from "src/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";
import { SvgAdd } from "src/assets/svgr";
import { useAppDispatch } from "src/hooks";
import { prayerActions } from "src/store/features/prayer";
import { RouteProp, useRoute } from "@react-navigation/native";

interface PrayerFormFields {
  title: string;
}

type PropList = {
  Column: {columnId: number}
}

export const AddPrayerForm = () => {

  const {handleSubmit, control, formState: {errors}, reset} = useForm<PrayerFormFields>()
  const dispatch = useAppDispatch()
  const route = useRoute<RouteProp<PropList>>()

  const addPrayer: SubmitHandler<PrayerFormFields> = (data) => {
    const {title} = data
    dispatch(prayerActions.addPrayer({title, description: "", checked: false, columnId: route.params.columnId}))
    reset()
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
