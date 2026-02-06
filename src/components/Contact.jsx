import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
      
      {/* LEFT — PHOTO & CONTACT CARD */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:sticky lg:top-32"
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <img
            src={heroImg}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-green-400 shadow-[0_0_30px_#19ff80]"
          />

          <h3 className="mt-4 text-2xl font-semibold">
            Let’s Talk 👋
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            Open to discussions, ideas, collaborations  
            or just a good tech conversation.
          </p>

          <div className="mt-6 space-y-4 text-sm">
            <p className="flex items-center gap-2">
              📧 <span className="text-gray-300">naimurullash@gmail.com</span>
            </p>
            <p className="flex items-center gap-2">
              📱 <span className="text-gray-300">01862668770</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* RIGHT — FORM */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-2"
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h4 className="text-xl font-semibold mb-6">
            ✉️ Send a Message
          </h4>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="bg-transparent border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400"
              />
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400"
              />
            </div>

            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full bg-transparent border border-white/15 rounded-lg px-4 py-3 focus:outline-none focus:border-green-400"
            />

            <button
              type="submit"
              className="mt-2 inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-lg transition"
            >
              🚀 Send Message
            </button>
          </form>
        </div>
      </motion.div>

    </div>
  );
};

export default Contact;
