import styled from "styled-components/native";
import React from "react";
import SvgCheck from "src/assets/svgr";

interface CheckboxProps {
  isChecked: boolean;
  onPress: () => void
}

export const Checkbox: React.FC<CheckboxProps> = ({isChecked, onPress}) => {
  return (
    <CheckboxContainer onPress={onPress} >
      <CheckboxInner $isActive={isChecked}/>
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
const CheckboxInner = styled(SvgCheck)<{$isActive: boolean}>`
  transition: opacity .5s ease;
  opacity: ${({$isActive}) => $isActive ? "1" : "0"};
`
