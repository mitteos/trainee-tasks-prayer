import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../../../screens";
import { Header } from "../Header";
import { AddDeskModal } from "../../Desk";

export const Navigator = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        header: (props) => <Header title={props.options.title} />,
        contentStyle: {
          backgroundColor: "#fff"
        }
      }}>
        <Stack.Group>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Desks"
        }}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen
            name="Add Modal"
            component={AddDeskModal}
            options={{
              title: "Add Desk"
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
