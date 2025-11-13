import { motion } from "framer-motion";
import { useState } from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BsAndroid2 } from "react-icons/bs";
import { DiJavascript1 } from "react-icons/di";
import { FaArrowRight, FaCss3, FaHtml5, FaJava, FaReact } from "react-icons/fa";
import {
    SiAzuredevops,
    SiCsharp,
    SiCss3,
    SiDotnet,
    SiGithub,
    SiHtml5,
    SiJavascript,
    SiMicrosoftsqlserver,
    SiMui,
    SiMysql,
    SiNextdotjs,
    SiPhp,
    SiPostman,
    SiReact,
    SiRedux,
    SiShadcnui,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiVercel,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

export default function Projects() {
    const [activeTechStack, setActiveTechStack] = useState(null);

    const techIcons = [
        <SiReact color="#61DAFB" />,       // React blue
        <SiTypescript color="#3178C6" />,   // TypeScript blue
        <SiTailwindcss color="#38B2AC" />,  // Tailwind cyan
        <SiRedux color="#764ABC" />,        // Redux purple
        <SiSupabase color="#3ECF8E" />,     // Supabase green
        <SiShadcnui color="#000000" />,     // Example orange for Shadcn (no official color)
        <SiJavascript color="#F7DF1E" />,   // JavaScript yellow
        <SiHtml5 color="#E34F26" />,        // HTML orange
        <SiCss3 color="#1572B6" />,         // CSS blue
        <SiPostman color="#FF6C37" />,      // Postman orange
        <FaJava color="#007396" />,         // Java blue
        <SiNextdotjs color="#000000" />,    // Next.js black
        <SiMui color="#007FFF" />,
        <SiGithub color="#764ABC" />,
        <SiAzuredevops color="#007FFF" />,
        <SiVercel color="#000000" />
    ];

    const projects = [
        {
            id: 0,
            title: "Project Management Web App",
            description: "A collaborative web app that lets users create and manage projects, assign tasks, comment, react/like, and follow progress in real time.",
            icons: [<SiReact />, <SiSupabase />, <SiShadcnui />, <SiRedux />, <SiCsharp />],
            tags: ["Full Stack", "Project Management"],
            image: '../../../public/Screenshot 2025-11-13 084737.png',
            link: 'https://github.com/Ashen-sam/pro-app-api-net'
        },
        {
            id: 1,
            title: "Community Issue Reporting Platform",
            description: "Final year project - A web application for Makola residents to report local issues efficiently. Features real-time updates, secure authentication, and location-based reporting with photo uploads.",
            icons: [<SiNextdotjs />, <SiSupabase />, <SiRedux />, <BiLogoTailwindCss />],
            tags: ["Final Year Project", "Full Stack"],
            image: '../../../public/Screenshot 2025-11-13 085928.png',
            link: 'https://github.com/Ashen-sam/makola-web-application'
        },
        {
            id: 2,
            title: "Rainfall Prediction AI Model",
            description: "Machine learning model developed in Google Colab using XGBoost, Random Forest, Decision Tree, and NLP features to predict rainfall with optimized accuracy.",
            icons: [<FaJava />],
            tags: ["Machine Learning", "AI"],
            link: 'https://github.com/Ashen-sam/rainfall-prediction-model'
        },
        {
            id: 3,
            title: "Megacity Cab Service",
            description: "Web-based application enabling customers to book vehicles, drivers to manage trips, and admins to oversee operations. Built with JSP, Servlets, and MySQL on Apache Tomcat.",
            icons: [<FaJava />, <SiMysql />, <FaHtml5 />, <FaCss3 />],
            tags: ["Full Stack", "Enterprise"],
            link: 'https://github.com/Ashen-sam/java-web-mega-city-cab'
        },
        {
            id: 4,
            title: "Store Inventory Management",
            description: "Web application with Admin and Customer roles for efficient product, order, and inventory management. Developed using JSP, Servlets, and MySQL.",
            icons: [<FaJava />, <SiMysql />, <FaHtml5 />],
            tags: ["Full Stack", "Management System"],
            link: 'https://github.com/Ashen-sam/store-inventory-management-web-app'
        },
        {
            id: 5,
            title: "Train Web Application",
            description: "HND Final project - Railway booking and travel management system for Sri Lanka. Features train schedules, seat reservations, and booking management built with PHP and MySQL.",
            icons: [<SiPhp />, <SiMysql />, <FaHtml5 />, <FaCss3 />],
            tags: ["Final Project", "Full Stack"],
            link: 'https://github.com/Ashen-sam/final-Project'
        },
        {
            id: 6,
            title: "Sri Lanka Railway Web",
            description: "Modern railway travel experience platform integrating .NET technology stack with React.js and Tailwind CSS for smooth and scalable user interactions.",
            icons: [<FaReact />, <BiLogoTailwindCss />, <SiDotnet />, <SiMicrosoftsqlserver />],
            tags: ["Full Stack", "Modern Web"],
            link: ''
        },
        {
            id: 7,
            title: "4You-Shop Web",
            description: "E-commerce platform with frontend implementation using HTML, CSS, and JavaScript, backed by PHP and MySQL for complete end-to-end web development.",
            icons: [<FaHtml5 />, <FaCss3 />, <DiJavascript1 />, <SiPhp />],
            tags: ["E-commerce", "Full Stack"],
            link: "https://github.com/Ashen-sam/4You-shop"
        },
        {
            id: 8,
            title: "Pet Care Mobile App",
            description: "First mobile application project with two user types: customers and pet-care providers. Offers practical pet care service management built with Java and SQL.",
            icons: [<BsAndroid2 />, <FaJava />, <TbSql />],
            tags: ["Mobile", "First Project"],
            link: 'https://github.com/Ashen-sam/PET-CARE-APP'
        },
        {
            id: 9,
            title: "Apple Store Desktop App",
            description: "GUI desktop application for cashier, manager, and product/stock management operations. Developed using Java and Java Swing with focus on functionality.",
            icons: [<FaJava />],
            tags: ["Desktop", "Management"],
            link: "https://github.com/Ashen-sam/APPPLE-ISTORES"
        },
        {
            id: 10,
            title: "Portfolio v1",
            description: "Personal web portfolio using React JS, pure CSS, Framer Motion, and React Icons. First React project showcasing development skills and projects.",
            icons: [<FaReact />, <FaCss3 />],
            tags: ["Portfolio", "React"],
            site: true,
            link: 'https://github.com/Ashen-sam/SAM-PORTFOLIO'
        },
        {
            id: 11,
            title: "Team Web (Tech Chronicles)",
            description: "First responsive website project demonstrating foundational web development skills and mobile-friendly responsive design using HTML, CSS, and JavaScript.",
            icons: [<FaHtml5 />, <FaCss3 />, <DiJavascript1 />],
            tags: ["Responsive", "First Web Project"],
            site: true,
            site_link: 'https://ashen-sam.github.io/TEAM-TECH-TRONICLES/',
            link: "https://github.com/Ashen-sam/TEAM-TECH-TRONICLES"
        },
        {
            id: 12,
            title: "Portfolio v2",
            description: "Enhanced personal portfolio website showcasing projects, skills, and professional experience with modern design and improved user experience.",
            icons: [<FaReact />, <BiLogoTailwindCss />],
            tags: ["Portfolio", "Current"],
            link: 'https://github.com/Ashen-sam/final-Project'
        }
        // Add other projects here...
    ];

    // Container variants for staggered scroll animation
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    // Card animation: slide up + fade in
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 80, damping: 12 },
        },
    };

    return (
        <motion.div
            className="pb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.div
                    className="my-10 flex gap-4 items-center mx-auto justify-center"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    {techIcons.map((icon, idx) => (
                        <motion.div
                            key={idx}
                            className="text-3xl "
                            variants={cardVariants}
                        >
                            {icon}
                        </motion.div>
                    ))}
                </motion.div>
                {/* My Work Section */}
                <motion.div
                    variants={cardVariants}
                    className="flex items-center "
                >
                    {/* My Work Box */}
                    <motion.div
                        className="bg-gray-800 text-white px-4 py-2 rounded-t-lg flex items-center justify-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        My Work
                    </motion.div>




                </motion.div>

                {/* Projects Grid */}
                <div className="p-6 mx-auto bg-white rounded-2xl rounded-tl-none shadow-sm border border-gray-200">
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={containerVariants}>
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                            >
                                {/* Project Image */}
                                <div className="relative h-48 bg-gray-200 overflow-hidden">
                                    {project.image ? <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-center group-hover:scale-105 transition-transform duration-500"
                                    /> : (
                                        <div className="flex flex-col justify-center items-center min-h-[200px] text-gray-700 text-lg font-medium italic">

                                            {/* Animated Text */}
                                            <motion.div
                                                className="mb-4"
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8 }}
                                            >
                                                Images are In Development
                                            </motion.div>

                                            {/* Elegant Dots Loader */}
                                            <div className="flex space-x-2">
                                                {[0, 1, 2].map((i) => (
                                                    <motion.span
                                                        key={i}
                                                        className="w-3 h-3 bg-gray-500 rounded-full"
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6 relative">
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                                    {/* Tech Stack Icons (above card) */}
                                    <div className="flex items-center gap-2 text-white text-lg mb-4 absolute -top-8">
                                        {Array.isArray(project.icons)
                                            ? project.icons.map((icon, idx) => (
                                                <div key={idx} className="hover:text-gray-900 transition-colors">
                                                    {icon}
                                                </div>
                                            ))
                                            : project.icons}
                                    </div>

                                    {/* View Project Link */}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 font-medium group/link transition-colors"
                                        >
                                            <span>View project</span>
                                            <FaArrowRight className="text-xs group-hover/link:translate-x-1 transition-transform" />
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
