import { chakra } from "@chakra-ui/react";

const CustomImg = chakra("img", {
  baseStyle: {
    position: "relative",
    cursor: "pointer",
    borderRadius: ["0", "12px"],
    boxSize: { base: "100%", md: "sm" },
    objectFit: "cover",
  },
});
export default CustomImg;
