import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
   <>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Contact/>
   </>
    
  );
}

export default App;
