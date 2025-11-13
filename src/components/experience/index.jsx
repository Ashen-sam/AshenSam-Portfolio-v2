import { FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import companyLogo from '../../../public/download.png';
import { VscActivateBreakpoints } from 'react-icons/vsc';
import { useTheme } from '../ThemeContext';

const Experience = () => {
    // Variants for jump animation
    const { theme } = useTheme()
    const jumpVariants = {
        hidden: { y: -300, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 80, damping: 12 }
        }
    };


    return (
        <motion.div
            className="pb-16"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {},
                visible: {
                    transition: { staggerChildren: 0.3 } // stagger jump of each child
                }
            }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <motion.div
                    className="bg-gray-700 w-[160px] p-2 text-white flex items-center justify-center rounded-t-lg"
                    variants={jumpVariants}
                >
                    My Experience
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl rounded-tl-none shadow-sm border border-gray-200 overflow-hidden "
                    variants={jumpVariants}
                >
                    <motion.div className="p-6 sm:p-8" variants={jumpVariants}>
                        <motion.div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5" variants={jumpVariants}>
                            <motion.div className="flex items-start  gap-4  w-full" variants={jumpVariants}>
                                <motion.div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0" variants={jumpVariants}>
                                    <img src={companyLogo} alt="Expernetic Logo" className="w-10 h-10 object-contain" />
                                </motion.div>
                                <motion.div variants={jumpVariants} className='flex justify-between items-center md:flex-row flex-col w-full '>
                                    <div><h3 className="text-xl font-bold text-gray-700 mb-1">Software Engineer Intern</h3>
                                        <p className="text-base text-gray-700 font-semibold mb-2">Expernetic Pvt Ltd</p></div>
                                    <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-gray-500 text-xs" />
                                            <span>May 2024 - May 2025</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span>1 year</span>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div className="mb-5" variants={jumpVariants}>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Completed a 1-year internship working in a collaborative Agile environment, contributing to frontend development across multiple projects including Test Bolt (QA tool), Inzinq HR application, and the company website. Gained hands-on experience in building responsive user interfaces, implementing features efficiently, and applying best practices in modern web development.
                            </p>
                        </motion.div>

                        <motion.div className="mb-5" variants={jumpVariants}>
                            <h4 className="text-base font-bold text-gray-700 mb-3">Key Responsibilities</h4>
                            <div className="space-y-2">
                                {[
                                    "Developed responsive user interfaces using React, Next.js, TypeScript, and modern frontend technologies",
                                    "Participated in Agile Scrum ceremonies and collaborated with cross-functional teams",
                                    "Applied SOLID principles and UI/UX best practices to deliver maintainable, scalable solutions"
                                ].map((res, i) => (
                                    <motion.div key={i} className="flex items-center gap-3" variants={jumpVariants}>
                                        <div>
                                            <VscActivateBreakpoints className={`${theme.secondary} text-xs`} />
                                        </div>
                                        <p className="text-sm text-gray-700">{res}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={jumpVariants}>
                            <h4 className="text-base font-bold text-gray-700 mb-3">Technologies & Tools</h4>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Redux & RTK Query", "Tailwind CSS", "Agile/Scrum", "MUI", "Azure Devops"].map((tech, i) => (
                                    <span key={i} className="border  border-gray-200 px-2 bg-slate-50 shadow-sm py-1 text-xs rounded-lg">{tech}</span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Experience;
