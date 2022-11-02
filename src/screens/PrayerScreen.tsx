import { Alert, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";
import { CommentItem } from "src/components/Prayer";
import { SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "src/components/UI";

const comments = [
  {id: 1, author: "Anna Barber", body: "Hey, Hey!", date: 2},
  {id: 2, author: "Anna Barber", body: "Hey, Hey!", date: 2},
  {id: 3, author: "Anna Barber", body: "Hey, Hey!", date: 2},
  {id: 4, author: "Anna Barber", body: "Hey, Hey!", date: 2},
  {id: 5, author: "Anna Barber", body: "Hey, Hey!", date: 2},
]

interface CommentFormFields {
  body: string;
}

export const PrayerScreen = () => {

  const navigation = useNavigation()
  const {register, control, formState: {errors}, handleSubmit} = useForm<CommentFormFields>()

  const addComment: SubmitHandler<CommentFormFields> = (data) => {
    Alert.alert(JSON.stringify(data))
  }

  return (
    <ScrollView>
      <PrayerHeader>
        <HeaderRow>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require("src/assets/img/backIcon.png")} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert("Prayed")}>
            <Image source={require("src/assets/img/prayerLight.png")} />
          </TouchableOpacity>
        </HeaderRow>
        <PrayerName>Prayer item two which is for my family to love God whole heartedly.</PrayerName>
      </PrayerHeader>
      <LastPrayedContainer>
        <LastPrayedIndicator />
        <LastPrayedText>Last prayed 8 min ago</LastPrayedText>
      </LastPrayedContainer>
      <InfoRow>
        <InfoItem>
          <InfoTitleDate>July 25 2017</InfoTitleDate>
          <InfoSubtitle>Date Added</InfoSubtitle>
          <InfoText>Opened for 4 days</InfoText>
        </InfoItem>
        <InfoItem>
          <InfoTitle>123</InfoTitle>
          <InfoSubtitle>Times Prayed Total</InfoSubtitle>
        </InfoItem>
      </InfoRow>
      <InfoRow>
        <InfoItem>
          <InfoTitle>63</InfoTitle>
          <InfoSubtitle>Times Prayed by Me</InfoSubtitle>
        </InfoItem>
        <InfoItem>
          <InfoTitle>60</InfoTitle>
          <InfoSubtitle>Times Prayed by Others</InfoSubtitle>
        </InfoItem>
      </InfoRow>
      <ListTitle>Members</ListTitle>
      <MembersRow>
        <MemberItem source={require("src/assets/img/member.png")} />
        <MemberAddContainer>
          <Image source={require("src/assets/img/addLight.png")} />
        </MemberAddContainer>
      </MembersRow>
      <ListTitle>Comments</ListTitle>
      {comments.map(comment =>
        <CommentItem key={comment.id}/>
      )}
      <AddCommentContainer>
        <AddCommentIcon source={require("src/assets/img/comment.png")} />
        <CustomInput
          placeholder="Add a comment..."
          register={register}
          name="body"
          errors={errors.body}
          control={control}
          styles={InputStyles}
          handleSubmit={handleSubmit}
          onSubmitEditing={addComment}
        />
      </AddCommentContainer>
    </ScrollView>
  );
};

const PrayerHeader = styled.View`
  background-color: #BFB393;
  padding: 20px 15px 23px 15px;
  margin-bottom: 14px;
`
const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 21px;
`
const PrayerName = styled.Text`
  font-size: 17px;
  line-height: 27px;
  color: #FFFFFF;
`
const LastPrayedContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 13px;
`
const LastPrayedIndicator = styled.View`
  margin-right: 10px;
  width: 3px;
  height: 22px;
  background-color: #AC5253;
`
const LastPrayedText = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
`
const InfoRow = styled.View`
  flex-direction: row;
  align-items: center;
`
const InfoItem = styled.View`
  flex: 1;
  padding: 26px 12px 11px 12px;
  border-style: solid;
  border-width: 1px;
  border-color: #E5E5E5;
  height: 108px;
`
const InfoTitle = styled.Text`
  font-size: 32px;
  line-height: 38px;
  color: #BFB393;
`
const InfoTitleDate = styled(InfoTitle)`
  font-size: 22px;
  line-height: 26px;
  margin-bottom: 6px;
`
const InfoSubtitle = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #514D47;
`
const InfoText = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #72A8BC;
`
const ListTitle = styled.Text`
  font-size: 13px;
  line-height: 15px;
  color: #72A8BC;
  text-transform: uppercase;
  margin: 20px 0 15px 0;
  padding: 0 15px;
  font-weight: bold;
`
const MembersRow = styled.View`
  flex-direction: row;
  padding: 0 14px;
  overflow: hidden;
  margin-bottom: 10px;
`
const MemberItem = styled.Image`
  border-radius: 32px;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  width: 32px;
  height: 32px;
`
const MemberAddContainer = styled.TouchableOpacity`
  background-color: #BFB393;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
`
const AddCommentContainer = styled.View`
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #E5E5E5;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`
const AddCommentIcon = styled.Image`
  margin-right: 12px;
`
const InputStyles = {
  borderWidth: 0,
  flex: 1
}
