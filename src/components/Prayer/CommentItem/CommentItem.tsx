import styled from "styled-components/native";

export const CommentItem = () => {
  return (
    <CommentContainer>
      <CommentIcon source={require("src/assets/img/member.png")} />
      <CommentBody>
        <CommentHeader>
          <CommentAuthor>Anna Barber</CommentAuthor>
          <CommentDate>2 days ago</CommentDate>
        </CommentHeader>
        <CommentText>Hey, Hey!</CommentText>
      </CommentBody>
    </CommentContainer>
  );
};

const CommentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 17px 15px;
  border-top-color: #E5E5E5;
  border-top-width: 1px;
  border-top-style: solid;
`
const CommentIcon = styled.Image`
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 40px;
`
const CommentBody = styled.View`

`
const CommentHeader = styled.View`
  flex-direction: row;
  align-items: flex-end;
  margin-bottom: 2px;
`
const CommentAuthor = styled.Text`
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
  margin-right: 6px;
`
const CommentDate = styled.Text`
  font-size: 13px;
  line-height: 16px;
  color: #9C9C9C;
`
const CommentText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
`
