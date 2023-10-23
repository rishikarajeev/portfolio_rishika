import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import { Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import Contact from "./Pages/Contact";
import Mywork from "./Pages/Mywork"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/work" element={<Mywork/>}></Route>
    </Routes>

  );
}

export default App;
