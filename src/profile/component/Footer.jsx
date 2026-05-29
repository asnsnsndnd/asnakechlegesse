import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: faGithub, href: "#", label: "GitHub", color: "hover:text-white" },
    { icon: faLinkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: faEnvelope, href: "mailto:asnakechlegesse529@gmail.com", label: "Email", color: "hover:text-red-400" },
  ];

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold text-white tracking-tighter">
              Asnakech<span className="text-blue-500">.</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Full Stack Web & Mobile Developer specializing in the MERN stack and React Native to build robust digital products.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="grid grid-cols-2 gap-8 md:justify-items-center">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Navigation</h4>
              <nav className="flex flex-col gap-2">
                <Link to="/workpage" className="text-sm hover:text-blue-500 transition-colors">Portfolio</Link>
                <Link to="/aboutpage" className="text-sm hover:text-blue-500 transition-colors">About Me</Link>
                <Link to="/contactpage" className="text-sm hover:text-blue-500 transition-colors">Contact</Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-sm uppercase tracking-widest">Specialty</h4>
              <div className="flex flex-col gap-2 text-sm">
                <span className="cursor-default">Web Apps</span>
              
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col items-start md:items-end justify-between">
            <div className="text-left md:text-right">
              <h4 className="text-white font-semibold mb-2">Have a project in mind?</h4>
              <Link 
                to="/contactpage" 
                className="text-blue-500 hover:text-blue-400 font-medium transition-colors"
              >
                Let’s work together &rarr;
              </Link>
            </div>
            <button 
              onClick={scrollToTop}
              className="mt-8 p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors group"
            >
              <FontAwesomeIcon icon={faArrowUp} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] uppercase tracking-widest text-gray-600">
          <p>© {currentYear} Asnakech legesse. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;