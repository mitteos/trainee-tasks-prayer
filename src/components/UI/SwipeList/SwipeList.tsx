import { PrayerItem } from "src/components/Prayer";
import { SwipeListView } from "react-native-swipe-list-view";
import React from "react";
import styled from "styled-components/native";
import { PrayerState } from "src/store/features/prayer/types";
import { useAppDispatch } from "src/hooks";
import { prayerActions } from "src/store/features/prayer";

interface SwipeListProps {
  items?: PrayerState[]
}

export const SwipeList: React.FC<SwipeListProps> = ({items}) => {

  const dispatch = useAppDispatch()

  const handleDelete = (id: number) => {
    dispatch(prayerActions.removePrayer({prayerId: id}))
  }

  return (
    <SwipeListView
      data={items}
      nestedScrollEnabled={true}
      renderItem={ ({item}) =>
        <PrayerItem prayerInfo={item} />
      }
      renderHiddenItem={ ({item}) => (
        <DeleteContainer onPress={() => handleDelete(item.id)}>
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
