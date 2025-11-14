import { useState } from "react";

export const UseTitle = () => {
    const [showQuotes, setShowQuotes] = useState(false);

    const jumpVariants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };


    const floatingVariants = {
        animate: {
            y: [0, -10, 0, 10, 0],
            rotate: [0, 1, -1, 1, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    const pulseVariants = () => ({
        animate: {
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    });

    const tags = [
        "✦ Web Development",
        "✦ Software Engineering",
        "✦ Innovation",
        "✦ Vibe Coding",
    ];


    return {
        tags,
        jumpVariants,
        pulseVariants,
        floatingVariants,
        showQuotes,
        setShowQuotes
    }
}