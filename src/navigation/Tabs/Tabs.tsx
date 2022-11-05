import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MyPrayersScreen, SubscribePrayersScreen } from "src/screens";
import styled from "styled-components/native";

export const Tabs = () => {

  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      swipeEnabled: false,
      tabBarActiveTintColor: "#72A8BC",
      tabBarInactiveTintColor: "#C8C8C8",
      tabBarPressColor: "#fff",
      tabBarIndicatorStyle: {
        backgroundColor: "#72A8BC"
      },
      tabBarStyle: {
        borderBottomColor: "#E5E5E5",
        borderBottomWidth: 1,
        shadowOpacity: 0,
        elevation: 0
      },
      tabBarItemStyle: {
        flexDirection: "row-reverse",
        justifyContent: "center",
        alignItems: "center"
      },
    }}>
      <Tab.Screen name="My Prayers" component={MyPrayersScreen} options={{title: "My prayers"}}/>
      <Tab.Screen name="Subscribe Prayers" component={SubscribePrayersScreen} options={{
        title: "Subscribed",
        tabBarIcon: () => (
        <NotificationContainer>
          <NotificationCount>5</NotificationCount>
        </NotificationContainer>),
      }}/>
    </Tab.Navigator>
  );
};

const NotificationContainer = styled.View`
  background-color: #AC5253;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  margin-top: 4px;
  border-radius: 16px;
`
const NotificationCount = styled.Text`
  color: #fff;
  font-size: 9px;
`
