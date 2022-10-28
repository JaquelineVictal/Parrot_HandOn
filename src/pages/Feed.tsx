import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage } from "../components/Feed-User/FeedPage"
import { FormEvent, ReactNode } from "react";
import {Profile} from "../components/Profile/Profile"
import { ApiFeed} from "../server/ApiFeed"


export function Feed() {
  const [name, setName] = useState<string>("");
  const [apartament, setApartament] = useState<string>("");
  const [date, setData] = useState <number>();
  const [hora, setHora] = useState<number>();
  const [post, setPost] = useState<string>;

  
  const Feed = ApiFeed.moradores.map((moradores) => {
    return<Feed name={`${moradores.name} apê - ${moradores.apartment}`} date={moradores.timestamp} postText={moradores.post}/>
  })
    

  return (
    <Logado>
      <NavBar></NavBar>
      <FeedPage>
      </FeedPage>
    </Logado>
  )
}