import styled from "styled-components/native";
import React from "react";

interface CheckboxProps {
  isChecked: boolean;
  setIsChecked: (e: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = ({isChecked, setIsChecked}) => {
  return (
    <CheckboxContainer onPress={() => setIsChecked(!isChecked)} >
      <CheckboxInner source={require("src/assets/img/check.png")} $isActive={isChecked}/>
    </CheckboxContainer>
  );
};

const CheckboxContainer = styled.TouchableOpacity`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  margin-right: 15px;
  border: 1px solid #514D47;
  align-items: center;
  justify-content: center;
`
const CheckboxInner = styled.Image<{$isActive: boolean}>`
  transition: opacity .5s ease;
  opacity: ${({$isActive}) => $isActive ? "1" : "0"};
`
