import About from "./components/About";
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
    </>
  );
}

export default App;
