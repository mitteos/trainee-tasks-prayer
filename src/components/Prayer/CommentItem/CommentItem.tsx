import styled from "styled-components/native";
import { View } from "react-native";
import { CommentState } from "src/store/features/comments/types";
import React from "react";
import { useDate } from "src/hooks";

interface CommentItemProps {
  commentInfo: CommentState
}

export const CommentItem: React.FC<CommentItemProps> = ({commentInfo}) => {

  const commentDate = useDate(commentInfo.created)

  return (
    <Container>
      <Icon source={require("src/assets/img/member.png")} />
      <View>
        <Header>
          <Author>Anna Barber</Author>
          <Date>{commentDate}</Date>
        </Header>
        <Text>{commentInfo.body}</Text>
      </View>
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 17px 15px;
  border-top-color: #E5E5E5;
  border-top-width: 1px;
  border-top-style: solid;
`
const Icon = styled.Image`
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
`
const Header = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 2px;
`
const Author = styled.Text`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
  margin-right: 6px;
`
const Date = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #9C9C9C;
`
const Text = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
`
