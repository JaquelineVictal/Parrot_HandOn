import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"

export default function Login() {
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">CADASTRO</p>
        <Input type="text" name="nome" placeholder="nome"/>
        <Input type="email" name="email" placeholder="email"/>
        <Input type="password" name="senha" placeholder="senha"/>
        <Input type="password" name="confirmar senha" placeholder="confirmar senha"/>
        <Input type="text" name="unidade/apartamento" placeholder="unidade/apartamento"/>
        <Input type="text" name="link da foto" placeholder="link da foto"/>
        <Button>entrar!</Button>
      </Forms>
    </Deslogado>
  );
}