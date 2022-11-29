import About from "./components/about/About";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import GithubOverview from "./components/github/GithubOverview";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Skills from "./components/Skills/Skills";
import SEO from "./SEO";

function App() {
  return (
    <>
      <SEO />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <GithubOverview />
      <Contact />
    </>
  );
}

export default App;
