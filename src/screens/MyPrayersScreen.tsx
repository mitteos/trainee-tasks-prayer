import { AddPrayerForm, PrayerList } from "src/components/Prayer";
import { View } from "react-native";

const prayers = [
  {id: 1, title: "test1", checked: false},
  {id: 2, title: "test2", checked: true},
  {id: 3, title: "test3", checked: false},
  {id: 4, title: "test4", checked: true},
]

export const MyPrayersScreen = () => {
  return (
    <View>
      <AddPrayerForm />
      <PrayerList prayers={prayers} />
    </View>
  );
};
