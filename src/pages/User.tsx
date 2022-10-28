import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage, UserPage } from "../components/Feed-User/FeedPage"
import { ReactNode } from "react";


export function User() {
  return (
    <Logado>
      <NavBar></NavBar>
      <UserPage></UserPage>
    </Logado>
  )
}