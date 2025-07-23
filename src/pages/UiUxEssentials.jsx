import React from 'react';
import { Icon } from '@iconify/react';


const UiUxEssentials = () => {
    const courseDetails = [
        { icon: "lucide:calendar", label: "Duration", value: "3 Months" },
        { icon: "lucide:dollar-sign", label: "Fee", value: "LKR 30,000" },
        { icon: "lucide:monitor", label: "Mode", value: "Online (Live + Assignments + Projects)" }
    ];


    const months = [
        {
            title: "UX Foundations & Research",
            color: "from-purple-500 to-pink-500",
            weeks: [
                {
                    title: "Introduction to UI/UX",
                    icon: "lucide:lightbulb",
                    topics: ["What is UI/UX?", "Differences between UI, UX, Product Design", "Career paths in UI/UX"]
                },
                {
                    title: "Understanding Users",
                    icon: "lucide:users",
                    topics: ["User-Centered Design (UCD)", "Empathy Maps, Personas", "User Journey Mapping"]
                },
                {
                    title: "UX Research",
                    icon: "lucide:search",
                    topics: ["Types: Qualitative & Quantitative", "Surveys, Interviews, Observations", "Usability Testing Basics"]
                },
                {
                    title: "Information Architecture",
                    icon: "lucide:map",
                    topics: ["Site Maps & User Flows", "Card Sorting", "Navigation Structure"]
                }
            ]
        },
        {
            title: "Wireframes, Prototypes & UI Design",
            color: "from-blue-500 to-cyan-500",
            weeks: [
                {
                    title: "Wireframing",
                    icon: "lucide:layout",
                    topics: ["Low-Fidelity Wireframes (Paper + Digital)", "Layout Grids & Patterns"]
                },
                {
                    title: "Prototyping",
                    icon: "lucide:target",
                    topics: ["Mid-Fidelity Mockups", "Clickable Prototypes (Figma)"]
                },
                {
                    title: "UI Design Basics",
                    icon: "lucide:palette",
                    topics: ["Design Principles (CRAP)", "Typography, Color Theory, Iconography"]
                },
                {
                    title: "Design Systems",
                    icon: "lucide:book-open",
                    topics: ["Atomic Design Methodology", "Component Libraries (Figma)", "Building Reusable Elements"]
                }
            ]
        },
        {
            title: "Advanced UI + Final Project",
            color: "from-green-500 to-emerald-500",
            weeks: [
                {
                    title: "Mobile & Responsive Design",
                    icon: "lucide:smartphone",
                    topics: ["Designing for Devices", "Grids, Constraints, Breakpoints"]
                },
                {
                    title: "UI Enhancements",
                    icon: "lucide:zap",
                    topics: ["Microinteractions", "Accessibility (WCAG Basics)", "Dark Mode / Theming"]
                },
                {
                    title: "Tools & Handoff",
                    icon: "lucide:code",
                    topics: ["Figma → Dev Handoff (Zeplin, Inspect Mode)", "Working with Developers"]
                },
                {
                    title: "Final Project & Portfolio",
                    icon: "lucide:award",
                    topics: ["End-to-End UI/UX Design Project", "Peer Review & Feedback", "Building a Case Study Portfolio"]
                }
            ]
        }
    ];


    const benefits = [
        { icon: "lucide:briefcase", text: "Hands-on Projects" },
        { icon: "lucide:eye", text: "Figma Access + Templates" },
        { icon: "lucide:file-text", text: "Downloadable Resources" },
        { icon: "lucide:message-circle", text: "Mentor Feedback & Support" },
        { icon: "lucide:award", text: "Certificate of Completion" }
    ];

    return (
        <div>
            <nav className="bg-white shadow-md">
                <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
                    {/* <img src='../assets/logo.png' alt='Our Logo' /> */}
                    <img src="/assets/logo.png" alt="Our Logo" className="h-8" />

                    {/* <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-md text-white">
                            <Icon icon="lucide:palette" className="w-6 h-6" />
                        </div>
                        <span className="font-bold text-xl text-gray-800">TrendsED</span>
                    </div> */}

                    {/* Nav Links - you can add real links or routes later */}
                    <div className="space-x-6 text-sm font-medium text-gray-600 hidden md:flex">
                        <a href="#" className="hover:text-purple-600">Join Us</a>
                    </div>
                </div>
            </nav>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">

                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="text-center mb-10">
                            <div className="flex justify-center mb-4">
                                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full shadow-lg">
                                    <Icon icon="lucide:palette" className="w-10 h-10" />
                                </div>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-3">
                                UI/UX Essentials
                            </h1>


                        </div>

                        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                            A beginner-friendly, hands-on course that helps you master the foundations of UI/UX design —
                            from understanding users to designing beautiful, functional interfaces using modern tools.
                        </p>

                        {/* Course Details */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {courseDetails.map((detail, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl px-6 py-8 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-center mb-4">
                                        <Icon icon={detail.icon} className="text-purple-600 w-7 h-7" />
                                    </div>
                                    <p className="text-sm text-gray-500">{detail.label}</p>
                                    <p className="text-lg font-semibold text-gray-800 mt-1">{detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Course Structure */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Course Structure</h2>

                        <div className="space-y-8">
                            {months.map((month, monthIndex) => (
                                <div key={monthIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                                    <div className={`bg-gradient-to-r ${month.color} p-6 text-white`}>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center">
                                                <span className="text-xl font-bold">{monthIndex + 1}</span>
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">Month {monthIndex + 1}</h3>
                                                <p className="text-white/90">{month.title}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {month.weeks.map((week, weekIndex) => {

                                                return (
                                                    <div key={weekIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                                        <div className="flex items-center gap-3 mb-3">
                                                            <div className={`bg-gradient-to-r ${month.color} p-2 rounded-lg`}>
                                                                <Icon icon={week.icon} className="w-5 h-5 text-white" />

                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-gray-800">Week {weekIndex + 1 + (monthIndex * 4)}</h4>
                                                                <p className="text-sm text-gray-600">{week.title}</p>
                                                            </div>
                                                        </div>

                                                        <ul className="space-y-2">
                                                            {week.topics.map((topic, topicIndex) => (
                                                                <li key={topicIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                                                    <Icon icon="lucide:check-circle" className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />

                                                                    <span>{topic}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What You'll Get */}
                    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h2 className="text-2xl font-bold text-center mb-8">What You'll Get</h2>

                        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {benefits.map((benefit, index) => {
                                return (
                                    <div key={index} className="text-center group hover:scale-105 transition-transform cursor-pointer">
                                        <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition-colors">
                                            <Icon icon={benefit.icon} className="w-8 h-8" />

                                        </div>
                                        <p className="font-medium">{benefit.text}</p>
                                    </div>
                                );
                            })}
                        </div>


                    </div>
                </div>
            </div>
            <footer className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h3 className="text-lg font-semibold mb-2">TrendsED Institute</h3>
                    <p className="text-sm mb-2">Empowering the next generation of designers and developers.</p>
                    <p className="text-xs opacity-80">© {new Date().getFullYear()} TrendsED. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default UiUxEssentials;