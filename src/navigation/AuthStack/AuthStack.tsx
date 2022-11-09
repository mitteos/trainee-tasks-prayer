import { Stack } from "../stack";
import { ColumnScreen, HomeScreen, PrayerScreen } from "../../screens";
import { Modals } from "../Modals";

export const AuthStack = () => {
  return (
    <>
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Desk"
          }}/>
        <Stack.Screen
          name="Column"
          component={ColumnScreen}
          options={(props) => ({
            title: props.route.params?.title
          })}
        />
        <Stack.Screen
          name="Prayer"
          component={PrayerScreen}
        />
      </Stack.Group>
      {Modals()}
    </>
  );
};
