import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage } from "../components/Feed-User/FeedPage"
import { FormEvent, ReactNode } from "react";
import {Profile} from "../components/Profile/Profile"
import { ApiFeed} from "../server/ApiFeed"


export function Feed() {
  const [nome, setNome] = useState<string>("");
  const [apartament, setApartament] = useState<string>("");
  const [data, setData] = useState <number>();
  const [hora, setHora] = useState<number>();
  const [post, setPost] = useState<string>;

  const Profile = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
    nome,   
    apartament,
    data,
    hora,
    post,
    };
    

  return (
    <Logado>
      <NavBar></NavBar>
      <FeedPage>
      </FeedPage>
    </Logado>
  )
}