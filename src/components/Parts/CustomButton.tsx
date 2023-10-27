import { Button } from "@chakra-ui/react";
import { ButtonProps } from "../entiti/reuseable";

const CustomButton = ({
  children,
  className,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      className={className}
      onClick={onClick}
      w="100%"
      bg="orange.100"
      color="#fff"
    >
      {children}
    </Button>
  );
};

export default CustomButton;
