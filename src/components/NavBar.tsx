import {
  Avatar,
  Box,
  Divider,
  Flex,
  Image,
  UnorderedList,
  WrapItem,
} from "@chakra-ui/react";
import cart from "../assets/icon-cart.svg";
import menoIcon from "../assets/icon-menu.svg";
import logo from "../assets/logo.svg";

import avatar from "../assets/image-avatar.png";

import { useState } from "react";
import HideElement from "../responsive/HideElement";
import ShowElement from "../responsive/ShowElement";
import styles from "../styles/style.module.css";
import useCounter from "../zustand/useCounter";
import useActive from "../zustand/zustand";
import Menu from "./Menu";
import CustomBadge from "./Parts/CustomBadge";
import CustomListItem from "./Parts/CustomListItem";
import CartItems from "./PurchaseEmpty";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const { setIsActive, isActive } = useActive();

  const { placeHolder } = useCounter();
  return (
    <>
      <Flex mt={["0", "1rem"]} padding="1rem 1.6rem" justify="space-between">
        <Box className={[styles.NavItems, styles.flex].join(" ")}>
          <HideElement>
            <Image onClick={() => setActive(true)} src={menoIcon} alt="" />
          </HideElement>
          <Image src={logo} alt="" />
          <ShowElement>
            <UnorderedList
              mr="10rem"
              listStyleType="none"
              className={[styles.flex, styles.UnorderedList].join(" ")}
              color="gray.500"
            >
              <CustomListItem>Collections</CustomListItem>
              <CustomListItem className={styles.listItems}>Men</CustomListItem>
              <CustomListItem className={styles.listItems}>
                Woman
              </CustomListItem>
              <CustomListItem className={styles.listItems}>
                About
              </CustomListItem>
              <CustomListItem className={styles.listItems}>
                Contact
              </CustomListItem>
            </UnorderedList>
          </ShowElement>
        </Box>
        <Box className={[styles.NavItems, styles.flex].join(" ")}>
          <Box position="relative">
            {placeHolder > 0 && <CustomBadge>{placeHolder}</CustomBadge>}
            <Image
              onClick={() => setIsActive(isActive == true ? false : true)}
              src={cart}
            />
          </Box>
          <WrapItem>
            <Avatar
              onClick={() => setIsActive(isActive ? true : false)}
              size="sm"
              name="Dan Abrahmov"
              src={avatar}
            />
            <ShowElement>{isActive && <CartItems />}</ShowElement>
          </WrapItem>
        </Box>
      </Flex>
      {active && <Menu onClick={() => setActive(false)} />}
      <Divider mt={[0, 3]} />
    </>
  );
};

export default NavBar;
