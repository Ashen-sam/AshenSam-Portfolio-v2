import Experience from "./components/experience";
import Projects from "./components/projects";
import AboutMe from "./components/title";
import Footer from "./footer";
import NavigationBar from "./header";

const App = () => {
  return (
    <><NavigationBar />
      <AboutMe />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}
export default App;