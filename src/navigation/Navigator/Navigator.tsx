import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Header } from "src/components/Layout";
import { AuthStack, Modals, PublicStack, Stack } from "..";
import { useAppSelector } from "src/hooks";

const customTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff"
  }
}

export const Navigator = () => {

  const {userInfo} = useAppSelector(state => state.user)

  return (
    <NavigationContainer theme={customTheme}>
      <Stack.Navigator
        initialRouteName="Authorize"
        screenOptions={{
          header: (props) => <Header title={props.options.title} />,
          contentStyle: {
            backgroundColor: "#fff"
          },
        }}
      >
          {userInfo?.token
            ? AuthStack()
            : PublicStack()
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
};
