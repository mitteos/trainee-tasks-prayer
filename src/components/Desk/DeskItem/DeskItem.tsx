import styled from "styled-components/native";
import React from "react";

interface DeskItemProps {
  name: string;
}

export const DeskItem: React.FC<DeskItemProps> = ({name}) => {
  return (
    <Container>
      <Title>{name}</Title>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 15px;
  border-radius: 4px;
  border-style: solid;
  border-color: #E5E5E5;
  border-width: 1px;
  margin-bottom: 10px;
`
const Title = styled.Text`
  font-size: 17px;
  line-height: 20px;
  color: #514D47;
`
