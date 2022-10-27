import { Logado } from "../Body/Body"
import { NavStyle } from "./NavBar.style"

export default function NavBar() {    
    return(        
      
        <NavStyle>
        <img className="nav-logo" src="/logo-horizontal-colorido.png" alt="" />
        <div className="me-5">
          <strong className="strong me-1">
            Olá, usuário! | 
            </strong>
            <a className="sair" href="">Sair</a>
          </div>
        </NavStyle>
      
    )
}