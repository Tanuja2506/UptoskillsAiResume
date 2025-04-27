import React from 'react'
import Navbar from './Navbar'
import Resume from './resume.png'

const Home = () => {
  // Dummy animate variable; adjust as needed.
  const animate = true;

  // Dummy navigation function for hero buttons.
  const navigateTo = (url) => {
    window.location.href = url;
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-16 py-8 md:py-12 mt-4 md:mt-8">
        <div className="w-full md:max-w-lg text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-gray-800">Ai Resume Builder is a </span>
            <span className="text-indigo-600">Resume Builder</span>
            <span className="text-gray-800"> helps you get hired at top companies</span>
          </h1>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6 sm:mt-8 space-y-3 sm:space-y-0 sm:space-x-4 ">
            <button 
             className={`px-6 py-3 cursor-pointer bg-emerald-500 text-white font-medium rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 ${
              animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
              onClick={() => navigateTo('/templatepage')}
            >
              Build Your Resume
            </button>
            {/* <button 
              className="px-6 py-3 text-indigo-600 bg-indigo-100 rounded-md font-medium"
              onClick={() => navigateTo('/resume-score')}
            >
              Get Your Resume Score
            </button> */}
          </div>
        </div>

        <div className="relative mt-12 md:mt-0">
          <div className="absolute top-0 right-0 bg-emerald-100 rounded-full px-4 py-1 text-emerald-700 font-medium z-20">
            HIRED
          </div>
          <div className="relative">
            {/* Using the image from public/assets/Resume.jpg */}
            <div className="w-64 sm:w-80 md:w-96 h-96 overflow-hidden rounded-lg shadow-xl transform rotate-3">
              <img
                src="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Resume Example"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ATS Hero Section with Gradient Background */}
      <div className="relative px-4 py-20 md:py-32 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-blue-900">
        {/* Curved Lines Decoration */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,0 C300,150 600,50 1200,200 L1200,600 L0,600 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              d="M0,100 C400,50 800,150 1200,50 L1200,600 L0,600 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
            ></path>
            <path
              d="M0,200 C500,250 700,150 1200,250 L1200,600 L0,600 Z"
              fill="none"
              stroke="white"
              strokeWidth="2"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-start justify-between">
            {/* Left Section - Text Content */}
            <div className="md:w-1/2 z-10">
              <h1
                className={`text-4xl md:text-5xl font-bold mb-6 text-white transition-all duration-1000 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Resumes optimized for applicant tracking systems (ATS)
              </h1>
              <p
                className={`text-lg md:text-xl text-gray-200 mb-8 transition-all duration-1000 delay-300 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                AI Resume Builder resumes and cover letters are vigorously tested against major ATS systems to ensure complete parsability
              </p>
              <button
                className={`px-6 py-3 cursor-pointer bg-emerald-500 text-white font-medium rounded-md hover:bg-emerald-600 transition-all duration-300 transform hover:scale-105 ${
                  animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                onClick={() => navigateTo('/templatepage')}
              >
                Build an ATS-Friendly Resume
              </button>
            </div>

            {/* Right Section - Feature Cards */}
            <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col space-y-6 z-10">
              {/* Feature Card 1 */}
              <div
                className={`flex items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20 transition-all duration-1000 delay-100 ${
                  animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-black font-medium text-lg">
                  Readable contact information
                </span>
              </div>

              {/* Feature Card 2 */}
              <div
                className={`flex items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20 transition-all duration-1000 delay-300 ${
                  animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                </div>
                <span className="text-black font-medium text-lg">
                  Full experience section parsing
                </span>
              </div>

              {/* Feature Card 3 */}
              <div
                className={`flex items-center bg-white bg-opacity-10 backdrop-blur-sm p-4 rounded-lg border border-white border-opacity-20 transition-all duration-1000 delay-500 ${
                  animate ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                }`}
              >
                <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                  <svg
                    className="w-6 h-6 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="text-black font-medium text-lg">
                  Optimized skills section
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
<footer className="bg-gray-900 text-white py-8 mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl font-bold">AI Resume Builder</h2>
        <p className="text-sm text-gray-400">Build smart, get hired faster.</p>
      </div>
      <div className="flex space-x-6">
        <a href="/templatepage" className="text-gray-300 hover:text-white transition duration-300">
          Templates
        </a>
        <a href="/About" className="text-gray-300 hover:text-white transition duration-300">
          Features
        </a>
        <a href="/Login" className="text-gray-300 hover:text-white transition duration-300">
          Contact
        </a>
      </div>
    </div>
    <div className="mt-6 text-center text-gray-500 text-sm">
      © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
};

export default Home;
