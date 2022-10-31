import { FlatList, TouchableOpacity, View } from "react-native";
import { DeskItem } from "../DeskItem";
import styled from "styled-components/native";

const desks = [
  {id: 1, name: "To do"},
  {id: 2, name: "In Progress"},
  {id: 3, name: "Completed"},
]

export const DeskList = () => {
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
