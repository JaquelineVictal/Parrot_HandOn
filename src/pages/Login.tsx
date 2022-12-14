import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"
import NavBar from "../components/NavBar/NavBar";
import { CustomLink } from "../link.style";

export function Login() {
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">LOGIN</p>
        <Input type="email" name="email" placeholder="email"/>
        <Input type="password" name="senha" placeholder="senha"/>
        <Button>entrar!</Button>
        <CustomLink to={"/cadastro"} color={"#555555"} fontSize={18}>cadastre-se</CustomLink>
        <CustomLink to={"/feed"} color={"#555555"} fontSize={18}>feed</CustomLink>
        <CustomLink to={"/usuario"} color={"#555555"} fontSize={18}>user</CustomLink>
      </Forms>
    </Deslogado>
  );
}