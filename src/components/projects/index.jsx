import { BsAndroid2 } from "react-icons/bs";
import { TbSql } from "react-icons/tb";
import { FaReact, FaCss3, FaHtml5, FaSass, FaJava, FaCss3Alt, FaExternalLinkAlt, FaPython } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { FiGithub } from "react-icons/fi";
import { SiDotnet, SiMicrosoftsqlserver, SiPhp, SiTailwindcss, SiNextdotjs, SiMysql, SiSupabase, SiRedux, SiTypescript } from "react-icons/si";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Community Issue Reporting Platform",
            description: "Final year project - A web application for Makola residents to report local issues efficiently. Features real-time updates, secure authentication, and location-based reporting with photo uploads.",
            icons: [<SiNextdotjs />, <SiSupabase />, <SiRedux />, <BiLogoTailwindCss />],
            tags: ["Final Year Project", "Full Stack"],
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
            site_link: 'https://ashen-sam.github.io/SAM-PORTFOLIO/',
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
    ];

    return (
        <div className="pb-4 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold text-slate-600 mb-6">Personal Projects</h2>

                    {/* Tech Stack Icons */}
                    <div className="flex flex-wrap gap-6 text-blue-900 mb-8 pt-2">
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaHtml5 /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaCss3Alt /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><DiJavascript1 /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiTypescript /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaReact /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiNextdotjs /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiRedux /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiTailwindcss /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaSass /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiSupabase /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><SiMysql /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><TbSql /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaJava /></div>
                        <div className="text-4xl hover:scale-110 transition-transform cursor-pointer"><FaPython /></div>
                    </div>

                    <p className="text-base leading-relaxed text-gray-700 ">
                        In my portfolio, you'll find a diverse collection of projects showcasing expertise across mobile, web, and desktop development. From AI-powered machine learning models and enterprise-level management systems to modern full-stack web applications, each project demonstrates commitment to delivering efficient, user-centric solutions across various technologies and domains.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                        >
                            {/* Tags */}
                            {project.tags && (
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium border border-blue-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
                                {project.description}
                            </p>

                            {/* Tech Icons */}
                            <div className="flex items-center gap-3 text-blue-900 text-2xl mb-4 flex-wrap">
                                {Array.isArray(project.icons) ? project.icons.map((icon, idx) => (
                                    <div key={idx} className="hover:scale-125 transition-transform">
                                        {icon}
                                    </div>
                                )) : (
                                    <div className="hover:scale-125 transition-transform">
                                        {project.icons}
                                    </div>
                                )}
                            </div>

                            {/* Links */}
                            <div className="flex gap-3 pt-4 border-t border-gray-100">
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-blue-900 hover:text-blue-600 font-medium transition-colors"
                                    >
                                        <FiGithub className="text-lg" />
                                        <span>View Code</span>
                                    </a>
                                )}
                                {project.site && project.site_link && (
                                    <a
                                        href={project.site_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-blue-900 hover:text-blue-600 font-medium transition-colors"
                                    >
                                        <FaExternalLinkAlt className="text-base" />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-base">
                        More exciting projects coming soon...
                    </p>
                </div>
            </div>
        </div>
    );
}