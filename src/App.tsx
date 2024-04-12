import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
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
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
