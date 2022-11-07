import React, { useState } from "react";
import styled from "styled-components/native";
import { SwipeList } from "src/components/UI";
import { PrayerState } from "src/store/features/prayer/types";

interface PrayerListProps {
  prayers?: PrayerState[]
}

export const PrayerList: React.FC<PrayerListProps> = ({prayers}) => {

  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false)

  return (
    <Container
      data={[]}
      renderItem={null}
      nestedScrollEnabled={true}
      ListHeaderComponent={() =>
      <>
        <SwipeList items={prayers?.filter(prayer => !prayer.checked)} />
        <AnsweredButton onPress={() => setIsShowAnswer(!isShowAnswer)}>
        <AnswerText>{isShowAnswer ? "Hide" : "Show"} Answered Prayers</AnswerText>
        </AnsweredButton>
      </>
      }
      ListFooterComponent={() =>
        <>
          {isShowAnswer &&
              <SwipeList items={prayers?.filter(prayer => prayer.checked)} />
          }
        </>
    }
    />
  );
};

const Container = styled.FlatList`
  padding-bottom: 30px;
`
const AnsweredButton = styled.TouchableOpacity`
  background: #BFB393;
  box-shadow: 0 2px 15px rgba(66, 78, 117, 0.1);
  border-radius: 15px;
  padding: 8px 17px;
  margin: 22px 0;
  align-self: center;
`
const AnswerText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
`
