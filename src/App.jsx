import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Experience from "./components/experience";
import Projects from "./components/projects";
import { Sidebar } from "./components/sidebar";
import { ThemeProvider } from "./components/ThemeContext";
import AboutMe from "./components/title";
import Footer from "./footer";
import pageLogo from '../public/logo3.png'

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen overflow-hidden">



        <AnimatePresence mode="wait">
          {showSplash && (
            <motion.div
              key="splash"
              className="fixed inset-0 flex items-center justify-center  z-50"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.3em" }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  letterSpacing: "0em",
                  transition: { duration: 1, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 1.2,
                  transition: { duration: 0.6, ease: "easeInOut" },
                }}
                className="text-5xl sm:text-6xl font-bold text-white"
              >
                <motion.span
                  initial={{ rotate: 0, scale: 1 }}
                  animate={{
                    rotate: 360,
                    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                  exit={{
                    scale: 0.5,
                    opacity: 0,
                    transition: { duration: 0.8, ease: "easeInOut" },
                  }}
                  className="flex items-center justify-center"
                >
                  <motion.img
                    src={pageLogo}
                    width={300}
                    height={300}
                    alt="Logo"
                    initial={{ scale: 1 }}
                    exit={{
                      scale: 0.5,
                      opacity: 0,
                      transition: { duration: 0.8, ease: "easeInOut" },
                    }}
                  />
                </motion.span>

              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {!showSplash && (
          <>
            {/* Animated background */}
            <motion.div animate={{

            }} className=" top-4 text-xs fixed right-8  shadow-sm border p-2 rounded-xl bg-white  z-10   font-medium ">
              {new Date().toLocaleDateString(undefined, {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </motion.div>
            <motion.div
              className="fixed inset-0 -z-10"
              style={{
                backgroundImage: `
                  radial-gradient(circle at center, transparent 2%, rgba(255, 255, 255, 0.9) 50%),
                  linear-gradient(rgba(200, 200, 200, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(200, 200, 200, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: "100% 100%, 10px 10px, 10px 10px",
                backgroundColor: "#e6e6e6",
              }}
              animate={{
                backgroundPosition: [
                  "100px 100px, 100px 100px, 100px 100px",
                  "100px 20px, 20px 100px, 100px 20px",
                  "100px 100px, 100px 100px, 100px 100px",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <Sidebar />

            <motion.div
              className="pb-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
            >
              <AboutMe />
              <div className="px-4 md:px-8 lg:px-16">
                <Experience />
                <Projects />
              </div>
            </motion.div>

            <Footer />
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
