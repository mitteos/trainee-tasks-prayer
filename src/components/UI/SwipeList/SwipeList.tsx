import { PrayerItem } from "src/components/Prayer";
import { SwipeListView } from "react-native-swipe-list-view";
import React from "react";
import { PrayerState } from "src/components/Prayer/types";
import styled from "styled-components/native";
import { Alert } from "react-native";

interface SwipeListProps {
  items: PrayerState[]
}

export const SwipeList: React.FC<SwipeListProps> = ({items}) => {

  const deleteHandler = (id: number) => {
    Alert.alert("Delete", `prayer id ${id}`)
  }

  return (
    <SwipeListView
      data={items}
      renderItem={ ({item}) =>
        <PrayerItem prayerInfo={item} />
      }
      renderHiddenItem={ ({item}) => (
        <DeleteContainer onPress={() => deleteHandler(item.id)}>
          <DeleteInner>Delete</DeleteInner>
        </DeleteContainer>
      )}
      stopRightSwipe={-90}
      rightOpenValue={-80}
      disableRightSwipe={true}
    />
  );
};

const DeleteContainer = styled.TouchableOpacity`
  flex: 1;
  background-color: #AC5253;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px
`
const DeleteInner = styled.Text`
  font-size: 13px;
  color: #fff;
`
