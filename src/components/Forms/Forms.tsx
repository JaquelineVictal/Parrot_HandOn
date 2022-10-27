import { ReactNode } from "react";
import { Card } from "./forms.style"

type FormsProps = {
  children: ReactNode;
}

export default function Forms(props: FormsProps){
  return (
    <Card>
      <img id="logo" src="/public/logo.png" alt="" />
      {props.children}
    </Card>
  );
}