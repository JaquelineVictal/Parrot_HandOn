import { Card } from "./forms.style"

type FormsProps = {
  children: JSX.Element;
}

export default function Forms(props: FormsProps){
  return (
    <Card>
      <img id="logo" src="/public/logo.png" alt="" />
      {props.children}
    </Card>
  );
}