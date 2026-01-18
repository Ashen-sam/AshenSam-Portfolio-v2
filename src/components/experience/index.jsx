import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import companyLogo from '../../../public/download.png';
import companyLogo2 from '../../../public/omak.png';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { useTheme } from '../ThemeContext';

const Experience = () => {
    const { theme } = useTheme();
    const jumpVariants = {
        hidden: { y: -300, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 }
        }
    };

    const experiences = [
        {
            id: 1,
            title: "Associate Software Engineer",
            company: "Omak Pvt Ltd",
            logo: companyLogo2,
            period: "January 2026 - Present",
            duration: "Present",
            description: "Working as a full-stack developer building scalable web applications using modern technologies. Contributing to both frontend and backend development, implementing new features, and maintaining existing systems in an Agile environment.",
            responsibilities: [
                "Developed full-stack applications using Vue.js, Node.js, Express, and TypeScript",
                "Designed and implemented RESTful APIs and integrated with CouchDB database",
                "Collaborated with cross-functional teams using Agile methodologies",
                "Deployed and maintained applications on Azure cloud infrastructure",
                "Managed version control and code reviews using Bitbucket"
            ],
            technologies: ["Vue.js", "Node.js", "Express", "TypeScript", "CouchDB", "Azure", "Bitbucket", "Agile/Scrum", "Full-Stack Development"]
        },
        {
            id: 2,
            title: "Software Engineer Intern",
            company: "Expernetic Pvt Ltd",
            logo: companyLogo,
            period: "May 2024 - May 2025",
            duration: "1 year",
            description: "Completed a 1-year internship working in a collaborative Agile environment, contributing to frontend development across multiple projects including Test Bolt (QA tool), Inzinq HR application, and the company website. Gained hands-on experience in building responsive user interfaces, implementing features efficiently, and applying best practices in modern web development.",
            responsibilities: [
                "Developed responsive user interfaces using React, Next.js, TypeScript, and modern frontend technologies",
                "Participated in Agile Scrum ceremonies and collaborated with cross-functional teams",
                "Applied SOLID principles and UI/UX best practices to deliver maintainable, scalable solutions",
                "Built and debugged backend features using .NET and C#, optimized SQL queries, and ensured smooth integration between API and database layers"
            ],
            technologies: ["React", "Next.js", "TypeScript", "Redux & RTK Query", "Tailwind CSS", "Agile/Scrum", "MUI", "Azure Devops", ".NET", "SQL"]
        }
    ];

    return (
        <motion.div
            className="pb-16"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.3 }
                }
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.div
                    className="bg-gray-700 w-[160px] dark:bg-gray-800 p-2 text-white flex items-center justify-center rounded-t-lg"
                    variants={jumpVariants}
                >
                    My Experience
                </motion.div>

                <div className={`bg-white rounded-2xl  dark:bg-transparent  shadow-sm  border-gray-200 overflow-hidden`}
                >
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            className={`bg-white   dark:bg-transparent ${index === 0 ? 'rounded-tl-none' : ''} shadow-sm  border-gray-200 overflow-hidden`}
                            variants={jumpVariants}
                        >
                            <motion.div className="p-6 sm:p-8" variants={jumpVariants}>
                                <motion.div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5" variants={jumpVariants}>
                                    <motion.div className="flex items-start gap-4 w-full" variants={jumpVariants}>
                                        <motion.div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0  bg-white" variants={jumpVariants}>
                                            <img src={exp.logo} alt={`${exp.company} Logo`} className="w-10 h-10 object-contain" />
                                        </motion.div>
                                        <motion.div variants={jumpVariants} className='flex justify-between items-center md:flex-row flex-col w-full'>
                                            <div>
                                                <h3 className="text-xl dark:text-gray-200 font-bold text-gray-700 mb-1">{exp.title}</h3>
                                                <p className="text-base text-gray-700 font-semibold mb-2 dark:text-gray-300">{exp.company}</p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                                <div className="flex items-center gap-2">
                                                    <FaCalendarAlt className="text-gray-500 text-xs" />
                                                    <span className='dark:text-gray-300'>{exp.period}</span>
                                                </div>
                                                <span className="text-gray-400">•</span>
                                                <span className='dark:text-gray-300'>{exp.duration}</span>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>

                                <motion.div className="mb-5" variants={jumpVariants}>
                                    <p className="text-sm text-gray-700 leading-relaxed dark:text-gray-300">
                                        {exp.description}
                                    </p>
                                </motion.div>

                                <motion.div className="mb-5" variants={jumpVariants}>
                                    <h4 className="text-base font-bold text-gray-700 mb-3 dark:text-gray-200">Key Responsibilities</h4>
                                    <div className="space-y-2">
                                        {exp.responsibilities.map((res, i) => (
                                            <motion.div key={i} className="flex items-center gap-3" variants={jumpVariants}>
                                                <div>
                                                    <VscActivateBreakpoints className={`${theme.secondary} text-xs`} />
                                                </div>
                                                <p className="text-sm text-gray-700 dark:text-gray-300">{res}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div variants={jumpVariants}>
                                    <h4 className="text-base font-bold text-gray-700 mb-3 dark:text-gray-200">Technologies & Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, i) => (
                                            <span key={i} className="border border-gray-200 px-2 bg-slate-50 dark:bg-zinc-800 dark:text-gray-200 dark:border-neutral-700 shadow-sm py-1 text-xs rounded-lg">{tech}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Experience;