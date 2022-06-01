import About from "./Components/about/About";
import Home from "./Components/home/Home";
import Skills from "./Components/skills/Skills";
import Certification from "./Components/certification/Certification";
import Work from "./Components/work/Work";
import Footer from "./Components/footer/footer"
import Contact from "./Components/contact/contact"

function App() {
  return (
    <div className="App">
       {/* Home Section */}
        <Home/>
       {/* Home Section */}
       {/* About Section */}
        <About/>
       {/* About Section */}
       {/* Skills Section */}
        <Skills/>
       {/* Skills Section */}
       {/* Certification Section */}
        <Certification/>
       {/* Certification Section */}
       {/* Work Section */}
        {/* <Work/> */}
       {/* Work Section */}
       {/* Contact Section */}
        <Contact/>
       {/* Contact Section */}
       {/* Footer Section */}
        <Footer/>
       {/* Footer Section */}
    </div>
  );
}

export default App;
