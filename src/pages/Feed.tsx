import  NavBar from "../components/NavBar/NavBar"
import { Logado } from "../components/Body/Body"
import { FeedPage } from "../components/Feed/FeedPage"
import { ReactNode } from "react";

type FeedProps = {
  children: ReactNode;
}

export function Feed(props: FeedProps) {
  return (
    <Logado>
      <NavBar></NavBar>
      <FeedPage>
      </FeedPage>
    </Logado>
  )
}