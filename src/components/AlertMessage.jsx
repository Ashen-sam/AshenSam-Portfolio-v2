import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineWarning, AiOutlineClose } from "react-icons/ai";
import { HiMiniBellAlert } from "react-icons/hi2";

export const AlertMessage = ({ message = "Hi I'm updating the site to make things smoother." }) => {
    const [visible, setVisible] = useState(true);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed top-4 left-0 right-0 mx-auto w-[calc(100%-2rem)] max-w-2xl text-center bg-red-50 border-l-4 border-red-400 shadow-lg rounded-md flex items-center justify-between px-4 py-3 z-[100]"
                >
                    <div className="flex items-center gap-3">
                        <motion.div
                            animate={{ rotate: [-10, 10, -10] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <HiMiniBellAlert className="text-red-500 w-5 h-5" />
                        </motion.div>


                        <span className="text-red-800 text-sm">{message}</span>
                    </div>
                    <button
                        onClick={() => setVisible(false)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                    >
                        <AiOutlineClose className="w-4 h-4" />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
