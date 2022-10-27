import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Login'
import "./App.css"
import NavBar from "./components/NavBar/NavBar"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
);
