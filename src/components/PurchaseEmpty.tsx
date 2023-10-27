import { Box, Divider, Heading, Text } from "@chakra-ui/react";

import styles from "../styles/style.module.css";

import useCounter from "../zustand/useCounter";
import Price from "./Price";

const PurchaseEmpty = () => {
  const { placeHolder } = useCounter();

  return (
    <Box
      className={[styles.spacing, styles.emptyCart].join(" ")}
      boxShadow="lg"
      position="absolute"
      right={["auto", "10rem"]}
      top={["auto", "4rem"]}
      zIndex={["5", "2"]}
    >
      <Heading fontSize={"x"}>Cart</Heading>
      <Divider />

      {!placeHolder ? (
        <Text padding="3rem 4.8rem">Your Cart is empty!</Text>
      ) : (
        <Price />
      )}
    </Box>
  );
};

export default PurchaseEmpty;
