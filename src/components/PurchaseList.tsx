import { Box, Flex, Image, Text } from "@chakra-ui/react";
import garbage from "../assets/icon-delete.svg";
import { img1 } from "../images/images";
import styles from "../styles/style.module.css";
import useCounter from "../zustand/useCounter";
import CustomButton from "./Parts/CustomButton";
import { Props } from "./Price";

const PurchaseList = ({ price }: Props) => {
  const { placeHolder, setPlaceHolder } = useCounter();
  const calculatedPrice = (price ?? 0) * placeHolder + ".00";
  return (
    <>
      <Flex className={[styles.flex, styles.PurchaseList].join(" ")}>
        <Image borderRadius="8px" boxSize="50px" src={img1} alt="" />
        <Box>
          <Text>Fall limited edition Sneakers</Text>
          <Text>
            ${price}.00 * {placeHolder} <strong>${calculatedPrice}</strong>
          </Text>
        </Box>
        <Image
          onClick={() => {
            setPlaceHolder(0);
          }}
          src={garbage}
        />
      </Flex>
      <CustomButton className={styles.button}>Check Out</CustomButton>
    </>
  );
};

export default PurchaseList;
