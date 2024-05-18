export default function About() {
  return (
    <div className="container">
      <div className="row section-padding d-flex space-between align-items-center">
        <div className="col-md-6 col-sm-12 text-center" id="imgTagLine">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-about rounded-3"
            alt="Image Header"
          />
        </div>
        <div className="col-md-6 col-sm-12 txt-about" id="tagLine">
          <h2 className="heading-2">About</h2>
          <p className="mt-3 text-desc-2 mb-48">
          Desa Kedawung adalah salah satu Desa yang berada di Kecamatan Kedawung Kabupaten Cirebon dengan luas wilayah 45,475 Ha dengan jumlah penduduk sebanyak 5.292 jiwa terdiri dari 2.508 laki-laki dan 2.784 perempuan dengan jumlah kepala keluarga 1.025 kepala keluarga.
          </p>
        </div>
      </div>
    </div>
  );
}
