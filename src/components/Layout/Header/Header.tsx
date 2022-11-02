import styled from "styled-components/native";
import React from "react";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/components/Layout/Navigator/types";

interface HeaderProps {
  title: string | undefined;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()

  const addClickHandler = () => {
    navigation.navigate("AddModal")
  }

  return (
    <Container $route={route.name}>
      <Title>{title}</Title>
      {route.name === "Home" &&
        <AddIconContainer onPress={addClickHandler}>
          <Image source={require("../../../assets/img/addIcon.png")} />
        </AddIconContainer>
      }
      {route.name === "Column" &&
        <SettingsIconContainer>
          <Image source={require("../../../assets/img/settings.png")} />
        </SettingsIconContainer>
        }
    </Container>
  );
};

const Container = styled.View<{$route: string}>`
  border-bottom-width: ${({$route}) => $route === "Column" ? "0" : "1px"} ;
  border-bottom-color: #E5E5E5;
  border-bottom-style: solid;
  position: relative;
  background-color: #fff;
`
const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
  text-align: center;
  padding: 22px 0;
  font-weight: bold;
`
const AddIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 15px;
  width: 16px;
  height: 16px;
`
const SettingsIconContainer = styled(AddIconContainer)`
  width: 24px;
  height: 24px;
  top: 20px;
`
