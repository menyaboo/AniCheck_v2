import {FC} from "react";
import Icon from 'react-native-vector-icons/MaterialIcons';
import {router} from "expo-router";

import {INavLink} from "../../../../types/INavLink";
import {NavLinkView} from "./style";
import {Text} from "../../../../styles/global";

export const NavLink: FC<INavLink> = ({ name, icon, screenName }) => (
  <NavLinkView onPress={() => router.push(screenName)}>
    <Icon name={icon} size={20} color="#FFF" />
    <Text>{name}</Text>
  </NavLinkView>
)