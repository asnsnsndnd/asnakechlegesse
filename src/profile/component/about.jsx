import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faServer, faToolbox, faDownload } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const techStack = [
    { 
      name: "Frontend & Mobile", 
      icon: faCode,
      skills: ["React", "Next.js", "React Native", "JavaScript", "Tailwind CSS", "HTML/CSS"] 
    },
    { 
      name: "Backend & DB", 
      icon: faServer,
      skills: ["Node.js", "Express", "PostgreSQL", ] 
    },
    { 
      name: "DevOps & Tools", 
      icon: faToolbox,
      skills: ["Git/GitHub", "Cloudinary", "Vercel", "Render", "Postman", "Linux"] 
    }
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden bg-[#fafafa]">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />

      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">
        
        {/* Left Column: Profile Card */}
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
          <div className="relative group mx-auto lg:mx-0 w-fit">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-white p-3 rounded-[2.5rem] shadow-xl">
              <img
                src='/asni.png'
                alt="Abay Tefera"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-[2rem] object-contain grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="mt-10 space-y-4 text-center lg:text-left">
            <div>
              <h3 className="text-gray-900 font-bold text-2xl tracking-tight">Asnakech legesse</h3>
              <p className="text-blue-600 font-medium italic text-sm">Full Stack Developer | Production Systems</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-500 text-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Based in Ethiopia • Open to remote
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1">
          <header className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digital Solutions</span> with Impact
            </h2>
            <div className="w-20 h-1.5 bg-blue-600 rounded-full mx-auto lg:mx-0"></div>
          </header>

          {/* Professional About */}
          <div className="prose prose-lg text-gray-600 space-y-6 leading-relaxed">
            <p>
              I am a Full Stack Developer with hands-on experience building 
              <span className="text-gray-900 font-semibold"> real-world systems</span> 
              for companies and government institutions.
            </p>
            <p>
              My work includes production-level applications such as a 
              <span className="text-gray-900 font-semibold italic"> city administration management system</span> 
              that digitizes workflows, improves operational efficiency, and provides real-time data management.
            </p>
            <p>
              I specialize in developing scalable web and mobile applications using 
              <span className="text-gray-900 font-semibold"> MERN Stack and React Native</span>, focusing on performance, security, and usability.
            </p>
            <p>
              My goal is to create products that solve tangible problems, streamline processes, and deliver measurable impact.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((category) => (
                <div key={category.name} className="group p-6 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <FontAwesomeIcon icon={category.icon} />
                    </div>
                    <h4 className="font-bold text-gray-900">{category.name}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-lg border border-gray-100">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real Experience / Metrics */}
          <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h4 className="text-2xl font-bold text-gray-900">2</h4>
              <p className="text-sm text-gray-500">Real Projects</p>
            </div>
          
            <div>
              <h4 className="text-2xl font-bold text-gray-900">100%</h4>
              <p className="text-sm text-gray-500">Production Ready</p>
            </div>
          </div>

          <div className="mt-8 text-center sm:text-left text-sm text-gray-400">
            Available for freelance & full-time opportunities
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;