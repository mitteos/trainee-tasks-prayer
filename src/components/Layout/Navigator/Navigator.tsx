import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "../../../screens";
import { Header } from "../Header";

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
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "My Desks"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
