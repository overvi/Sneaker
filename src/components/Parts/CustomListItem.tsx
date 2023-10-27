import { ListItem } from "@chakra-ui/react";
import { Props } from "../entiti/reuseable";

const CustomListItem = ({ children }: Props) => {
  return (
    <ListItem
      cursor="pointer"
      position="relative"
      _before={{
        content: '""',
        width: "100%",
        bg: "orange.100",
        height: "3px",
        position: "absolute",
        bottom: "-2rem",
        transform: "scale(0 , 1)",
      }}
      _hover={{
        _before: {
          transform: "scale(1)",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      {children}
    </ListItem>
  );
};

export default CustomListItem;
