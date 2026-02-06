import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section className="relative w-full py-24 px-6 bg-[#032a1d] text-white overflow-hidden">

      {/* STAR BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle,#19ff8055_1px,transparent_1px)] bg-[length:4px_4px] opacity-30 animate-[stars_12s_linear_infinite]"></div>

        <style>{`
          @keyframes stars {
            from { transform: translateY(0); }
            to { transform: translateY(-350px); }
          }
        `}</style>
      </div>

      {/* SPIDER-MAN WEB ANIMATION */}
      <svg
        className="absolute inset-0 w-full h-full opacity-25 z-0 animate-[webMove_10s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="webPattern"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M60 0 L60 120 M0 60 L120 60 
              M20 20 L100 20 M20 100 L100 100
              M20 20 L20 100 M100 20 L100 100
              M20 20 L100 100 M100 20 L20 100"
              stroke="#19ff80"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#webPattern)" />
      </svg>

      <style>{`
        @keyframes webMove {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, -20px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-14 z-10">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hi, I’m <span className="text-green-400">Naimur Rahman Ullash</span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-4 text-green-300">
            <TypeAnimation
              sequence={[
                "WordPress Custom",
                1500,
                "AI Enthusiast",
                1500,
                "CS Student",
                1500,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-200 text-lg">
            I enjoy exploring technology, building modern websites,
            and learning deeply how things actually work.
          </p>
        </motion.div>

        {/* PROFILE IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={heroImg}
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-[0_0_25px_#19ff80] border-4 border-green-400"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
