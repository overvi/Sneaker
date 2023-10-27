import { Badge, Box } from "@chakra-ui/react";
import { Props } from "../entiti/reuseable";

function CustomBadge({ children }: Props) {
  return (
    <Box position="relative">
      <Badge
        borderRadius="100vw"
        right="-.5em"
        position="absolute"
        color="#fff"
        bg="orange.100"
        paddingX="0.4rem"
        fontSize="0.5rem"
        top="-.8em"
      >
        {children}
      </Badge>
    </Box>
  );
}

export default CustomBadge;
