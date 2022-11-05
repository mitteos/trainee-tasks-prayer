import styled from "styled-components/native";
import { useAppDispatch, useAppSelector } from "src/hooks";
import { userActions } from "src/store/features/user";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/navigation/types";

export const UserSettingsModal = () => {

  const {userInfo} = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const logout = () => {
    dispatch(userActions.logout())
  }

  return (
    <Container>
      <Avatar source={require("src/assets/img/userIcon.png")} />
      <Username>{userInfo?.name}</Username>
      <LogoutButton onPress={logout}>
        <LogoutButtonText>Logout</LogoutButtonText>
      </LogoutButton>
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
const LogoutButton = styled.TouchableOpacity`
  background-color: #AC5253;
  border-radius: 20px;
`
const LogoutButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  padding: 10px 45px;
`
