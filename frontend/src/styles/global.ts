import styled from "styled-components/native";
import {colors, sizes} from "./variables";
import {Colors, Sizes} from "../types/Variablres";

export const ScreenView = styled.ScrollView`
  position: relative;
  flex: 1;
  background-color: ${colors.background};
  padding-bottom: 55px;
`

export const Text = styled.Text<{ $color?: Colors, $size?: Sizes }>`
  color: ${({ $color }) => $color ? colors[$color] : colors.text};
  font-size: ${({ $size }) => $size ? sizes[$size] : sizes.h6}px;
`;

export const CentredView = styled.View`
  flex: 1;
  margin-top: 85%;
  justify-content: center;
`

export const ButtonStyled = styled.TouchableOpacity`
  background-color: ${colors.backgroundSecondary};
  padding: 10px 20px;
  margin: 0 20px;
  border-radius: 5px;
  align-items: center;
`;

export const TextInput = styled.TextInput` 
  border-radius: 5px;
  margin: 0 20px;
  background-color: ${colors.background};
  border: 1px solid ${colors.backgroundSecondary};
`