import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container d-flex justify-content-between">
        <a className="navbar-brand" href="index.html">
          <h3 className="heading-3">
            KEDAWUN<span className="text-primary">G.</span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Profile Desa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Struktur Desa
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Berita
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
