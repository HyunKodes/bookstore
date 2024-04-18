import { Text } from "./styles";

interface IProps {
  text: string;
}

export const Title = ({ text }: IProps) => {
  return <Text>{text}</Text>;
};
