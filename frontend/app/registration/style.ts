import styled from "styled-components/native";
import { colors } from "../../src/styles/variables";

export const RegistrationView = styled.View`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  max-width: 100%;
`

export const RegistrationInput = styled.TextInput`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  padding: 10px;
  border: 1px solid ${colors.backgroundSecondary};
`
