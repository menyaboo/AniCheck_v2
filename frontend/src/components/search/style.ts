import styled from "styled-components/native";
import {colors} from "../../styles/variables";

export const BaseStyledTextInput = styled.TextInput`
  height: 30px;
  color: ${colors.text};
  border: 1px solid ${colors.backgroundSecondary};
  border-radius: 20px;
  width: 200px;
  padding: 0 10px;
`;

export const StyledTextInput = styled(BaseStyledTextInput).attrs({
  placeholderTextColor: colors.textSecondary,
})``;

export const SearchView = styled.View `
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  gap: 10px;
`