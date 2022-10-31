import styled from "styled-components/native";
import React from "react";
import { Image } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

interface HeaderProps {
  title: string | undefined;
}

export const Header: React.FC<HeaderProps> = ({title}) => {

  const navigation = useNavigation()
  const route = useRoute()

  const addClickHandler = () => {
    navigation.navigate("Add Modal")
  }

  return (
    <Container>
      <Title>{title}</Title>
      {route.name === "Home" &&
        <AddIconContainer onPress={addClickHandler}>
          <Image source={require("../../../assets/img/addIcon.png")} />
        </AddIconContainer>
      }
    </Container>
  );
};

const Container = styled.View`
  border-bottom-width: 1px;
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
`
const AddIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 15px;
  width: 16px;
  height: 16px;
`
