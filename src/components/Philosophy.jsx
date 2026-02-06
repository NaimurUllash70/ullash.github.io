import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

const Philosophy = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">
      
      {/* LEFT — PHOTO CARD */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:sticky lg:top-32"
      >
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <img
            src={heroImg}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-green-400 shadow-[0_0_30px_#19ff80]"
          />

          <h3 className="mt-4 text-xl font-semibold">
            My Philosophy
          </h3>

          <p className="text-sm text-gray-400 mt-2">
            How I think. How I build.  
            Why I learn the way I do.
          </p>
        </div>
      </motion.div>

      {/* RIGHT — CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-2 space-y-10"
      >

        {/* BLOCK 1 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🧠 Learning over rushing
          </h4>
          <p className="text-gray-300 leading-relaxed">
            I don’t believe in rushing to <span className="text-green-400">“know everything.”</span>  
            I believe in understanding things properly — even if it takes longer.
          </p>
        </div>

        {/* BLOCK 2 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🛠 Tools are temporary
          </h4>
          <p className="text-gray-300 leading-relaxed">
            Tools change. Frameworks evolve.  
            What stays is the ability to think clearly, break problems down,
            and stay curious.
          </p>
        </div>

        {/* BLOCK 3 */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🎯 Simplicity with depth
          </h4>
          <p className="text-gray-300 leading-relaxed">
            I try to build things that are simple on the surface,
            but thoughtful underneath — both in code and in life.
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default Philosophy;
