import "./services.css";

export default function Services() {
  return (
    <section className="container" id="services">
      <div className="row section-padding">
        <div className="col-md-6 col-sm-12 mb-32">
          <h2 className="heading-2">Pelayanan Desa</h2>
          <p className="text-desc-2">
            Pencapaian kami untuk mengatasi kesenjangan ilmu IT di antara
            pendidikan formal dan kebutuhan dunia industri
          </p>
        </div>
        <div className="col-md-12">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12 text-center">
              <img
                src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="edutor"
                className="rounded-3"
              />
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="row">
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Artikel Tutorial</h3>
                  <p className="text-desc-2">
                    lebih dari 35 artikel tutorial yang siap membantu Anda
                    menjadi ahli dalam dunia IT
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Pembaca</h3>
                  <p className="text-desc-2">
                    Lebih dari 1000 pembaca telah bergabung dan merasa puas
                    dengan EDUTOR
                  </p>
                </div>
              </div>
              <div className="row mt-32">
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Penulis Berpengalaman</h3>
                  <p className="text-desc-2">
                    Menghadirkan penulis berpengalaman yang membuat setiap
                    tulisan mudah dipahami
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Modul Belajar</h3>
                  <p className="text-desc-2">
                    Pilih jalur keterampilan yang kami tawarkan untuk memandu
                    langkah Anda menjadi ahli IT
                  </p>
                </div>
              </div>
              <div className="row mt-32">
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Penulis Berpengalaman</h3>
                  <p className="text-desc-2">
                    Menghadirkan penulis berpengalaman yang membuat setiap
                    tulisan mudah dipahami
                  </p>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                  <h3 className="text-desc-1">Modul Belajar</h3>
                  <p className="text-desc-2">
                    Pilih jalur keterampilan yang kami tawarkan untuk memandu
                    langkah Anda menjadi ahli IT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
