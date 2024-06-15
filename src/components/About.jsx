export default function About() {
  return (
    <div className="container">
      <div className="row section-padding d-flex space-between align-items-center">
        <div className="col-md-6 col-sm-12 text-center" id="imgTagLine">
          <img
            src="https://1.bp.blogspot.com/-e8Wl6VDnzUk/VJK_aEAWD6I/AAAAAAAAADw/aXZn_7KtNsI/s1600/IMG-20141218-01828.jpg"
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
