import { AddPrayerForm, PrayerList } from "src/components/Prayer";
import { useAppSelector } from "src/hooks";
import { Spinner } from "src/components/UI";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

type ParamList = {
  Column: {columnId: number}
}

export const MyPrayersScreen = () => {

  const {prayers, isLoading} = useAppSelector(state => state.prayer)
  const route = useRoute<RouteProp<ParamList>>()
  const sortedPrayers = prayers?.filter(prayer => prayer.columnId === route.params.columnId)

  return (
    <Container>
      {isLoading && <Spinner />}
      <AddPrayerForm />
      <PrayerList prayers={sortedPrayers}/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`
