import { Text } from "@chakra-ui/react";
import { Props } from "../entiti/reuseable";

const CustomHeading = ({ children }: Props) => {
  return (
    <Text
      letterSpacing="2px"
      fontSize="sm"
      color="orange.100"
      textTransform="uppercase"
      fontWeight="700"
      mb="0.7rem"
    >
      {children}
    </Text>
  );
};

export default CustomHeading;
