import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { DeskItem } from "src/components/Desk";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation/types";

const desks = [
  {id: 1, name: "To do"},
  {id: 2, name: "In Progress"},
  {id: 3, name: "Completed"},
]

export const DeskList: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const routeHandler = (name: string) => {
    navigation.navigate("Column", {title: name})
  }

  return (
    <Container>
      <FlatList
        data={desks}
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => routeHandler(item.name)}>
            <DeskItem name={item.name} />
          </TouchableOpacity>
        }
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 15px;
`
