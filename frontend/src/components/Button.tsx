import {ButtonStyled, Text} from "../styles/global";
import {FC} from "react";

type Props = {
  onPress?: () => void,
  value: string
}

export const Button:FC<Props> = ({onPress, value}) => (
  <ButtonStyled onPress={onPress}>
    <Text $size="h4">{value}</Text>
  </ButtonStyled>
)