import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage, UserPage } from "../components/Feed-User/FeedPage"
import { ReactNode, useState } from "react";
import { UserApi, ListarUsers } from "../server/ApiUser"


export function User() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [apartment, setApartament] = useState <number>();
  const [content, setContent] = useState<string>("");

  const Profile = async (event:Event ) => {
    event.preventDefault();

    const payload = {
      nome,
      email,
      apartment,
      content
    };
    
    try {
      const response = await User();
      // if(response.status !== 201) {
      //   return alert ("Olá");      }
      // alert ("")
       } catch (error) {
       alert ("Sem Publicação")
       }

    };
      
  return (
    <Logado>
      <NavBar></NavBar>
      <UserPage></UserPage>
    </Logado>
  )
}
