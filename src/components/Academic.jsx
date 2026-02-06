import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

const Academic = () => {
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <img
            src={heroImg}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-green-400 shadow-[0_0_30px_#19ff80]"
          />

          <h3 className="mt-4 text-2xl font-semibold">
            🎓 Academic Path
          </h3>

          <p className="text-gray-400 text-sm mt-2">
            My learning journey —  
            from fundamentals to engineering mindset.
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

        {/* EDUCATION TIMELINE */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-4">📚 Education</h4>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="font-semibold text-white">SSC</span><br />
              Boalmari High School <br />
              <span className="text-sm text-gray-400">Year: 2020</span>
            </p>

            <p>
              <span className="font-semibold text-white">HSC</span><br />
              Rajshahi Court College <br />
              <span className="text-sm text-gray-400">Year: 2022</span>
            </p>

            <p>
              <span className="font-semibold text-white">University</span><br />
              Northern University Bangladesh <br />
              <span className="text-sm text-gray-400">
                Department: Computer Science & Engineering
              </span>
            </p>
          </div>
        </div>

        {/* CAREER OBJECTIVE */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🎯 Career Objective
          </h4>
          <p className="text-gray-300 leading-relaxed">
            My goal is to explore the world of technology deeply and understand
            how things truly work from the inside. I aim to build systems that
            make technology simpler and more accessible for people.
          </p>
        </div>

        {/* PERSONAL TRAITS */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🧩 Personal Traits
          </h4>
          <p className="text-gray-300 leading-relaxed">
            I value honesty with myself, consistent effort, and long-term
            thinking more than shortcuts or quick wins.
          </p>
        </div>

        {/* INTERESTS */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h4 className="text-xl font-semibold mb-3">
            🌱 Interests
          </h4>
          <p className="text-gray-300 leading-relaxed">
            I enjoy tech podcasts, exploring ideas beyond coursework, and
            reading books of different genres — especially thrillers.
          </p>
        </div>

      </motion.div>
    </div>
  );
};

export default Academic;
