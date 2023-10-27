import { Hide } from "@chakra-ui/react";
import { ReactNode } from "react";

const HideElement = ({ children }: { children: ReactNode }) => {
  return <Hide above="md">{children}</Hide>;
};

export default HideElement;
