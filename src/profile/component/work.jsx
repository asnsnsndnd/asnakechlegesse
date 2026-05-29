import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLock } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    title: "Out of the Ashe",
    description: "A specialized data management platform built to track and support child welfare information with a robust backend.",
    credentials: { email: "asnakechlegesse920@gmail.com", pass: "Abu4858@" },
    tech: ["React", "Node.js", "Express", "MongoDB", "Prisma", "Tailwind"],
    image: "https://res.cloudinary.com/dkzvlqjp9/image/upload/v1773671605/out_of_the_aizsih.png", 
    live: "https://child-frontend.vercel.app/",
    type: "Full Stack"
  },
 
 

  {
    title: "EthioCommerce",
    description: "A high-performance e-commerce platform built with React and Tailwind CSS, featuring a sleek UI, responsive design, and seamless user functionality.",
    tech: ["React", "Tailwind CSS"],
    image: "https://res.cloudinary.com/dkzvlqjp9/image/upload/v1773671813/ecomersi_nxsey0.png", 
    live: "https://abay-eco.vercel.app/",
    type: "Front End"
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-[#fafafa] px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mt-3">
              Featured Projects<span className="text-blue-600">.</span>
            </h2>
          </div>
          <p className="text-gray-500 font-medium">
            Showing {projects.length} selected works
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2"> 
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 flex flex-col"
            >
              {/* Media */}
              <div className="relative aspect-video overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Type Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs font-bold rounded-full shadow-sm">
                    {project.type}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">View Project →</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {project.description}
                </p>

                {/* Demo Credentials */}
                {project.credentials && (
                  <div className="mb-6 p-4 bg-blue-50/50 rounded-2xl border border-blue-100 shadow-sm">
                    <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider mb-2">
                      <FontAwesomeIcon icon={faLock} />
                      Demo Access
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <p className="text-gray-600"><span className="font-semibold text-gray-900">User:</span> {project.credentials.email}</p>
                      <p className="text-gray-600"><span className="font-semibold text-gray-900">Pass:</span> {project.credentials.pass}</p>
                    </div>
                  </div>
                )}

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-[11px] font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-lg uppercase tracking-tight">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Launch Button */}
                <div className="mt-auto">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-white bg-gray-900 px-8 py-3.5 rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-gray-200"
                  >
                    Launch Application
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;