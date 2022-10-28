import { Logado } from "../Body/Body"
import { NavStyle } from "./NavBar.style"
import { CustomLink } from "../../link.style"

export default function NavBar() {    
    return(        
      
        <NavStyle>
        <img className="nav-logo" src="/logo-horizontal-colorido.png" alt="" />
        <div className="me-5">
          <strong className="strong me-1">
            Olá, usuário! | 
          </strong>
            <CustomLink to={"/"} color={"#6033AA"} fontSize={16}>sair</CustomLink>
          </div>
        </NavStyle>
      
    )
}