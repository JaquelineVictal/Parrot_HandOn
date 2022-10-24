import './app.css'

export default function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center m-4">
      <section className="row m-4">
          <div className="card text-center mt-4">
            <a className="pt-5" href="index.html"><img src="/src/assets/logo.png" alt="" /></a>
            <p>LOGIN</p>
            <input className="input mb-4" type="email" placeholder="email" />
            <input className="input mb-4" type="password" placeholder="senha" />
            <button className="btn mb-4" type="submit">entrar</button>
            <a className="cadastre-se mb-4" href="cadastro.html">cadastre-se</a>
          </div>
    </section>
    </div>
  );
}
