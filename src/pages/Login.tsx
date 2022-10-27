import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"

export default function Login() {
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">LOGIN</p>
        <Input name="nome" placeholder="email"/>
        <Input name="nome" placeholder="senha"/>
        <Button>
        </Button>
      </Forms>
    </Deslogado>
  );
}