import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Main from "./components/Main";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="h-screen">
        <Header />
        <Main />
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
