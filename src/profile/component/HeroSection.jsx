import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#fafafa]">
      
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-700 bg-blue-50 rounded-full">
            Available for remote work 🌍
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6">
            I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Asnakech legesse
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6 leading-snug">
            Full Stack Developer building real-world systems for businesses & government
          </h2>
          
          <p className="text-gray-600 text-lg mb-10 max-w-xl leading-relaxed">
            I develop scalable, production-ready web and mobile applications using{" "}
            <span className="text-gray-900 font-semibold">MERN stack and React Native</span>.  
            I have experience building systems used in real environments, including company platforms and government solutions that improve workflow and efficiency.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
            <Link 
              to="/workpage" 
              className="px-8 py-4 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-gray-300"
            >
              View My Work
            </Link>

            <Link 
              to="/contactpage" 
              className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 transition-all"
            >
              Let’s Work Together
            </Link>

          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            
            <div className="absolute inset-0 bg-blue-600 rounded-[40px] rotate-6 -z-10 opacity-10 animate-pulse" />
            
            <img
              src="/asni.png"
              alt="asnakech"
              className="w-72 h-72 md:w-96 md:h-96 object-contain rounded-[40px] shadow-2xl border-8 border-white bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;