import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Project from "./components/Project";
import Community from "./components/Community";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Project />
      <Community />
    </div>
  );
}

export default App;
