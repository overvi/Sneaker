import { Text } from "@chakra-ui/react";
import { Props } from "../entiti/reuseable";

const TextOffer = ({ children }: Props) => {
  return (
    <Text
      mt={["0", "0.5rem"]}
      fontWeight="700"
      color="gray.400"
      textDecor="line-through"
    >
      {children}
    </Text>
  );
};

export default TextOffer;
