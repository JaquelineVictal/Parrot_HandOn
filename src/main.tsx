import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Login from './pages/Login'
import {Feed} from "./pages/Feed"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Feed>
      <h1>teste</h1> 
    </Feed>
  </React.StrictMode>
);
