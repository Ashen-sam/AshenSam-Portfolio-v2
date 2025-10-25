import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <div className=" pb-16 bg-[#fcfcfc]">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-5xl font-bold text-slate-600 mb-12">Professional Experience</h2>

                {/* Experience Card */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
                    {/* Header Section */}
                    <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white">
                                <FaBriefcase className="text-xl" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-semibold text-gray-900">Software Engineer Intern</h3>
                                <p className="text-blue-900 font-medium">Expernetic Pvt Ltd</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                            <FaCalendarAlt className="text-blue-900" />
                            <span className="font-medium">May 2024 - May 2025 (1 year)</span>
                        </div>
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            React
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            Next.js
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            TypeScript
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            Redux & RTK Query
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            Tailwind CSS
                        </span>
                        <span className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-sm font-medium border border-blue-100">
                            Agile/Scrum
                        </span>
                    </div>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-gray-700 mb-6">
                        Completed a 1-year internship working in a collaborative Agile environment, contributing to frontend development across multiple projects including Test Bolt (QA tool), Inzinq HR application, and the company website. Gained hands-on experience in building responsive user interfaces, implementing features efficiently, and applying best practices in modern web development.
                    </p>

                    {/* Key Highlights */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">Developed responsive user interfaces using React, Next.js, TypeScript, and modern frontend technologies</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">Participated in Agile Scrum ceremonies and collaborated with cross-functional teams</p>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-900 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-700">Applied SOLID principles and UI/UX best practices to deliver maintainable, scalable solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;