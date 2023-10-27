import { Box } from "@chakra-ui/react";

import useActive from "../zustand/zustand";
import ImgChange from "./ImgChange";

import { useState } from "react";
import useGetImgProps, { img1 } from "../images/images";
import HideElement from "../responsive/HideElement";
import ShowElement from "../responsive/ShowElement";
import styles from "../styles/style.module.css";
import ImgFocused from "./ImgFocused";
import CustomImg from "./Parts/CustomImg";
import PurchaseEmpty from "./PurchaseEmpty";

const MainImg = () => {
  const { isActive } = useActive();
  const [showFocus, setShowFucos] = useState(false);
  const imgSrc = useGetImgProps();

  return (
    <>
      <ShowElement>
        {showFocus && (
          <Box className={styles.overlay}>
            <Box
              m="auto"
              left={0}
              right={0}
              top={0}
              bottom={0}
              zIndex={999}
              position="absolute"
            >
              <ImgFocused
                className={showFocus ? styles.show : ""}
                onClick={() => setShowFucos(false)}
              />
            </Box>
          </Box>
        )}
      </ShowElement>
      <Box>
        <Box className={[styles.imgChange, styles.flex].join(" ")}>
          <HideElement>{isActive && <PurchaseEmpty />}</HideElement>
          <CustomImg
            cursor="pointer"
            onClick={() => {
              setShowFucos(true);
            }}
            src={showFocus ? img1 : imgSrc.src}
          />
          <HideElement>
            <ImgChange />
          </HideElement>
        </Box>
      </Box>
    </>
  );
};

export default MainImg;
