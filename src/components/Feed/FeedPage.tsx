import { ReactNode } from "react";
import { FeedUserBox, FeedBox, } from "./Feed.style"

type FeedProps = {
  children: ReactNode;
}

export function FeedPage(props: FeedProps) {
  return (
    <div className="container">
      <div className="box-feed col-6 offset-3">
        <FeedUserBox></FeedUserBox>
        <FeedBox></FeedBox>
      </div>
    </div>
  )
}