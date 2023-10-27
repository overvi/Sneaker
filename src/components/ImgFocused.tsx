import { Box, Flex } from "@chakra-ui/react";
import useGetImgProps from "../images/images";
import styles from "../styles/style.module.css";
import ImgChange from "./ImgChange";
import CustomImg from "./Parts/CustomImg";
import ThumbNails from "./ThumbNails";
import { ButtonProps } from "./entiti/reuseable";

const ImgFocused = ({ onClick }: ButtonProps) => {
  const imgSrc = useGetImgProps();
  return (
    <Flex height="100vh" className={[styles.ImgFocused, styles.flex].join(" ")}>
      <Box className={styles.spacing}>
        <Flex justifyContent="end">
          <svg
            onClick={onClick}
            className={styles.close}
            width="14"
            height="15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#fff"
              fill-rule="evenodd"
            />
          </svg>
        </Flex>
        <Box className={[styles.imgChange, styles.flex].join(" ")}>
          <CustomImg boxSize={"md"} src={imgSrc.src} />
          <ImgChange />
        </Box>
        <Flex justify="center">
          <ThumbNails />
        </Flex>
      </Box>
    </Flex>
  );
};

export default ImgFocused;
