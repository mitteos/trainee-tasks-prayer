import styled from "styled-components/native";
import { Checkbox } from "src/components/UI";
import { PrayerState } from "src/components/Prayer/types";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "src/components/Layout/Navigator/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface PrayerItemProps {
  prayerInfo: PrayerState
}

export const PrayerItem: React.FC<PrayerItemProps> = ({prayerInfo}) => {

  const [isChecked, setIsChecked] = useState<boolean>(prayerInfo.checked)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const navigateToPrayer = () => {
    navigation.navigate("Prayer", {prayerId: prayerInfo.id})
  }

  return (
    <Container activeOpacity={1} onPress={navigateToPrayer}>
      <PrayerInfo>
        <Indicator />
        <Checkbox isChecked={isChecked} setIsChecked={setIsChecked}/>
        <Name $isChecked={isChecked}>{prayerInfo.title}</Name>
      </PrayerInfo>
      <PrayerStats>
        <StatsUsers>
          <StatsImage source={require("src/assets/img/user.png")} />
          <StatsText>3</StatsText>
        </StatsUsers>
        <StatsPrayers>
          <StatsImage source={require("src/assets/img/prayer.png")} />
          <StatsText>120</StatsText>
        </StatsPrayers>
      </PrayerStats>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 22px 15px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #E5E5E5;
  background-color: #fff;
`
const PrayerInfo = styled.View`
  flex-direction: row;
  align-items: center;
`
const PrayerStats = styled.View`
  flex-direction: row;
`
const Indicator = styled.View`
  width: 3px;
  height: 22px;
  background-color: #AC5253;
  margin-right: 15px;
  border-radius: 10px;
`
const Name = styled.Text<{$isChecked: boolean}>`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
  text-decoration: ${({$isChecked}) => $isChecked ? "line-through" : "none"};
`
const StatsPrayers = styled.View`
  flex-direction: row;
  align-items: center;
  row-gap: 50px;
`
const StatsUsers = styled(StatsPrayers)`
  margin-right: 15px;
`
const StatsImage = styled.Image`
  margin-right: 4px;
`
const StatsText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #514D47;
`
