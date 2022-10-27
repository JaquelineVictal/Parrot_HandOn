import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"

export default function Login() {
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-5">LOGIN</p>
        <Input name="nome" placeholder="nome"/>
      </Forms>
    </Deslogado>
  );
}