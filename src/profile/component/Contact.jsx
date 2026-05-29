import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    
    const toastId = toast.loading("Sending your message...");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/abaytefera29@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const data = await response.json();

      if (data.success === "true" || data.success === true) {
        toast.success("Message sent! I'll get back to you soon.", { id: toastId });
        e.target.reset();
      } else {
        toast.error("Oops! Something went wrong.", { id: toastId });
      }
    } catch (error) {
      toast.error("Network error. Please try again.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-[#fafafa] py-24 px-6">
      <Toaster position="bottom-right" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 bg-white rounded-[2.5rem] shadow-2xl shadow-blue-100/50 overflow-hidden border border-gray-100">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-2 bg-gray-900 p-10 md:p-14 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-black mb-6">Let's talk.</h2>
              <p className="text-gray-400 text-lg mb-10">
                Have a project in mind? Reach out and let's build something amazing together.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Email Me</p>
                    <a href="mailto:asnakechlegesse539@gmail.com" className="hover:text-blue-400 transition-colors">abaytefera29@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Location</p>
                    <p>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-4">Follow My Work</p>
              <div className="flex gap-4">
                <a href="#" target="_blank" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-gray-900 transition-all">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-all">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:col-span-3 p-10 md:p-14">
            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Project Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-gray-50 border border-transparent rounded-2xl px-5 py-4 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full lg:w-max px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {loading ? (
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-sm opacity-70" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;