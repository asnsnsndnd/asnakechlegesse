import About from "../component/about";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

function AboutPage() {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <Navbar />
      <main className="pt-24 pb-12"> 
        {/* Added padding to prevent Navbar overlap */}
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;