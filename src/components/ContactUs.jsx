import "./contactus.css";
export default function ContactUs() {
  return (
    <section className="sectionContactUs section-padding">
      <div className="bg-white" id="contactUs">
        <div className="bg-blue rounded-3 row align-items-center p-4">
          <div className="col-sm-12 mb-5 text-center">
            <h3 className="heading-3 text-white">Hubungi Kami!</h3>
            <p className="text-white">Pemerintah Desa Kedawung</p>
          </div>
          <form className="col-sm-12">
            <div className="d-flex flex-column gap-4">
              <input
                type="text"
                placeholder="Nama Lengkap"
                className="form-control border-0"
              />
              <input
                type="text"
                placeholder="Input email"
                className="form-control border-0"
              />
              <textarea
                rows={3}
                placeholder="Pesan"
                className="form-control border-0"
                defaultValue={""}
              />
              <a href="#" className="btn btn-secondary align-self-end ">
                Submit
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
