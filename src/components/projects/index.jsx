import '/src/index.css'
import { BsAndroid2 } from "react-icons/bs";
import { TbSql } from "react-icons/tb";
import { FaReact, FaCss3, FaBullseye, FaHtml5, FaSass, FaJava, FaCss3Alt } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { DiJavascript1 } from "react-icons/di";
import { GrHtml5, GrCss3 } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import { SiDotnet, SiMicrosoftsqlserver, SiPhp, SiTailwindcss, SiNextdotjs, SiMysql } from "react-icons/si";
import { Link } from 'react-router-dom';
import { IoLogoJavascript } from "react-icons/io";

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Pet Care App",
            description: "The pet care application that implemented with JAVA and SQL. In this app we have use two user customer and pet-care.",
            icons: [<BsAndroid2 />, < FaJava />, <TbSql />],
            link: 'https://github.com/Ashen-sam/PET-CARE-APP'
        },
        {
            id: 2,
            title: "Srilanka Railway Web",
            description: "The pet care application that implemented with JAVA and SQL. In this app we have use two user customer and pet-care.",
            icons: [<FaReact />, <BiLogoTailwindCss />, <SiDotnet />, <SiMicrosoftsqlserver />],
            links: ""
        },
        {
            id: 3,
            title: "4You-shop Web",
            description: "This is 4You shop website that i have implemented the frontend with CSS and JS, and the technologies in backend are PHP, MYSQL, JS",
            icons: [<GrHtml5 />, <FaCss3 />, <DiJavascript1 />, < SiPhp />],
            links: "https://github.com/Ashen-sam/4You-shop"
        },
        {
            id: 4,
            title: "Outer Clove Web",
            description: "Outer clove restaurant website developed by HTML,CSS,JS,PHP and MYSQL technologies,and website can access for users and Admins , and for the admin i have developed CRUD operations.",
            icons: [<BsAndroid2 />, < FaJava />, <TbSql />],
            links: "https://github.com/Ashen-sam/Outer-Clove_Restaurant"
        },
        {
            id: 5,
            title: "Apple Store App",
            description: "This is GUI application for the APPLE ISTORE ,and this application for the cashier ,manager and for the products and stock management system.",
            icons: <FaJava />,
            links: "https://github.com/Ashen-sam/APPPLE-ISTORES"
        },
        {
            id: 6,
            title: "Dai Lanka Web",
            description: "The pet care application that implemented with JAVA and SQL. In this app we have use two user customer and pet-care.",
            icons: [<SiNextdotjs />, <BiLogoTailwindCss />],
            links: ""
        },
        {
            id: 7,
            title: "Portfolio v1",
            description: "This is my Web portfolio, I have used the JS library React JS and pure CSS in this project and I have used React Framer Motion and React icon, and this is my first React project.",
            icons: [<FaReact />, <FaCss3 />],
            site: <FaBullseye />,
            site_link: 'https://ashen-sam.github.io/SAM-PORTFOLIO/',
            links: 'https://github.com/Ashen-sam/SAM-PORTFOLIO'

        },
        {
            id: 8,
            title: "Team Web",
            description: "This is my newly developed responsive Team website",
            icons: [<GrHtml5 />, <FaCss3 />, <DiJavascript1 />],
            site: <FaBullseye />,
            site_link: 'https://ashen-sam.github.io/TEAM-TECH-TRONICLES/',
            links: "https://github.com/Ashen-sam/TEAM-TECH-TRONICLES"

        },
        {
            id: 9,
            title: "Comming Soon...",
            description: "Learning new Technologies and tools for my future small and big Projects and willing to show you my next steps and thank you...",
            // icons: 'learning...',
        },
    ]
    return (
        <>
            <div className="aboutme_wrapper pt-[2rem] pb-6 bg-[#fcfcfc] flex w-full ">
                <div className="aboutme_container max-w-5xl m-auto flex gap-[3rem] flex-col w-full ">
                    <div className="aboutme_description w-full max-sm:px-4">
                        <h1 className="text-4xl ">Personal Projects</h1>
                        <div className="grid grid-cols-8  text-blue-900 my-6 ">
                            <p className=" text-[2rem] "><FaHtml5 /></p>
                            <p className=" text-[2rem]"><FaCss3Alt /></p>
                            <p className=" text-[2rem]"><IoLogoJavascript /></p>
                            <p className=" text-[2rem]"><FaReact /></p>
                            <p className=" text-[2rem]"><SiTailwindcss /></p>
                            <p className=" text-[2rem]"><FaSass /></p>
                            <p className=" text-[2rem]"><SiMysql /></p>
                            <p className=" text-[2rem]"><FaJava /></p>
                        </div>
                        <p className="mt-2 leading-[25px] text-zinc-800">In my portfolio, you'll find a variety of projects showcasing my skills and expertise. From developing applications like the Pet Care App, Srilanka Railway Web, and Dai Lanka Web using Java and SQL to creating dynamic web platforms such as 4You-shop Web and Outer Clove Web with CSS, JavaScript, PHP, and MySQL, I've demonstrated versatility across different technologies and domains. Each project reflects my commitment to delivering efficient solutions and enhancing user experiences.</p>
                    </div>
                    <div className="project_container grid grid-cols-3 gap-5 justify-center h-auto max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:px-4" >
                        {projects.map(project => {
                            return (
                                <>
                                    <div className="projects relative w-[335px] bg-[rgb(248,248,248)]  py-4 px-5 hover:bg-white cursor-pointer rounded max-lg:w-[400px] max-sm:w-full">
                                        <h1 className="text-[1.7rem] my-2">{project.title}</h1>
                                        <p className="line-clamp-4 text-zinc-700 text-[0.95rem]">{project.description}</p>
                                        <p className='flex items-center text-blue-900 text-[1.95rem] gap-4 py-3  cursor-pointer'>{project.icons} <button className='  text-[1.3rem] absolute top-3 right-1 px-0  text-blue-900 hover:text-blue-600'><Link to={project.link}><FiGithub /></Link></button></p>
                                        <button className='  text-[1.3rem] absolute top-3 right-9 px-0  text-blue-900 hover:text-blue-600'><Link to={project.site_link} target='_blank' >{project.site}</Link></button>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
