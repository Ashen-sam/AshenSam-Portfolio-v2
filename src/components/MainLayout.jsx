import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import pageLogo from '../../public/og-image.png';
import Footer from './../footer/index';
import { Sidebar } from './sidebar/index';
import SmoothScroll from './SmoothScroll';
import { useTheme } from "./ThemeContext";
import AboutMe from './title/index';

export const MainContent = () => {
    const [showSplash, setShowSplash] = useState(true);
    const { isDarkMode } = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <SmoothScroll />
            <div className="relative min-h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    {showSplash && (
                        <motion.div
                            key="splash"
                            className="fixed inset-0 bg-white dark:bg-[#141414] flex items-center justify-center z-50"
                            initial={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.5, ease: "easeInOut" }
                            }}
                        >
                            <div className="flex flex-col items-center gap-8">
                                {/* Logo with simple fade and scale */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{
                                        scale: 1,
                                        opacity: 1,
                                        transition: {
                                            duration: 0.6,
                                            ease: [0.34, 1.56, 0.64, 1],
                                        },
                                    }}
                                    exit={{
                                        scale: 0.9,
                                        opacity: 0,
                                        transition: { duration: 0.4 },
                                    }}
                                >
                                    <motion.img
                                        src={pageLogo}
                                        width={180}
                                        height={180}
                                        alt="Logo"
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </motion.div>

                                {/* Simple dot loader */}
                                <motion.div
                                    className="flex gap-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    exit={{ opacity: 0 }}
                                >
                                    {[0, 1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            className="w-2 h-2 bg-black dark:bg-white rounded-full"
                                            animate={{
                                                scale: [1, 1.4, 1],
                                                opacity: [0.4, 1, 0.4],
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                delay: i * 0.15,
                                                ease: "easeInOut",
                                            }}
                                        />
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {!showSplash && (
                    <>
                        {/* <AlertMessage /> */}

                        <motion.div
                            animate={{}}
                            className="top-4 text-xs fixed right-4 shadow-sm border border-gray-200 dark:border-gray-700 p-2 rounded-lg bg-white dark:bg-zinc-800 dark:text-gray-200 z-10 font-medium"
                        >
                            {new Date().toLocaleDateString(undefined, {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </motion.div>

                        {!isDarkMode && (
                            <motion.div
                                className="fixed inset-0 -z-10"
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
                        )}

                        {/* Dark Mode Background */}
                        {isDarkMode && (
                            <motion.div
                                className="fixed inset-0 -z-10 dark:bg-[#141414]"
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
                        )}

                        <Sidebar />

                        <motion.div
                            className="pb-24"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }}
                        >
                            <AboutMe />

                        </motion.div>

                        <Footer />
                    </>
                )}
            </div>
        </>
    );
};