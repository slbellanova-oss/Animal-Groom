import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
