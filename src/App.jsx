import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portafolio from "./components/Portafolio";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Portafolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
