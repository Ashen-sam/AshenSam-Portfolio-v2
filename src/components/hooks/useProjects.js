export const UseProjects = () => {

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };
    return {
        containerVariants,
        cardVariants
    }
}