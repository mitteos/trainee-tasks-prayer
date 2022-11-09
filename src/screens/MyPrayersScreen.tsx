import { AddPrayerForm, PrayerList } from "src/components/Prayer";
import { useAppSelector } from "src/hooks";
import { Spinner } from "src/components/UI";
import { RouteProp, useRoute } from "@react-navigation/native";
import styled from "styled-components/native";
import {prayerSelectors} from "src/store/features/prayer"

type ParamList = {
  Column: {columnId: number}
}

export const MyPrayersScreen = () => {

  const {isLoading} = useAppSelector(state => state.prayer)
  const route = useRoute<RouteProp<ParamList>>()
  const sortedPrayers = useAppSelector(prayerSelectors.selectPrayersByColumnId(route.params.columnId))

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
