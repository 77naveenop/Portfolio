import Navbar from "./Component/Navbar/Navbar";
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Skills from "./Pages/Skills/Skills";

function App() {
  return (
   <>
     <BrowserRouter>
     <Navbar/>
     <main>
       <Route path="/" exact  component={Home}>
         <Home/>
       </Route>
       <Route path="/About" component={About} >
         <About/>
       </Route>
       <Route path="/Skills" component={Skills}>
         <Skills/>
       </Route>
       {/* <Route path="/" component={Contact}>
         <Contact/>
       </Route> */}

     </main>
     <Contact/>
     </BrowserRouter>
   </>
    
  );
}

export default App;
