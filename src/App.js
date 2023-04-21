import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './css/App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home'
import About from './componets/About'
import Contact from './componets/Contact'
import Service from './componets/Service'
import Section from "./componets/Section";
import Section1 from "./componets/Section1";
import Footer from "./componets/Footer";
function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Section/>
      <Section1/>
      <Contact/>
      <Footer/>
      <Routes>
          <Route exact path="#home" element={<Home/>} />
          <Route exact path="#about" element= {<About/>}/>
          <Route exact path="#contact" element= {<Contact/>}/>
          <Route exact path="#service" element= {<Service/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
