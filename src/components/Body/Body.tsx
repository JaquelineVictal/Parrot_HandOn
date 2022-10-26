import { BodyLogado, BodyDeslogado } from "./Body.style"

type LogadoProps = {
  children: JSX.Element;
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