import { FaCalendarAlt } from 'react-icons/fa';
import companyLogo from '../../../public/download.png';

const Experience = () => {
    return (
        <div className="pb-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8 animate-fadeIn">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 mb-2 text-center sm:text-left">
                        Professional Experience
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 rounded"></div>
                </div>

                <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 hover:shadow-xl animate-slideUp">
                    <div className="h-2 bg-blue-600"></div>

                    <div className="p-6 sm:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14  rounded-lg flex items-center justify-center text-white flex-shrink-0 ">
                                    <img src={companyLogo} alt="Expernetic Logo" className="w-12 h-12 object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-700 mb-1">
                                        Software Engineer Intern
                                    </h3>
                                    <p className="text-lg text-blue-600 font-semibold mb-2">
                                        Expernetic Pvt Ltd
                                    </p>
                                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <FaCalendarAlt className="text-blue-600" />
                                            <span className="font-medium">May 2024 - May 2025</span>
                                        </div>
                                        <span className="text-gray-400">•</span>
                                        <span className="font-medium">1 year</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-gray-700 leading-relaxed">
                                Completed a 1-year internship working in a collaborative Agile environment, contributing to frontend development across multiple projects including Test Bolt (QA tool), Inzinq HR application, and the company website. Gained hands-on experience in building responsive user interfaces, implementing features efficiently, and applying best practices in modern web development.
                            </p>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-600 rounded"></div>
                                Key Responsibilities
                            </h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-150"></div>
                                    <p className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                                        Developed responsive user interfaces using React, Next.js, TypeScript, and modern frontend technologies
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-150"></div>
                                    <p className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                                        Participated in Agile Scrum ceremonies and collaborated with cross-functional teams
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 group">
                                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0 transition-transform duration-300 group-hover:scale-150"></div>
                                    <p className="text-gray-700 transition-colors duration-300 group-hover:text-gray-900">
                                        Applied SOLID principles and UI/UX best practices to deliver maintainable, scalable solutions
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <div className="w-1 h-5 bg-blue-600 rounded"></div>
                                Technologies & Tools
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    React
                                </span>
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    Next.js
                                </span>
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    TypeScript
                                </span>
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    Redux & RTK Query
                                </span>
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    Tailwind CSS
                                </span>
                                <span className="px-4 py-2 bg-white text-blue-700 border-2 border-blue-600 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1">
                                    Agile/Scrum
                                </span>
                            </div>
                        </div>
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

                .animate-slideUp {
                    animation: slideUp 0.8s ease-out 0.2s backwards;
                }
            `}</style>
        </div>
    );
}

export default Experience;