import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import cart from "../assets/icon-cart-white.svg";
import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import styles from "../styles/style.module.css";
import useCounter from "../zustand/useCounter";
import NavBar from "./NavBar";
import CustomButton from "./Parts/CustomButton";
import CustomHeading from "./Parts/CustomHeading";
import TextOffer from "./Parts/TextOffer";

const Purchase = () => {
  const { add, decrese, state, setPlaceHolder, reset, placeHolder } =
    useCounter();

  const isLargeScreen = useMediaQuery("(min-width: 400px)");
  return (
    <>
      <Box
        mt={["0", "5rem"]}
        mx={["auto", "0"]}
        maxW="30rem"
        className={isLargeScreen ? styles.spacingLarge : styles.spacing}
        padding={4}
      >
        <CustomHeading>sneaker company</CustomHeading>
        <Heading lineHeight={1}>Fall Limited Edition Sneakers</Heading>
        <Text color="gray.500">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Text>
        <Flex
          justify={["space-between", "flex-start"]}
          direction={["row", "column"]}
          align={["center", "start"]}
        >
          <Flex gap={2} align="center">
            <Heading fontSize="3xl">$125.00</Heading>
            <Badge fontSize="1em" bgColor="orange.200" color="orange.100">
              50%
            </Badge>
          </Flex>
          <TextOffer>$250.00</TextOffer>
        </Flex>
        <Flex className={styles.flex} direction={["column", "column", "row"]}>
          <Box
            className={[styles.flex, styles.quantityBox].join(" ")}
            padding={3}
            bg="blue.400"
            w={["100%", "100%", "40%"]}
          >
            <Image onClick={() => decrese()} src={minus}></Image>
            <Text fontWeight="700">{state}</Text>
            <Image onClick={() => add()} src={plus}></Image>
          </Box>
          <CustomButton
            className={styles.button}
            onClick={() => {
              setPlaceHolder(state > 0 ? state + placeHolder : placeHolder);
              reset();
              <NavBar />;
            }}
          >
            <Image src={cart}></Image>
            Add to cart
          </CustomButton>
        </Flex>
      </Box>
    </>
  );
};

export default Purchase;
