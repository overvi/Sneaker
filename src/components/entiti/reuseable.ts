import { ReactNode } from "react";

export interface Props {
    children?: ReactNode;
    className? : string
}

export interface  ButtonProps extends Props{
    onClick?: () => void;
    disabled?: boolean
}

export interface IconButtonProps extends Props{
    onClick?: () => void;
    disabled?: boolean;
    icon :  any;
}