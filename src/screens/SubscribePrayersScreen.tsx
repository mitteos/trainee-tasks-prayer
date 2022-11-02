import { View } from "react-native";
import { PrayerList } from "src/components/Prayer";

const prayers = [
  {id: 1, title: "test1", checked: false},
  {id: 2, title: "test2", checked: true},
  {id: 3, title: "test3", checked: false},
  {id: 4, title: "test4", checked: true},
]

export const SubscribePrayersScreen = () => {
  return (
    <View>
      <PrayerList prayers={prayers} />
    </View>
  );
};
