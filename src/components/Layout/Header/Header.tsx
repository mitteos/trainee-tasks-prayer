import styled, { css } from "styled-components/native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SvgAdd, SvgSettings } from "src/assets/svgr";
import { RootStackParamList } from "src/navigation/types";

interface HeaderProps {
  title: string | undefined;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const route = useRoute()

  const handleAddButtonClick = () => {
    navigation.navigate("AddModal")
  }
  const handleSettingsClick = () => {
    navigation.navigate("UserSettings")
  }

  return (
    <Container $route={route.name}>
      <Title>{title}</Title>
      {route.name === "Home" &&
        <AddIconContainer onPress={handleAddButtonClick}>
          <SvgAdd />
        </AddIconContainer>
      }
      {route.name === "Column" &&
        <SettingsIconContainer onPress={handleSettingsClick}>
          <SvgSettings />
        </SettingsIconContainer>
        }
    </Container>
  );
};

const Container = styled.SafeAreaView<{$route: string}>`
  border-bottom-width: ${({$route}) => $route === "Column" ? "0" : "1px"} ;
  border-bottom-color: #E5E5E5;
  border-bottom-style: solid;
  position: relative;
  background-color: #fff;
  ${({$route}) => ($route === "Prayer" || $route === "Authorize") && css`
    display: none;
  `};
  
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
  bottom: 24px;
  right: 15px;
  width: 16px;
  height: 16px;
`
const SettingsIconContainer = styled(AddIconContainer)`
  width: 24px;
  height: 24px;
  bottom: 20px;
`
