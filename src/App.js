import './App.css';
import { useLenis } from './hooks/useLenis';
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  useLenis(); // Initialize Lenis smooth scroll

  return (
    <div className="App">
      <Hero />
      <Aboutme />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
