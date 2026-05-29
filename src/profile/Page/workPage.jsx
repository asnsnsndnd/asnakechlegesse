import Work from "../component/work";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";


function WorkPage() {
  return (
    <div className="min-h-screen pt-20  relative flex flex-col">
      <Navbar />
<Work></Work>

      <Footer></Footer>
    </div>
  );
}

export default WorkPage;