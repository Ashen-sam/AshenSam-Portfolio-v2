import { motion } from "framer-motion";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { Sidebar } from "./components/sidebar";
import { ThemeProvider } from "./components/ThemeContext";
import AboutMe from "./components/title";
import Footer from "./footer";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen">
        {/* Animated background */}
        <motion.div
          className="fixed inset-0 -z-10"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, transparent 2%, rgba(255, 255, 255, 0.9) 50%),
              linear-gradient(rgba(200, 200, 200, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(200, 200, 200, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '100% 100%, 10px 10px, 10px 10px',
            backgroundColor: '#e6e6e6'
          }}
          animate={{
            backgroundPosition: [
              "100px 100px, 100px 100px, 100px 100px",
              "100px 20px, 20px 100px, 100px 20px",
              "100px 100px, 100px 100px, 100px 100px"
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <Sidebar />

        {/* Main content */}
        <div className="pb-24">
          <AboutMe />
          <div className="px-4 md:px-8 lg:px-16">
            <Experience />
            <Projects />
          </div>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
