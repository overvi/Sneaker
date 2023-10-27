import { Show } from "@chakra-ui/react";
import { ReactNode } from "react";

const ShowElement = ({ children }: { children: ReactNode }) => {
  return <Show above="md">{children}</Show>;
};

export default ShowElement;
