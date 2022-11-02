import React, { useState } from "react";
import styled from "styled-components/native";
import { PrayerState } from "src/components/Prayer/types";
import { SwipeList } from "src/components/UI";

interface PrayerListProps {
  prayers: PrayerState[]
}

export const PrayerList: React.FC<PrayerListProps> = ({prayers}) => {

  const [isShowAnswer, setIsShowAnswer] = useState<boolean>(false)

  return (
    <Container>
      <SwipeList items={prayers.filter(prayer => !prayer.checked)} />
      <AnsweredButton onPress={() => setIsShowAnswer(!isShowAnswer)}>
        <AnswerText>{isShowAnswer ? "Hide" : "Show"} Answered Prayers</AnswerText>
      </AnsweredButton>
      {isShowAnswer &&
        <SwipeList items={prayers.filter(prayer => prayer.checked)} />
      }
    </Container>
  );
};

const Container = styled.View`
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
