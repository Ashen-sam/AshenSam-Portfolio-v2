import Projects from "./components/projects";
import AboutMe from "./components/title";
import Footer from "./footer";
import NavigationBar from "./header";

const App = () => {
  return (
    <><NavigationBar />
      <AboutMe />
      <Projects />
      <Footer />
    </>
  )
}
export default App;