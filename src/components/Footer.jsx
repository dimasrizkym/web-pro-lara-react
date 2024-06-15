import "./footer.css";
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row section-padding justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3 className="heading-3">
              KEDAWUN<span className="text-primary">G.</span>
            </h3>
            <p className="text-desc-2 mw-350 mt-3 mb-3">
            Selamat Datang di Website Resmi Pemerintah Desa Kedawung.
            </p>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <p className="heading-4 bold-600 mb-4">Kedawung</p>
            <ul>
              <li>
                <a href="#" className="text-desc-1 mb-2">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-desc-1 mb-2">
                  Kontak
                </a>
              </li>
              <li>
                <a href="#" className="text-desc-1">
                  Berita
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <p className="heading-4 bold-600 mb-4">Informasi</p>
            <ul>
              <li>
                <a href="#" className="text-desc-1">
                  Surat
                </a>
              </li>
              <li>
                <a href="#" className="text-desc-1">
                  Agenda
                </a>
              </li>
              <li>
                <a href="#" className="text-desc-1">
                  Social Media
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-12">
            <p className="heading-4 bold-600 mb-4">Dukungan</p>
            <ul>
              <li>
                <a href="#" className="text-desc-1">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-desc-1">
                  Bantuan &amp; Keamanan
                </a>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-7 col-sm-12 contact">
              <div className="row p-3">
                <div className="col-md-6 col-sm-12" id="col-email">
                  <p className="text-desc-1 bold-600 text-white mb-2">Email</p>
                  <p className="text-desc-2 text-white">kedawung@gmail.com</p>
                </div>
                <div className="col-md-6 col-sm-12">
                  <p className="text-desc-1 bold-600 text-white mb-2 ms-md-5 ms-sm-auto">
                    Telephone
                  </p>
                  <p className="text-desc-2 text-white ms-md-5 ms-sm-auto">
                    0214 8888 9999
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="txt-blue" />
          <div className="container d-flex justify-content-center">
            <div className="copyright pb-3">
              © Copyright 2023 <span>PEMERINTAH DESA KEDAWUNG</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
