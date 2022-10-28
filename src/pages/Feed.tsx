import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage } from "../components/Feed-User/FeedPage"
import { ReactNode } from "react";
import {Profile} from "../components/Profile/Profile"


export function Feed() {
  return (
    <Logado>
      <NavBar></NavBar>
      <FeedPage>
      </FeedPage>
    </Logado>
  )
}