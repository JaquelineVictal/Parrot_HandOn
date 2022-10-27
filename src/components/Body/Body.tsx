import { BodyLogado, BodyDeslogado } from "./Body.style"
import { ReactNode } from "react";

type LogadoProps = {
  children: ReactNode;
}

interface DeslogadoProps extends LogadoProps{
}

export function Logado(props: LogadoProps,) {
  return (
    <BodyLogado>
      {props.children}
    </BodyLogado>
  );
}

export function Deslogado(props: DeslogadoProps,) {
  return (
    <BodyDeslogado>
      {props.children}
    </BodyDeslogado>
  )
}