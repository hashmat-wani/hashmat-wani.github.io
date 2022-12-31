import About from "./components/about/About";
import Certifications from "./components/certifications/Certifications";
import Concepts from "./components/miniJsProjects/MiniJsProjects";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import GithubOverview from "./components/github/GithubOverview";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import SEO from "./SEO";

function App() {
  return (
    <>
      <SEO />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Concepts />
      <Certifications />
      <GithubOverview />

      <Contact />
    </>
  );
}

export default App;
