import "./visimisi.css";

export default function VisiMisi() {
  return (
    <div className="container">
      <div className="row section-padding align-items-center">
        <div className="col-md-6 col-sm-12">
          <h2 className="heading-2">Visi Misi</h2>
          <p className="mt-3 text-desc-2 mb-48">
            Mengatasi kesenjangan ilmu IT di antara pendidikan formal dan
            kebutuhan dunia industri. Temukan bagaimana EDUTOR dapat membantu
            Anda melejitkan potensi pendidikan dan karier Anda
          </p>
        </div>
        <div className="col-md-6 col-sm-12 text-center" id="imgTagLine">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="img-home rounded-3"
            alt="Image Header"
          />
        </div>
      </div>
    </div>
  );
}
