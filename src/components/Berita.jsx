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
                src="https://www.infopublik.id/resources/album/september-2021/4__PRAKTIK_MENJAHIT_BAJU1.JPG"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Penulis • Ilham Ramadhan
                </div>
                <div className="heading-3 mt-1 mb-1">
                  <h3 className="heading-3">
                    Program Pelatihan Kewirausahaan untuk Generasi Muda di Kabupaten Cirebon
                  </h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Kabupaten Cirebon, 12 Juni 2024 – Pemerintah Kabupaten Cirebon
                  meluncurkan program pelatihan kewirausahaan untuk Generasi muda
                  dalam rangka mendorong generasi muda untuk terjun ke sektor
                  Industri. Program ini bekerja sama dengan beberapa universitas
                  dan lembaga pelatihan untuk memberikan pembekalan mengenai teknik
                  Penjahitan modern dan manajemen bisnis.
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
                src="https://poskota.co/wp-content/uploads/2023/02/1bb.jpg"
                className="card-img-top"
                alt="edutor"
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Penulis • Ilham Ramadhan
                </div>
                <div className="heading-3 mt-1 mb-1">
                  <h3 className="heading-3">
                    Program Pelatihan Pertanian Modern di Desa Kedawung
                  </h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Desa Kedawung, 15 Juni 2024 – Pemerintah Desa Kedawung bekerja
                  sama dengan Dinas Pertanian Kabupaten menggelar program pelatihan
                  pertanian modern bagi para petani setempat. Program ini bertujuan
                  untuk meningkatkan pengetahuan dan keterampilan petani dalam
                  memanfaatkan teknologi pertanian terkini.
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
                src="https://i0.wp.com/shopee.co.id/inspirasi-shopee/wp-content/uploads/2018/08/accessories-bags-design-1118715.jpg?fit=1600%2C1067&ssl=1"
                className="card-img-top"
                alt="edutor"
              />
              <div className="card-body p-0">
                <div className="text-desc-2 mt-3 bold-600">
                  Penulis • Ilham Ramadhan
                </div>
                <div className="heading-3 mt-1 mb-1">
                  <h3 className="heading-3">
                    Desa Sejahtera Cirebon Kembangkan Produk Lokal melalui Koperasi Wirausaha
                  </h3>
                </div>
                <p className="text-desc-2 text-justify">
                  Desa Pamijahan, Kabupaten Cirebon, 15 Juni 2024 – Desa Pamijahan
                  di Kabupaten Cirebon mengembangkan produk lokal melalui koperasi
                  wirausaha yang baru dibentuk. Koperasi ini berfokus pada pengolahan
                  hasil pertanian dan produk kerajinan tangan warga desa untuk
                  dipasarkan ke luar daerah.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
