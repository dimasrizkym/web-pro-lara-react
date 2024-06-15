import "@fortawesome/fontawesome-free/css/all.min.css";
import "./services.css";

export default function Services() {
  return (
    <section className="container" id="services">
      <div className="row section-padding">
        <div className="col-md-3"></div> {/* Kolom kosong untuk posisi tengah */}
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="text-center">
            <h2 className="heading-2">Layanan Desa</h2>
          </div>
          <div className="icon-section">
            <div className="icon-item text-center">
              <i className="fas fa-hands-helping fa-3x"></i>
              <p className="text-desc-2 mt-2">Bantuan Sosial</p>
            </div>
            <div className="icon-item text-center">
              <i className="fas fa-ambulance fa-3x"></i>
              <p className="text-desc-2 mt-2">Mobil Darurat</p>
            </div>
            <div className="icon-item text-center">
              <i className="fas fa-id-card fa-3x"></i>
              <p className="text-desc-2 mt-2">Kartu dan Surat-Surat</p>
            </div>
          </div>
        </div>
        <div className="col-md-3"></div> {/* Kolom kosong untuk posisi tengah */}
      </div>

      {/* Bagian artikel di bawah layanan desa */}
      <div className="row section-padding">
        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100 border-0">
            <img
              src="https://2.bp.blogspot.com/-emKQCSdSL_U/V-jeYzGfY2I/AAAAAAAABtI/tyxnbParNpcPGUTlKJvmzDSQXseda79HQCLcB/s1600/m-064.jpg"
              alt="edutor"
              className="card-img-top rounded-3 fixed-size" 
            />
            <div className="card-body">
              <h3 className="card-title text-desc-1 mb-3">Sejarah Desa Kedawung</h3>
              <p className="card-text text-desc-2 text-justify">
                Pada abad ke-15, ketika Kerajaan Cirebon berdiri, Sunan Gunung Jati memainkan peran penting dalam menyebarkan Agama Islam. Banyak santri datang untuk belajar darinya dan kemudian dikirim kembali ke daerah asal mereka untuk mengajar. Di sebuah padukuhan, Ki Demang Martapura dan Ki Demang Rengas Papak memimpin, tetapi mereka memerintah dengan sewenang-wenang. Mereka meminta jabatan lebih tinggi kepada Sunan Gunung Jati, namun hanya diberi tugas mengurus kuda sebagai ujian kejujuran dan tanggung jawab. Merasa kecewa, Ki Demang Rengas Papak menyesali ambisinya untuk jabatan yang lebih tinggi.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100 border-0">
            <img
              src="https://sorotan24.com/wp-content/uploads/2021/07/k18.jpg"
              alt="nasi jamblang"
              className="card-img-top rounded-3 fixed-size" 
            />
            <div className="card-body">
              <h3 className="card-title text-desc-1 mb-3">Nasi Jamblang</h3>
              <p className="card-text text-desc-2 text-justify">
              Nasi jamblang adalah hidangan khas Cirebon yang terkenal dengan kelezatan dan keunikan rasanya. Makanan ini terdiri dari nasi putih yang disajikan dengan beragam lauk pauk, seperti sambal goreng hati, ayam goreng, tahu, tempe goreng, dan masih banyak lagi pilihan lauk lainnya. Namun, yang membedakan nasi jamblang adalah penggunaan daun jati sebagai wadah atau pembungkus untuk menyajikan lauk-pauk tersebut, memberikan cita rasa khas yang sulit dilupakan. Nasi jamblang tidak hanya memikat lidah, tetapi juga menghadirkan pengalaman kuliner tradisional yang autentik dari daerah Cirebon.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100 border-0">
            <img
              src="https://www.panda.id/wp-content/uploads/Desa-digital-980x506.png"
              alt="nasi jamblang"
              className="card-img-top rounded-3 fixed-size" 
            />
            <div className="card-body">
              <h3 className="card-title text-desc-1 mb-3">Potret Kehidupan Desa di Era Digital</h3>
              <p className="card-text text-desc-2 text-justify">
              Di tengah pesatnya perkembangan teknologi digital, desa-desa di seluruh dunia menghadapi tantangan dan peluang baru. Desa, yang dahulu dikenal dengan kehidupan agrarisnya yang sederhana, kini mulai merasakan dampak transformasi digital. Hal ini tercermin dari adopsi teknologi informasi dan komunikasi yang semakin luas di berbagai pelosok desa.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div className="card h-100 border-0">
            <img
              src="https://ajopiaman.com/wp-content/uploads/2019/12/literasi-digital.png"
              alt="nasi jamblang"
              className="card-img-top rounded-3 fixed-size" 
            />
            <div className="card-body">
              <h3 className="card-title text-desc-1 mb-3">Mengapa Literasi Digital Penting di Era Digitalisasi</h3>
              <p className="card-text text-desc-2 text-justify">
              Di tengah kemajuan teknologi yang pesat, literasi digital semakin menjadi kebutuhan yang mendesak bagi setiap individu. Literasi digital bukan lagi sekadar kemampuan menggunakan perangkat lunak atau perangkat keras komputer, melainkan kemampuan untuk memahami, mengevaluasi, dan menggunakan informasi secara efektif dari berbagai platform digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
