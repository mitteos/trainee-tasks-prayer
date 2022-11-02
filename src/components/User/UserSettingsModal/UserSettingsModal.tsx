import styled from "styled-components/native";

export const UserSettingsModal = () => {
  return (
    <Container>
      <Avatar source={require("src/assets/img/userIcon.png")} />
      <Username>Anna Barber</Username>
      <LogoutContainer>
        <LogoutInner>Logout</LogoutInner>
      </LogoutContainer>
    </Container>
  );
};

const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
const Avatar = styled.Image`
  border-radius: 150px;
  width: 150px;
  height: 150px;
`
const Username = styled.Text`
  font-size: 26px;
  text-align: center;
  color: #514D47;
  font-weight: bold;
  margin: 10px 0 25px 0;
`
const LogoutContainer = styled.TouchableOpacity`
  background-color: #AC5253;
  border-radius: 20px;
`
const LogoutInner = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 10px 45px;
`
