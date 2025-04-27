import React, { useState } from "react";
import Navbar from "./Navbar";
const About = () => {
  const historyData = [
    {
      year: "2021",
      title: "The Idea Was Born",
      desc: "We recognized a need for smarter resumes and began building the vision.",
    },
    {
      year: "2022",
      title: "Prototype Launch",
      desc: "Released our first beta version to a closed group of testers and refined the AI.",
    },
    {
      year: "2023",
      title: "Public Release",
      desc: "Launched the AI Resume Builder to the public with personalization features.",
    },
    {
      year: "2024",
      title: "Growth & Feedback",
      desc: "Over 50,000 users joined! We improved UI/UX and added new resume templates.",
    },
    {
      year: "2025",
      title: "Next Chapter",
      desc: "Onboarding employers and creating smart candidate-employer matchmaking.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % historyData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + historyData.length) % historyData.length);

  return (
    <div className="bg-white text-gray-800">
        <Navbar/>
      {/* Section 1: Hero */}
      <section className="py-16 px-6 md:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
            AI Resume Builder that’s all about you
          </h1>
          <p className="text-2xl text-gray-600">
            We build an intelligent resume builder that empowers users to showcase their
            strengths, achievements, and personality. Our AI suggestions make sure every
            resume is personalized, professional, and ready to impress.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/grp.png"
            alt="Team Collaboration"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </section>

      {/* Section 2: Belief with Video */}
      <section className="py-20 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Video */}
        <div className="md:w-1/2 flex justify-center">
          <video
            src="/abt.mp4"
            controls
            className="rounded-xl shadow-lg w-full"
          />
        </div>

        {/* Right: Beliefs */}
        <div className="md:w-1/2">
          <h2 className="text-6xl font-bold mb-4">We believe…</h2>
          <p className="text-gray-600 mb-4 text-2xl">
            that earning and keeping customer trust is the key to success.
          </p>
          <p className="text-gray-600 mb-4 text-2xl">
            We stay curious for new opportunities, challenge ourselves, and learn from mistakes.
          </p>
          <p className="text-gray-600 mb-6 text-2xl">
            We speak candidly and treat our people respectfully.
          </p>
        </div>
      </section>

      {/* Section 3: Our Journey Slider */}
      <section className="py-16 px-6 md:px-12 lg:px-24 text-center bg-gray-50">
        <h2 className="text-5xl font-bold mb-8">Our Journey</h2>

        <div className="relative w-full max-w-4xl mx-auto">
          {/* Slide Content */}
          <div className="bg-white shadow-xl rounded-2xl p-10 transition duration-500 ease-in-out">
            <h3 className="text-3xl font-semibold mb-2 text-green-600">
              {historyData[currentSlide].year}
            </h3>
            <h4 className="text-2xl font-bold mb-2">
              {historyData[currentSlide].title}
            </h4>
            <p className="text-gray-600 text-lg">{historyData[currentSlide].desc}</p>
          </div>

          {/* Arrows */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              ⬅️
            </button>
            <button
              onClick={nextSlide}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              ➡️
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
