import { Deslogado } from "../components/Body/Body"
import Forms from '../components/Forms/Forms';
import Input from "../components/Input/index"
import { Button } from "../components/Button/Button"
import { Register } from "../server/ApiLogin";

export default function Register() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");  
  const [apartment, setapartment] = useState<number>();
  const [photo, setLink] = useState<string>("");
  
  async function (event: FormEvent) {
    event.preventDefault()

    if (password === confirmPassword) {
      const infoUser = {
        name, email, apartment, password
      }
      try {
        // const response = await registerUser(infoUser)
      } catch(error) {
        console.error()
      }
    
  
  return (
    <Deslogado>
      <Forms>
        <p className="fs-3 pt-3 fw-semibold mb-4">CADASTRO</p>
        <Input type="text" name="nome" placeholder="nome" value={name} onChange={(event) => setName(event.target.value)}/>
        <Input type="email" name="email" placeholder="email"/ value={email} onChange={(event) => setEmail(event.target.value)}>
        <Input type="password" name="senha" placeholder="senha" value={password} onChange={(event) => setPassword(event.target.value)} />
        <Input type="password" name="confirmar senha" placeholder="confirmar senha" value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Input type="text" name="unidade/apartamento" placeholder="unidade/apartamento" value={apartment} onChange={(event) => setapartment(event.target.value)}/>
        <Input type="text" name="link da foto" placeholder="link da foto" value={photo} onChange={(event) => setLink(event.target.value)}/>
        <Button>entrar!</Button>
      </Forms>
    </Deslogado>
  );
}