import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "src/screens";
import { AddDeskModal } from "src/components/Desk";
import { Header } from "src/components/Layout";

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
            title: "My Desk"
        }}/>
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: "modal"}}>
          <Stack.Screen
            name="AddModal"
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
