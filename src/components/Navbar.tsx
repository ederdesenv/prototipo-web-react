function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm fixed-top">
      <div className="container">
        <a
          className="navbar-brand"
          href="#"
          style={{ paddingTop: 0, paddingBottom: 0, display: 'flex', alignItems: 'center' }}
        >
          <img src="public/imagem/logo.png" alt="OpsDrone Logo" style={{ height: '50px' }} />
          OpsDrone
        </a>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto gap-1">
            <li className="nav-item">
              <a className="nav-link" href="#sobre">Sobre</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#funcionalidades">Funcionalidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tecnologias">Tecnologias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contato">Contato</a>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a className="btn btn-outline-secondary btn-sm w-100" href="#login">Login</a>
            </li>
            <li className="nav-item mt-1 mt-lg-0">
              <a className="btn btn-success btn-sm w-100" href="#cadastro">Cadastre-se</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
