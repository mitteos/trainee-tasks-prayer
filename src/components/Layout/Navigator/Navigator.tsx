import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { ColumnScreen, HomeScreen, PrayerScreen } from "src/screens";
import { AddDeskModal } from "src/components/Desk";
import { Header } from "src/components/Layout";
import { RootStackParamList } from "src/components/Layout/Navigator/types";
import { UserSettingsModal } from "src/components/User";
import { AuthorizeScreen } from "src/screens/AuthorizeScreen";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff"
  }
}

export const Navigator = () => {

  const Stack = createNativeStackNavigator<RootStackParamList>()

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator
        initialRouteName="Authorize"
        screenOptions={{
          header: (props) => <Header title={props.options.title} />,
          contentStyle: {
            backgroundColor: "#fff"
          },
        }
      }>
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
          <Stack.Screen
            name="Authorize"
            component={AuthorizeScreen}
          />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen
            name="AddModal"
            component={AddDeskModal}
            options={{
              title: "Add Desk"
            }}
          />
          <Stack.Screen
            name="UserSettings"
            component={UserSettingsModal}
            options={{
              title: "Settings",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
