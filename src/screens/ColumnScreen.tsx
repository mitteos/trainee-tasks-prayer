import { Tabs } from "src/navigation";
import { useEffect } from "react";
import { prayerActions } from "src/store/features/prayer";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { RouteProp, useRoute } from "@react-navigation/native";

type ParamList = {
  Column?: {columnId: number}
}

export const ColumnScreen = () => {

  const route = useRoute<RouteProp<ParamList>>()
  const {prayers} = useAppSelector(state => state.prayer)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if(!prayers) {
      dispatch(prayerActions.getPrayers())
    }
  }, [])

  return (
      <Tabs columnId={route.params?.columnId}/>
  );
};
