import { createBrowserRouter } from "react-router-dom";
import {Login} from "../src/pages/Login";
import {User} from "./pages/User";
import Cadastro from "../src/pages/cadastro";
import {Feed} from "../src/pages/Feed";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/usuario",
    element: <User />
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