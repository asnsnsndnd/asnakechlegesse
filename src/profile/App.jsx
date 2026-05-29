import HeroPage from "./Page/Heropage";
import AboutPage from "./Page/aboutpage";
import ContactPage from "./Page/contactpage";
import ServicePage from "./Page/servicePage";
import WorkPage from "./Page/workPage";
import { BrowserRouter as Router ,Route ,Routes} from "react-router-dom";
function App2() {
  return (
    <div className="flex flex-col">
 <Router>
<Routes>
<Route path="/" Component={HeroPage}></Route>
<Route path="/heropage" Component={HeroPage} ></Route>
<Route path="/aboutpage" Component={AboutPage}></Route>
<Route path="/contactpage" Component={ContactPage}></Route>
<Route path="/servicepage" Component={ ServicePage}></Route>
<Route path="/workpage" Component={WorkPage}></Route>
</Routes>
 </Router>
    </div>
  );
}

export default App2;
