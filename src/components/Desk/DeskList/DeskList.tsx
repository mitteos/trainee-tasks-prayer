import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import React, { useEffect } from "react";
import { DeskItem } from "src/components/Desk";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation/types";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { columnActions } from "src/store/features/column";

export const DeskList: React.FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const dispatch = useAppDispatch()
  const {columns} = useAppSelector(state => state.column)

  const handleColumnClick = (name: string) => {
    navigation.navigate("Column", {title: name})
  }

  useEffect(() => {
    dispatch(columnActions.getColumns())
  }, [])

  return (
    <Container>
      <FlatList
        data={columns}
        renderItem={({item}) =>
          <TouchableOpacity onPress={() => handleColumnClick(item.title)}>
            <DeskItem name={item.title} />
          </TouchableOpacity>
        }
      />
    </Container>
  );
};

const Container = styled.View`
  padding: 15px;
`
