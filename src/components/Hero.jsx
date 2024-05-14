import "./hero.css";

export default function Hero() {
  return (
    <>
      <div className="container">
        <div
          className="section-padding-hero d-flex flex-column align-items-center"

        >
          <h1 className="heading-1 text-center">Website Desa Kedawung</h1>
          <p className="mt-3 text-desc-2 text-center mb-48">
            Mengatasi kesenjangan ilmu IT di antara pendidikan formal dan
            kebutuhan dunia industri. Temukan bagaimana EDUTOR dapat membantu
            Anda melejitkan potensi pendidikan dan karier Anda
          </p>
          <a href="#" className="btn btn-primary">
            Jelajahi
          </a>
        </div>
      </div>
    </>
  );
}
