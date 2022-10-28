import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"
import NavBar from "../components/NavBar/NavBar";
import { CustomLink } from "../link.style";
import {Login} from "../server/ApiLogin";

export function Login() {
 
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function Login(event: onChange) {
    event.preventDefault()
  }


  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">LOGIN</p>
        <Input type="email" name="email" placeholder="email" value= {email} onChange={(event) => setEmail(event.target.value)}/>
        <Input type="password" name="senha" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Button>entrar!</Button>
        <CustomLink to={"/cadastro"} color={"#555555"} fontSize={18}>cadastre-se</CustomLink>
        <CustomLink to={"/feed"} color={"#555555"} fontSize={18}>feed</CustomLink>
        <CustomLink to={"/usuario"} color={"#555555"} fontSize={18}>user</CustomLink>
      </Forms>
    </Deslogado>
  );
}