import { createBrowserRouter } from "react-router-dom";
import Login from "../src/pages/Login";
import Usuario from "../src/pages/Usuario";
import Cadastro from "../src/pages/cadastro";
import Feed from "../src/pages/Feed";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/usuario",
    element: <Usuario/>
  },

  {
    path: "/cadastro",
    element: <Cadastro/>
  },
  {
    path: "/feed",
    element: <Feed/>
  }

])