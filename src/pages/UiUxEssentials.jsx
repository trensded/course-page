import React from 'react';
import { Icon } from '@iconify/react';

const UiUxEssentials = () => {
    const courseDetails = [
        { icon: "lucide:calendar", label: "Duration", value: "3 Months" },
        { icon: "lucide:dollar-sign", label: "Fee", value: "LKR 30,000" },
        { icon: "lucide:monitor", label: "Mode", value: "Online " }
    ];

    const lessons = [
        { title: "What is UI & UX? Understanding the Basics", description: "Covers the difference between UI (User Interface) and UX (User Experience), and why both matter in product design." },
        { title: "UX Roles & the Design Process Explained", description: "Introduces common job roles and walks through the step-by-step process of how digital products are designed." },
        { title: "How to Start UX Research & Run a Workshop", description: "Shows how to begin researching users and set up collaborative sessions to gather insights." },
        { title: "Understanding Users: Personas, AI Tools & Validating Problems", description: "Learn how to group users, use simple AI tools to speed up research, and make sure the problem is real and worth solving." },
        { title: "Defining Problems Clearly & Aligning Design Goals", description: "Teaches how to turn research into a clear problem statement and align with team goals." },
        { title: "Feature Planning: Turning User Needs into Product Ideas", description: "Shows how to list out what features a product needs based on what users want." },
        { title: "User Journey Mapping: Steps Users Take in Your Product", description: "Learn how to visually map out the path a user follows, from start to finish in a product." },
        { title: "Improving the Experience with Touchpoints & Delight", description: "Explore how to make each user interaction smooth, helpful, and sometimes even delightful." },
        { title: "Wireframing: Designing with User Thinking in Mind", description: "Learn to draw basic layouts (wireframes) that reflect how users expect to find things." },
        { title: "Layout & Flow: Making Navigation and Screens Easy to Follow", description: "Plan how screens connect and ensure the user knows what to do next with ease." },
        { title: "Types of Prototypes: From Sketch to Clickable Models", description: "Understand low- to high-fidelity prototypes and how to create simple interactive designs." },
        { title: "How to Test Designs with Real Users", description: "Learn how to test your prototype with users, gather feedback, and improve based on what you learn." },
        { title: "Finding UX Problems in Existing Products", description: "Discover common UX mistakes and how to audit real apps or websites for them." },
        { title: "Fixing UX Issues with Practical Design Tweaks", description: "Learn how to improve user experience by applying simple, effective design changes." },
        { title: "Understand the Product Before Adding New Features", description: "Explore how to study how users already use a product before making changes." },
        { title: "Planning New Features to Solve Real Problems", description: "Learn how to introduce new features that are helpful and meaningful to users." },
        { title: "Build a UX Portfolio & Case Study that Stands Out", description: "Learn how to present your projects in a way that impresses employers or clients." },
        { title: "UX Career Prep: Interviews, Jobs & Making an Impact", description: "Get ready for your first UX job with tips on interviews, growth, and working in a team." }
    ];

    const benefits = [
        { icon: "lucide:briefcase", text: "Hands-on Projects" },
        { icon: "lucide:eye", text: "Figma Access + Templates" },
        { icon: "lucide:file-text", text: "Downloadable Resources" },
        { icon: "lucide:message-circle", text: "Mentor Feedback & Support" },
        { icon: "lucide:award", text: "Certificate of Completion" }
    ];

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 opacity-30">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
            </div>

            {/* Navigation */}
            <nav className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <img src="/assets/logo.png" alt="TrendsED logo" className='h-8' />

                        </div>
                        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                            Join Course
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative z-10 pt-20 pb-32 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Floating Icon */}
                    <div className="relative mb-8 inline-block">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-500 hover:scale-110 hover:rotate-6">
                            <Icon icon="mdi:palette" className="w-6 h-6 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-bounce"></div>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
                        UI/UX
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Essentials
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                        Master the art of creating <span className="text-purple-400 font-semibold">beautiful</span> and
                        <span className="text-pink-400 font-semibold"> functional</span> digital experiences
                    </p>

                    {/* Course Stats */}
                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {courseDetails.map((detail, index) => (
                            <div key={index} className="group">
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                                            {/* <IconComponent name={detail.icon} className="w-8 h-8 text-white" /> */}
                                            <Icon icon={detail.icon} className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">{detail.label}</p>
                                    <p className="text-2xl font-bold text-white">{detail.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Curriculum Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            Course Curriculum
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid gap-6">
                        {lessons.map((lesson, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 hover:scale-[1.02]">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center mb-4">
                                                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:rotate-6 transition-transform duration-300">
                                                    {index + 1}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                                                    {lesson.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-300 text-lg leading-relaxed ml-16">
                                                {lesson.description}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative z-10 py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl"></div>
                        <div className="relative bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-md border border-white/10 rounded-3xl p-12">
                            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                What You'll Get
                            </h2>

                            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="group text-center cursor-pointer">
                                        <div className="relative mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple-500/50">
                                                {/* <IconComponent name={benefit.icon} className="w-10 h-10 text-white group-hover:text-purple-300 transition-colors duration-300" /> */}
                                                <Icon icon={benefit.icon} className="w-10 h-10 text-white group-hover:text-purple-300 transition-colors duration-300" />

                                            </div>
                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                                        </div>
                                        <p className="font-semibold text-white text-lg group-hover:text-purple-300 transition-colors duration-300">
                                            {benefit.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center mt-12">
                                <button className="px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-1">
                                    Start Learning Today
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="relative z-10 mt-20 py-12 px-6 border-t border-white/10">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mr-4">
                            <Icon icon="lucide:heart" className="w-6 h-6 text-white" />

                        </div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                            TrendsED Institute
                        </h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-lg">
                        Empowering the next generation of designers and developers.
                    </p>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} TrendsED. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default UiUxEssentials;