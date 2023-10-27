import { Box } from "@chakra-ui/react";
import NextPhoto from "../icons/NextPhoto";
import PreviousPhoto from "../icons/PreviousPhoto";
import styles from "../styles/style.module.css";
import useImages from "../zustand/useImages";
import ImgChanger from "./Parts/ImgChanger";

const ImgChange = () => {
  const { next, previous } = useImages();
  return (
    <Box className={[styles.flex, styles.ImgChangeWrap].join(" ")}>
      <ImgChanger
        className={styles.left}
        onClick={() => previous()}
        icon={<PreviousPhoto />}
      />
      <ImgChanger
        className={styles.right}
        onClick={() => next()}
        icon={<NextPhoto />}
      />
    </Box>
  );
};

export default ImgChange;
