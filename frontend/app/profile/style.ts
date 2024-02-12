import styled from "styled-components/native";
import {colors} from "../../src/styles/variables";

export const ProfileView = styled.View`
  flex: 1;
  margin: 20px;
  display: flex;
  gap: 15px;
  flex-direction: row;
`

export const ImageTitle = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
`

export const ProfileMainView = styled.View`
  display: flex;
  flex-direction: column;
`

export const ProfileInfoView = styled.View`
  margin-bottom: 30px;
`

export const ButtonUpdate = styled.TouchableOpacity`
  width: 94%;
  margin: 0 auto;
  align-items: center;
  border-radius: 10px;
  padding: 10px 0;
  border: 1px solid ${colors.backgroundSecondary};
`
