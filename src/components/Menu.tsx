import { Box, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import close from "../assets/icon-close.svg";
import HideElement from "../responsive/HideElement";
import styles from "../styles/style.module.css";
import { ButtonProps } from "./entiti/reuseable";

const Menu = ({ onClick }: ButtonProps) => {
  return (
    <HideElement>
      <Box width="60%" padding="1rem 1.6rem" className={styles.spacing}>
        <Image mb="2rem" onClick={onClick} src={close} alt="" />
        <UnorderedList
          m={0}
          listStyleType="none"
          color="gray.500"
          className={[styles.flex, styles.Menu, styles.List].join(" ")}
        >
          <ListItem>Collections</ListItem>
          <ListItem>Men</ListItem>
          <ListItem>Woman</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Contact</ListItem>
        </UnorderedList>
      </Box>
    </HideElement>
  );
};

export default Menu;
