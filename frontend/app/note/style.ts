import styled from "styled-components/native";
import {colors, sizes} from "../../src/styles/variables";

export const NoteSelectContainer = styled.View`
  margin: 0 auto;
  border-radius: 15px;
  margin-top: 20px;
  width: 80%;
  display: flex;
  border: 1px solid ${colors.backgroundSecondary};
`;

export const TextMain = styled.Text`
  font-size: ${sizes.h2}px;
  color: #FFFFFF;
  margin: 0 auto;
  margin-top: 20px;
  width: 75%;
`;
