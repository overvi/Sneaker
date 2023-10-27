import img1 from "../assets/image-product-1.jpg";
import img2 from "../assets/image-product-2.jpg";
import img3 from "../assets/image-product-3.jpg";
import img4 from "../assets/image-product-4.jpg";

import thumbnail1 from "../assets/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/image-product-4-thumbnail.jpg";
import useImages from "../zustand/useImages";


export { img1, img2, img3, img4, thumbnail1, thumbnail2, thumbnail3, thumbnail4 };


export const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
];

export const thumbnails = [
    { id: 1, src: thumbnail1 },
    { id: 2, src: thumbnail2 },
    { id: 3, src: thumbnail3 },
    { id: 4, src: thumbnail4 },
]


class GetImgProps {
    src: string;
  
    constructor(selectedImage: number) {
      const image = images.find((img) => img.id === selectedImage);
      this.src = image?.src || '';
    }
  }
  
  const useGetImgProps = () => {
    const { selectedImage } = useImages();
    return new GetImgProps(selectedImage);
  }
  
  export default useGetImgProps