import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import {
    SiAzuredevops,
    SiCss3,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMui,
    SiNextdotjs,
    SiPostman,
    SiReact,
    SiRedux,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel
} from "react-icons/si";

import { UseProjects } from "../hooks/useProjects";
import { TechIcons } from "../TechIcons";
import { useTheme } from "../ThemeContext";

// images
import image1 from "../../../public/Screenshot 2025-11-13 084737.png";
import image2 from "../../../public/Screenshot 2025-11-13 085928.png";
import image4 from "../../../public/cab.png";
import image7 from "../../../public/image7.png";
import image8 from "../../../public/image8.png";
import image9 from "../../../public/image9.png";
import image10 from "../../../public/image10.png";
import image11 from "../../../public/image11.png";
import image12 from "../../../public/image12.png";

export default function Projects() {
    const { cardVariants, containerVariants } = UseProjects();
    const { theme } = useTheme();

    const techIcons = [
        <SiReact color="#61DAFB" />,
        <SiTypescript color="#3178C6" />,
        <SiTailwindcss color="#38B2AC" />,
        <SiRedux color="#764ABC" />,
        <SiSupabase color="#3ECF8E" />,
        <SiShadcnui className="dark:text-gray-100" />,
        <SiJavascript color="#F7DF1E" />,
        <SiHtml5 color="#E34F26" />,
        <SiCss3 color="#1572B6" />,
        <SiPostman color="#FF6C37" />,
        <FaJava color="#007396" />,
        <SiNextdotjs className="dark:text-gray-100" />,
        <SiMui color="#007FFF" />,
        <SiGithub />,
        <SiAzuredevops color="#007FFF" />,
        <SiVercel />
    ];

    const projects = [
        {
            id: 1,
            title: "Project Management Web App",
            description:
                "A collaborative platform to manage projects, assign tasks, comment, react, and track progress in real time.",
            icons: [TechIcons[0].svg, TechIcons[1].svg, TechIcons[2].svg],
            image: image1,
            link: "https://github.com/Ashen-sam/project-manage-app-client",
            showImage: true
        },
        {
            id: 2,
            title: "Community Issue Reporting Platform",
            description:
                "Final year project enabling residents to report local issues with location-based tracking and real-time updates.",
            icons: [TechIcons[9].svg, TechIcons[1].svg, TechIcons[3].svg],
            image: image2,
            showImage: true
        },
        {
            id: 3,
            title: "Rainfall Prediction AI",
            description:
                "ML model using XGBoost, Random Forest, Decision Tree, and NLP features to predict rainfall accurately.",
            icons: [TechIcons[6].svg, TechIcons[7].svg],
            image: image11,
            showImage: false
        },
        {
            id: 4,
            title: "Megacity Cab Service",
            description:
                "Enterprise-level cab service platform using JSP, Servlets, and MySQL.",
            icons: [TechIcons[13].svg],
            image: image4,
            showImage: false
        },
        {
            id: 5,
            title: "Portfolio v2",
            description:
                "Modern personal portfolio with improved UX, animations, and responsive design.",
            icons: [TechIcons[0].svg, TechIcons[2].svg],
            image: image8,
            showImage: true
        },
        {
            id: 6,
            title: "Pet Care Mobile App",
            description:
                "First mobile app project offering pet-care service management using Java and SQL.",
            icons: [TechIcons[20].svg],
            image: image7,
            showImage: true
        }
    ];

    return (
        <motion.div
            className="pb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 mt-10">

                {/* Tech icons */}
                <motion.div
                    className="flex flex-wrap justify-center gap-6 mb-12"
                    variants={containerVariants}
                >
                    {techIcons.map((icon, i) => (
                        <motion.div
                            key={i}
                            className="text-3xl w-14 h-14 flex items-center justify-center"
                            variants={cardVariants}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </motion.div>

                {/* Title */}
                <div className="mb-6">
                    <span className="bg-gray-800 text-white px-4 py-2 rounded-lg">
                        My Work
                    </span>
                </div>

                {/* ✅ MASONRY LAYOUT */}
                <motion.div
                    className="columns-1 sm:columns-2 lg:columns-3 gap-4"
                    variants={containerVariants}
                >
                    {projects.map(project => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            className="mb-4 break-inside-avoid bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition"
                        >
                            <h3 className="font-bold text-sm text-gray-900 dark:text-gray-100 mb-2">
                                {project.title}
                            </h3>

                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                {project.description}
                            </p>

                            {project.showImage && (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded-xl mb-3"
                                />
                            )}

                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    className="text-blue-600 dark:text-blue-400 text-sm block mb-3"
                                >
                                    {project.link.replace("https://", "")}
                                </a>
                            )}

                            <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                                {project.icons.map((icon, i) => (
                                    <div key={i} className="w-5 h-5">
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
}
