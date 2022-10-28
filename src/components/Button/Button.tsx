import { ReactNode } from "react";
import { ButtonStyled } from "./Button.style"

type ButtonProps = {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled>
      {props.children}
    </ButtonStyled>
  );
}