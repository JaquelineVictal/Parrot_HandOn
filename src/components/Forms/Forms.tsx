import { ReactNode } from "react";
import { Card } from "./forms.style";
import {CustomLink} from "../../link.style"

type FormsProps = {
  children: ReactNode;
}

export default function Forms(props: FormsProps){
  return (
    <Card>
      <CustomLink to={"/"} color="" fontSize={0}>
      <img id="logo" src="/public/logo.png" alt="" />
      </CustomLink>
      {props.children}
    </Card>
  );
}