import { Box, HStack, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { thumbnails } from "../images/images";
import ShowElement from "../responsive/ShowElement";
import styles from "../styles/style.module.css";
import useImages from "../zustand/useImages";

const ThumbNails = () => {
  const { setSelectedImage } = useImages();

  useEffect(() => {
    window.addEventListener("load", () => {
      const focusableEl = document.querySelector(
        ".defaultPhoto"
      ) as HTMLInputElement;
      if (focusableEl) {
        focusableEl.focus();
      }
    });
  }, []);
  return (
    <ShowElement>
      <HStack spacing={6} mt={6} w="24rem" className={styles.img}>
        {thumbnails.map((thumbnail, index) => (
          <Box key={index} className={styles.thumbnailCont}>
            <Image
              cursor="pointer"
              onClick={() => setSelectedImage(index + 1)}
              src={thumbnail.src}
              className={[styles.thumbnails, "defaultPhoto"].join(" ")}
              tabIndex={0}
            />
          </Box>
        ))}
      </HStack>
    </ShowElement>
  );
};

export default ThumbNails;
