import { Inputstyle } from "./Input.style"

type InputProps = {
  name: string;
  placeholder:string;
}

export default function Input(props: InputProps) {
  return (
    <Inputstyle name={props.name} placeholder={props.placeholder}>
    </Inputstyle>
  );
}