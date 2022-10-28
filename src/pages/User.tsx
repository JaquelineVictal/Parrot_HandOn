import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage, UserPage } from "../components/Feed-User/FeedPage"
import { ReactNode, useState } from "react";


export function User() {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [apartment, setApartament] = useState <number>();
  const [content, setContent] = useState<string>("");

  const User = async (event:Event ) => {
    event.preventDefault();

    const payload = {
      nome,
      email,
      apartment,
      content
    }
  }
    
  return (
    <Logado>
      <NavBar></NavBar>
      <UserPage></UserPage>
    </Logado>
  )
}