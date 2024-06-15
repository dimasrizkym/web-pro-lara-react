import "./visimisi.css";

export default function VisiMisi() {
  return (
    <div className="container" id="visiMisi">
      <div className="row section-padding align-items-center">
        <div className="col-md-6 col-sm-12">
          <h2 className="heading-2">Visi dan Misi Desa Kedawung</h2>
          <p className="mt-3 text-desc-2 mb-48">
          <strong>Visi:</strong> Desa Kedawung yang Maju, Mandiri, dan Sejahtera melalui Pembangunan Berkelanjutan.
          </p>
          <h6 className="mt-4 fw-bold">Misi:</h6>
          <ul className="mt-3 text-desc-2 mb-48">
            <li>
              <strong>Meningkatkan Infrastruktur dan Pelayanan Publik</strong>
              <ul>
                <li>Pembangunan dan perbaikan infrastruktur desa.</li>
                <li>Peningkatan akses pelayanan publik.</li>
              </ul>
            </li>
            <li>
              <strong>Mendorong Pertumbuhan Ekonomi Lokal</strong>
              <ul>
                <li>Pengembangan sektor pertanian, perikanan, dan UMKM.</li>
                <li>Penciptaan lapangan kerja baru.</li>
              </ul>
            </li>
            <li>
              <strong>Meningkatkan Pendidikan dan Keterampilan</strong>
              <ul>
                <li>Penyediaan fasilitas pendidikan berkualitas.</li>
                <li>Pelatihan keterampilan bagi masyarakat.</li>
              </ul>
            </li>
            <li>
              <strong>Melestarikan Budaya dan Kearifan Lokal</strong>
              <ul>
                <li>Pelestarian tradisi dan budaya lokal.</li>
                <li>Penguatan ikatan sosial melalui kegiatan budaya.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-md-6 col-sm-12 text-center" id="imgTagLine">
          <img
            src="https://images.unsplash.com/photo-1716731067858-7164edd4558f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-home rounded-3"
            alt="Image Header"
          />
        </div>
      </div>
    </div>
  );
}
