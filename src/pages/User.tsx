import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage } from "../components/Feed-User/FeedPage"
import { ReactNode } from "react";


export function User() {
  return (
    <Logado>
      <NavBar></NavBar>
      <FeedPage>
      </FeedPage>
    </Logado>
  )
}