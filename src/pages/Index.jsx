import About from "../components/About";
import Berita from "../components/Berita";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import VisiMisi from "../components/VisiMisi";

export default function Index() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <About />
        <VisiMisi />
        <Services />
        <Berita />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
