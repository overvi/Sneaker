import { IconButton } from "@chakra-ui/react";
import { IconButtonProps } from "../entiti/reuseable";

const ImgChanger = ({
  className,
  children,
  onClick,
  icon,
}: IconButtonProps) => {
  return (
    <IconButton
      className={className}
      onClick={onClick}
      aria-label=""
      isRound={true}
      icon={icon}
      bg="#fff"
    >
      {children}
    </IconButton>
  );
};

export default ImgChanger;
