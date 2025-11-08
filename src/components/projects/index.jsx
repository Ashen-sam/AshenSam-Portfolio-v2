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

    const techStack = [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3Alt />, name: "CSS3" },
        { icon: <DiJavascript1 />, name: "JavaScript" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiRedux />, name: "Redux" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <FaSass />, name: "Sass" },
        { icon: <SiSupabase />, name: "Supabase" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <TbSql />, name: "SQL" },
        { icon: <FaJava />, name: "Java" },
        { icon: <FaPython />, name: "Python" }
    ];

    return (
        <div className="pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12 animate-fadeIn">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-2 text-center sm:text-left">
                        Personal Projects
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 rounded mb-8"></div>
                    <p className="text-gray-700 leading-relaxed mb-8 text-center sm:text-left">
                        A diverse collection of projects showcasing expertise across mobile, web, and desktop development. From AI-powered machine learning models and enterprise-level management systems to modern full-stack web applications, each project demonstrates commitment to delivering efficient, user-centric solutions across various technologies and domains.
                    </p>
                    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <div className="w-1 h-5 bg-blue-600 rounded"></div>
                            Technologies & Skills
                        </h3>
                        <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                            {techStack.map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center gap-1 group cursor-pointer"
                                >
                                    <div className="text-3xl text-blue-600 transition-all duration-300 group-hover:scale-125 group-hover:text-blue-700">
                                        {tech.icon}
                                    </div>
                                    <span className="text-xs text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {tech.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slideUp"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="h-1.5 bg-blue-600"></div>
                            <div className="p-6">
                                {project.tags && (
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tags.map((tag, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-semibold border border-blue-200"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-4">
                                    {project.description}
                                </p>
                                <div className="flex items-center gap-3 text-blue-600 text-2xl mb-4 pb-4 border-b border-gray-100">
                                    {Array.isArray(project.icons) ? project.icons.map((icon, idx) => (
                                        <div key={idx} className="hover:scale-125 transition-transform duration-300">
                                            {icon}
                                        </div>
                                    )) : (
                                        <div className="hover:scale-125 transition-transform duration-300">
                                            {project.icons}
                                        </div>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300"
                                        >
                                            <FiGithub className="text-lg" />
                                            <span>Code</span>
                                        </a>
                                    )}
                                    {project.site && project.site_link && (
                                        <a
                                            href={project.site_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300"
                                        >
                                            <FaExternalLinkAlt className="text-base" />
                                            <span>Demo</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-12 text-center animate-fadeInDelay">
                    <div className="inline-block bg-white border border-gray-200 rounded-lg px-6 py-3 shadow-sm">
                        <p className="text-gray-600 text-sm font-medium">
                            More exciting projects coming soon...
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes fadeInDelay {
                    from {
                        opacity: 0;
                        transform: translateY(10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }
                .animate-fadeInDelay {
                    animation: fadeInDelay 0.8s ease-out 1s backwards;
                }
                .animate-slideUp {
                    animation: slideUp 0.8s ease-out backwards;
                }
            `}</style>
        </div>
    );
}
