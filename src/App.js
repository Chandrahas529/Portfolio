import './App.css';
import Hero from "./components/Hero";
import Aboutme from "./components/Aboutme";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
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
