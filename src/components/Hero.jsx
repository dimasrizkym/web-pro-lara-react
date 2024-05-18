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
          Selamat Datang di Desa Kami.Desa yang asri dengan pemandangan yang memukau.
          </p>
          <a href="#" className="btn btn-primary">
            Jelajahi
          </a>
        </div>
      </div>
    </>
  );
}
