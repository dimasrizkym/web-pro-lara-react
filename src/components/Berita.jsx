import "./berita.css";

export default function Berita() {
  return (
    <section className="container-fluid" id="berita">
      <div className="container">
        <div className="row section-padding">
          <div className="col-md-12 mb-48">
            <div className="d-flex justify-content-between align-items-center">
              <h2 className="heading-2">Berita</h2>
              <a href="#" className="btn btn-primary">
                Lihat Semua
              </a>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <a href="#" className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="edutor"
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Dimas Rizky • 10 Artikel
                </div>
                <div className="heading-3 mt-3 mb-3">
                  <h3 className="heading-3">berita HTML</h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Bersama Dimas Rizky, Anda akan diajak mengeksplorasi dunia
                  HTML melalui 10 artikel beritanya. Dengan cara yang jelas dan
                  mudah dipahami, Dimas membantu Anda memahami dasar-dasar HTML
                  sehingga Anda dapat membangun halaman web dengan percaya diri
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-12">
            <a href="#" className="card border-0">
              <img
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Akbar • 15 Artikel
                </div>
                <div className="heading-3 mt-3 mb-3">
                  <h3 className="heading-3">berita CSS</h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Akbar membawa keahliannya dalam CSS melalui 15 artikel berita
                  yang informatif. Dari dasar hingga teknik lanjutan, setiap
                  artikelnya memberikan wawasan tentang bagaimana menggunakan
                  CSS untuk membuat tata letak dan gaya halaman web yang menarik
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 col-sm-12">
            <a
              href="pages/roadmap/berita-javascript.html"
              className="card border-0"
            >
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="card-img-top"
                alt="edutor"
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Anwar • 12 Artikel
                </div>
                <div className="heading-3 mt-3 mb-3">
                  <h3 className="heading-3">berita JavaScript</h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Ikuti Anwar dalam perjalanan belajar JavaScript melalui 12
                  artikel beritanya. Dengan gaya yang ramah dan contoh yang
                  praktis, Anwar membimbing Anda melalui konsep-konsep dasar dan
                  fitur-fitur JavaScript yang penting untuk meningkatkan
                  kemampuan pemrograman Anda
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
