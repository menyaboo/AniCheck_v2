import { ProfileInfoView } from './style';
import {FC} from "react";
import { Text } from '../../../styles/global';
import {ProfileInfo} from "../../../types/ProfileInfo";

export const Info: FC<ProfileInfo> = ({ name, number }) => (
  <ProfileInfoView>
    <Text $size='h3'>{number}</Text>
    <Text $size='h5'>{name}</Text>
  </ProfileInfoView>
)
