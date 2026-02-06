import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileCards from "./components/ProfileCards";
import Philosophy from "./components/Philosophy";
import About from "./components/About";
import Skills from "./components/Skills";
import Academic from "./components/Academic";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

/* SECTION ANIMATION */
const sectionAnim = {
  hidden: {
    opacity: 0,
    y: 120,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

const sectionProps = {
  variants: sectionAnim,
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.9, ease: "easeOut" },
};

function App() {
  return (
    <div className="bg-[#020617] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* PROFILE CARDS */}
      <motion.section {...sectionProps} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <ProfileCards />
        </div>
      </motion.section>

      {/* PHILOSOPHY (✅ NEW – PHASE 1A) */}
      <motion.section {...sectionProps} className="py-28 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Philosophy />
        </div>
      </motion.section>

      {/* ABOUT */}
      <motion.section {...sectionProps} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <About />
        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section {...sectionProps} className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Skills />
        </div>
      </motion.section>

      {/* ACADEMIC */}
      <motion.section {...sectionProps} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Academic />
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section {...sectionProps} className="py-24 bg-white/5">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <Contact />
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}

export default App;
