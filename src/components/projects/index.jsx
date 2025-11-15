import { motion } from "framer-motion";
import { FaArrowRight, FaJava } from "react-icons/fa";
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
import image4 from '../../../public/cab.png';
import image10 from '../../../public/image10.png';
import image11 from '../../../public/image11.png';
import image12 from '../../../public/image12.png';
import image6 from '../../../public/image6.png';
import image7 from '../../../public/image7.png';
import image8 from '../../../public/image8.png';
import image9 from '../../../public/image9.png';
import image1 from '../../../public/Screenshot 2025-11-13 084737.png';
import image2 from '../../../public/Screenshot 2025-11-13 085928.png';
import { UseProjects } from "../hooks/useProjects";
import { TechIcons } from "../TechIcons";
import { useTheme } from "../ThemeContext";

export default function Projects() {

    const { cardVariants, containerVariants } = UseProjects()
    const { theme } = useTheme()

    const techIcons = [
        <SiReact color="#61DAFB" />,
        <SiTypescript color="#3178C6" />,
        <SiTailwindcss color="#38B2AC" />,
        <SiRedux color="#764ABC" />,
        <SiSupabase color="#3ECF8E" />,
        <SiShadcnui className="dark:text-gray-100 text-[#000000]" />,
        <SiJavascript color="#F7DF1E" />,
        <SiHtml5 color="#E34F26" />,
        <SiCss3 color="#1572B6" />,
        <SiPostman color="#FF6C37" />,
        <FaJava color="#007396" />,
        <SiNextdotjs className="dark:text-gray-100 text-[#000000]" />,
        <SiMui color="#007FFF" />,
        <SiGithub color="#764ABC" />,
        <SiAzuredevops color="#007FFF" />,
        <SiVercel className="dark:text-gray-100 text-[#000000]" />
    ];


    const projects = [
        {
            id: 0,
            title: "Project Management Web App (ongoing)",
            description: "A collaborative web app that lets users create and manage projects, assign tasks, comment, react/like, and follow progress in real time.",
            icons: [TechIcons[0].svg, TechIcons[1].svg, TechIcons[2].svg, TechIcons[3].svg, TechIcons[10].svg, TechIcons[11].svg, TechIcons[5].svg],
            tags: ["Full Stack", "Project Management"],
            image: image1,
            link: 'https://github.com/Ashen-sam/project-manage-app-client'
        },
        {
            id: 1,
            title: "Community Issue Reporting Platform",
            description: "Final year project - A web application for Makola residents to report local issues efficiently. Features real-time updates, secure authentication, and location-based reporting with photo uploads.",
            icons: [TechIcons[9].svg, TechIcons[1].svg, TechIcons[11].svg, TechIcons[3].svg, TechIcons[10].svg],

            tags: ["Final Year Project", "Full Stack"],
            image: image2,
            link: 'https://github.com/Ashen-sam/makola-web-application'
        },
        {
            id: 2,
            title: "Rainfall Prediction AI Model",
            description: "Machine learning model developed in Google Colab using XGBoost, Random Forest, Decision Tree, and NLP features to predict rainfall with optimized accuracy.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg, TechIcons[13].svg, TechIcons[15].svg],

            tags: ["Machine Learning", "AI"],
            image: image11,
            link: 'https://github.com/Ashen-sam/rainfall-prediction-model'
        },
        {
            id: 3,
            title: "Megacity Cab Service",
            description: "Web-based application enabling customers to book vehicles, drivers to manage trips, and admins to oversee operations. Built with JSP, Servlets, and MySQL on Apache Tomcat.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg, TechIcons[13].svg, TechIcons[14].svg],

            tags: ["Full Stack", "Enterprise"],
            image: image4,
            link: 'https://github.com/Ashen-sam/java-web-mega-city-cab'
        },
        {
            id: 12,
            title: "Portfolio v2",
            description: "Enhanced personal portfolio website showcasing projects, skills, and professional experience with modern design and improved user experience.",
            icons: [TechIcons[0].svg, TechIcons[2].svg, TechIcons[4].svg, TechIcons[19].svg],

            tags: ["Portfolio", "Current"],
            image: image8,
            link: 'https://github.com/Ashen-sam/AshenSam-Portfolio-v2'
        },
        {
            id: 6,
            title: "Sri Lanka Railway Web",
            description: "Modern railway travel experience platform integrating .NET technology stack with React.js and Tailwind CSS for smooth and scalable user interactions.",
            icons: [TechIcons[0].svg, TechIcons[4].svg, TechIcons[2].svg, TechIcons[17].svg],

            tags: ["Full Stack", "Modern Web"],
            image: image10,
            link: ''
        },
        {
            id: 4,
            title: "Store Inventory Management",
            description: "Web application with Admin and Customer roles for efficient product, order, and inventory management. Developed using JSP, Servlets, and MySQL.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg, TechIcons[13].svg, TechIcons[14].svg],

            tags: ["Full Stack", "Management System"],
            link: 'https://github.com/Ashen-sam/store-inventory-management-web-app'
        },

        {
            id: 5,
            title: "Train Web Application",
            description: "HND Final project - Railway booking and travel management system for Sri Lanka. Features train schedules, seat reservations, and booking management built with PHP and MySQL.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg, TechIcons[16].svg, TechIcons[14].svg],

            tags: ["Final Project", "Full Stack"],
            link: 'https://github.com/Ashen-sam/final-Project'
        },

        {
            id: 7,
            title: "4You-Shop Web",
            description: "E-commerce platform with frontend implementation using HTML, CSS, and JavaScript, backed by PHP and MySQL for complete end-to-end web development.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg, TechIcons[16].svg, TechIcons[14].svg],

            tags: ["E-commerce", "Full Stack"],
            link: "https://github.com/Ashen-sam/4You-shop"
        },
        {
            id: 8,
            title: "Pet Care Mobile App",
            description: "First mobile application project with two user types: customers and pet-care providers. Offers practical pet care service management built with Java and SQL.",
            icons: [TechIcons[20].svg, TechIcons[13].svg, TechIcons[21].svg],

            tags: ["Mobile", "First Project"],
            image: image7,
            link: 'https://github.com/Ashen-sam/PET-CARE-APP'
        },
        {
            id: 9,
            title: "Apple Store Desktop App",
            description: "GUI desktop application for cashier, manager, and product/stock management operations. Developed using Java and Java Swing with focus on functionality.",
            icons: [TechIcons[13].svg, TechIcons[21].svg],

            tags: ["Desktop", "Management"],
            image: image9,
            link: "https://github.com/Ashen-sam/APPPLE-ISTORES"
        },
        {
            id: 10,
            title: "Portfolio v1",
            description: "Personal web portfolio using React JS, pure CSS, Framer Motion, and React Icons. First React project showcasing development skills and projects.",
            icons: [TechIcons[0].svg, TechIcons[7].svg],

            tags: ["Portfolio", "React"],
            site: true,
            image: image12,
            link: 'https://github.com/Ashen-sam/SAM-PORTFOLIO'
        },
        {
            id: 11,
            title: "Team Web (Tech Chronicles)",
            description: "First responsive website project demonstrating foundational web development skills and mobile-friendly responsive design using HTML, CSS, and JavaScript.",
            icons: [TechIcons[6].svg, TechIcons[7].svg, TechIcons[8].svg],

            tags: ["Responsive", "First Web Project"],
            site: true,
            image: image6,
            site_link: 'https://ashen-sam.github.io/TEAM-TECH-TRONICLES/',
            link: "https://github.com/Ashen-sam/TEAM-TECH-TRONICLES"
        },

    ];



    return (
        <motion.div
            className="pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.div
                    className="my-10 flex flex-wrap  items-center justify-center mx-auto"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0 }}
                    variants={containerVariants}
                >
                    {techIcons.map((icon, idx) => (
                        <motion.div
                            key={idx}
                            className="text-3xl flex justify-center items-center w-16 h-16"
                            variants={cardVariants}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    variants={cardVariants}
                    className="flex items-center "
                >
                    <motion.div
                        className="bg-gray-700 dark:bg-gray-800 text-white px-4 py-2 rounded-t-lg flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        My Work
                    </motion.div>




                </motion.div>

                <div className="p-6 mx-auto bg-white dark:border-none dark:bg-transparent/10 rounded-2xl rounded-tl-none shadow-sm border border-gray-200">
                    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-6" variants={containerVariants}>
                        {projects.map((project,) => (
                            <motion.div
                                key={project.id}
                                className="group bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    {project.image ? <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    /> : (
                                        <div className="flex flex-col  justify-center items-center min-h-[200px] text-gray-700 text-lg font-medium italic">

                                            <div className="text-xs p-10 text-center"
                                            >
                                                Image currently under development.
                                            </div>

                                            <div className="flex space-x-2">
                                                {[0, 1, 2].map((i) => (
                                                    <motion.span
                                                        key={i}
                                                        className={` w-2 h-2 bg-gray-500 rounded-full`}
                                                        animate={{ y: [0, -8, 0] }}
                                                        transition={{
                                                            duration: 0.6,
                                                            repeat: Infinity,
                                                            delay: i * 0.2,
                                                            ease: "easeInOut",
                                                        }}
                                                    />
                                                ))}
                                            </div>

                                        </div>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/20  to-transparent`}></div>
                                </div>

                                <div className="p-3 relative">
                                    <h3 className="text-md font-bold dark:text-gray-200 text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                                    <div className={`flex items-center gap-2 text-black text-lg mb-4 `}>
                                        {Array.isArray(project.icons)
                                            ? project.icons.map((icon, idx) => (
                                                <div key={idx} className="hover:text-gray-900 transition-colors w-[17px]">
                                                    {icon}
                                                </div>
                                            ))
                                            : project.icons}
                                    </div>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium group/link transition-colors"
                                        >
                                            <span className="text-xs dark:text-gray-300">View project</span>
                                            <FaArrowRight className="dark:text-gray-300 text-xs group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}
