import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import React from "react";
import { DeskItem } from "src/components/Desk";

const desks = [
  {id: 1, name: "To do"},
  {id: 2, name: "In Progress"},
  {id: 3, name: "Completed"},
]

export const DeskList: React.FC = () => {
  return (
    <Container>
      <FlatList
        data={desks}
        renderItem={({item}) =>
          <TouchableOpacity>
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
