import React from "react";
import UpdateBadge from "../reusables/UpdateBadge";

function Hero({ onContactClick }) {
  return (
    <section
      className="relative z-10 overflow-hidden bg-[#020817] text-white min-h-screen px-8 py-24 flex items-center"
      id="home"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-10 left-1/2 w-[1500px] h-[1500px] animate-slow-spin opacity-90">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-dashed border-blue-500/30 rounded-full" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] h-[950px] border-2 border-solid border-blue-400/20 rounded-full" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1300px] h-[1300px] border-2 border-dashed border-cyan-500/25 rounded-full" />
        </div>

        <div className="absolute top-10 left-10 w-96 h-96 bg-blue-600/25 blur-[120px] rounded-full animate-fluid-glow-1" />
        <div className="absolute bottom-5 right-5 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full animate-fluid-glow-2" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-blue-400 uppercase tracking-[3px] mb-4 text-xs font-bold font-plus-jakarta">
            IvyTech Integrated Solutions
          </p>

          <div className="inline-flex justify-center mb-6">
            <UpdateBadge tag="2026" text="Simple and Reliable Mobile Solutions" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] mb-6 font-plus-jakarta">
            Equipping Digital Services <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic font-medium">
              And integrated solutions.
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10 max-w-2xl mx-auto font-inter font-normal">
            Connecting businesses to reliable digital solutions. We power your bulk messaging, utility bills, and airtime automation all in one secure portal.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center font-inter">
            <button
              onClick={onContactClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold transition-colors cursor-pointer shadow-lg shadow-blue-600/20"
            >
              Get Started
            </button>

            <a
              href="#services"
              className="inline-flex items-center justify-center bg-transparent border border-white/20 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-200"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
