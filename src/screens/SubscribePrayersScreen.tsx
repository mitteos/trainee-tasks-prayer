import { PrayerList } from "src/components/Prayer";
import { useAppSelector } from "../hooks";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import { prayerSelectors } from "src/store/features/prayer";

type ParamList = {
  Column: {columnId: number}
}

export const SubscribePrayersScreen = () => {

  const route = useRoute<RouteProp<ParamList>>()
  const sortedPrayers = useAppSelector(prayerSelectors.selectPrayersByColumnId(route.params.columnId))


  return (
    <Container>
      <PrayerList prayers={sortedPrayers}/>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
`
