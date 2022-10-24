import './app.css'

function App() {
  return (
    <div className="container">
      <section className="row">
        <div className="col">
          <div className="card">
            <a href="index.html"><img src="assets/logo.png" alt="" /></a>
            <p>LOGIN</p>
            <input className="input" type="email" placeholder="email" />
            <input className="input" type="password" placeholder="senha" />
            <button className="btn" type="submit">entrar</button>
            <a className="cadastre-se" href="cadastro.html">cadastre-se</a>
          </div>
        </div>
    </section>
    </div>
  );
}

export default App