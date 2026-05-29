import HeroSection from "../component/HeroSection";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
function HeroPage() {
  return (
    <div className="w-full space-y-5 pt-20 overflow-x-hidden ">
      <Navbar />
<HeroSection></HeroSection>
      <Footer></Footer>
    </div>
  );
}

export default HeroPage;