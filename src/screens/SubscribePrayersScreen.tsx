import { PrayerList } from "src/components/Prayer";
import { useAppSelector } from "../hooks";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";

type ParamList = {
  Column: {columnId: number}
}

export const SubscribePrayersScreen = () => {

  const {prayers} = useAppSelector(state => state.prayer)
  const route = useRoute<RouteProp<ParamList>>()
  const sortedPrayers = prayers?.filter(prayer => prayer.columnId === route.params.columnId)

  return (
    <Container>
      <PrayerList prayers={sortedPrayers}/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`
