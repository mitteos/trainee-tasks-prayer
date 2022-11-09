import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";

export const Spinner = () => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#72A8BC" />
    </Container>
  );
};

const Container = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255,255,255, 0.8);
  z-index: 2;
`
