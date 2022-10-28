import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"

export default function Login() {
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">CADASTRO</p>
        <Input name="nome" placeholder="nome"/>
        <Input name="email" placeholder="email"/>
        <Input name="senha" placeholder="senha"/>
        <Input name="confirmar senha" placeholder="confirmar senha"/>
        <Input name="unidade/apartamento" placeholder="unidade/apartamento"/>
        <Input name="link da foto" placeholder="link da foto"/>
        <Button>entrar!</Button>
      </Forms>
    </Deslogado>
  );
}