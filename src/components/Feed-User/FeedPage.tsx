import { ReactNode } from "react";
import { FeedUserBox, FeedBox, } from "./Feed.style"
import {Profile} from "../Profile/Profile"
import { ButtonPubli } from "../Button/Button.style";

type FeedProps = {
  children: ReactNode;
}

export function FeedPage(props: FeedProps) {
  return (
    <div className="container">
      <div className="box-feed col-12 col-lg-6 col-xxl-6 offset-lg-3 offset-xxl-3">
        <FeedUserBox>
          <Profile src="/public/icon-perfil-1.svg"/>
          <div className="div-input col-8 col-lg-8 col-xxl-9 mt-5 me-3">
            <input className="input mb-3" type="text" />
          <ButtonPubli>publicar</ButtonPubli>
          </div>
        </FeedUserBox>
        <FeedBox> 
          <div className="Publi">
          <Profile src="/public/icon-perfil-5.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-2.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-3.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-4.svg"/>
          </div>
        </FeedBox>
      </div>
    </div>
  )
}

export function UserPage() {
  return (
  <div className="container">
      <div className="col-12 col-lg-6 col-xxl-6 offset-lg-3 offset-xxl-3">
        <FeedUserBox>
          <Profile src="/public/icon-perfil-1.svg"/>
          <div className="ms-3 mt-5">
            <p className="mb-1">Nome e sobrenome</p>
            <p className="m-0">apê 82</p>
            <p className="m-0">mail@gmail.com</p>
          </div>
        </FeedUserBox>
        <FeedBox> 
          <div className="Publi">
          <Profile src="/public/icon-perfil-5.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-2.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-3.svg"/>
          </div>
          <div className="Publi">
          <Profile src="/public/icon-perfil-4.svg"/>
          </div>
        </FeedBox>
      </div>
    </div>
    );
}