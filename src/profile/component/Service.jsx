import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faMobileAlt,
  faDatabase,
  faLayerGroup,
  faRocket,
  faMicrochip
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faLaptopCode,
    category: "Web",
    title: "Web Development",
    description: "Building scalable, production-ready web platforms used in real businesses, optimized for performance, SEO, and accessibility with React, Next.js, and Tailwind CSS.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: faMobileAlt,
    category: "Mobile",
    title: "App Development",
    description: "Creating cross-platform mobile applications for iOS and Android with React Native, providing smooth native-like performance and seamless user experiences.",
    color: "from-indigo-600 to-blue-500"
  },
  {
    icon: faDatabase,
    category: "Backend",
    title: "System Architecture",
    description: "Designing robust server-side logic, RESTful APIs, and database solutions using Node.js, Express, MongoDB, and PostgreSQL for secure, scalable applications.",
    color: "from-purple-600 to-indigo-500"
  },
  {
    icon: faLayerGroup,
    category: "Design",
    title: "UI/UX Optimization",
    description: "Refining user journeys and interfaces to improve usability, engagement, and conversion with Tailwind CSS, Framer Motion, and design best practices.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: faRocket,
    category: "Deployment",
    title: "DevOps & Cloud",
    description: "Streamlining CI/CD pipelines and deploying applications to Vercel, AWS, or Render to ensure high uptime and smooth scalability for live projects.",
    color: "from-orange-500 to-yellow-500"
  },
  {
    icon: faMicrochip,
    category: "Integration",
    title: "API & Third-Party Services",
    description: "Integrating external services like Stripe, Cloudinary, Firebase, and other APIs to enhance platform functionality and improve user experiences.",
    color: "from-emerald-500 to-teal-400"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#fafafa] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-[0.2em] uppercase text-sm">Expertise</span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3 mb-6">
            Solutions I Deliver <span className="text-blue-600">.</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            I combine technical excellence with real-world experience to build applications and systems that solve problems, streamline operations, and create measurable impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient Corner Decoration */}
              <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white text-2xl mb-6 shadow-lg shadow-blue-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                <FontAwesomeIcon icon={service.icon} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">
                  {service.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-blue-600 font-bold text-xs cursor-pointer hover:underline">
                  Inquire Now →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;