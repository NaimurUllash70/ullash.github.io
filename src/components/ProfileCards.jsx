import { motion } from "framer-motion";
import heroImg from "../assets/profile.jpg";

const ProfileCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* PHOTO CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 flex flex-col items-center"
      >
        <img
          src={heroImg}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-green-400"
        />
        <h3 className="text-xl font-semibold">Naimur Rahman Ullash</h3>
        <p className="text-sm text-gray-400">CS Student • Web Enthusiast</p>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl bg-white/5 border border-white/10 p-6"
      >
        <h4 className="text-lg font-semibold mb-2">What I Do</h4>
        <p className="text-gray-400 text-sm leading-relaxed">
          I build modern websites, explore AI concepts, and love learning how
          systems work behind the scenes.
        </p>
      </motion.div>

      {/* CARD 3 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="rounded-2xl bg-white/5 border border-white/10 p-6"
      >
        <h4 className="text-lg font-semibold mb-2">Currently Learning</h4>
        <ul className="text-gray-400 text-sm space-y-1">
          <li>• Advanced React</li>
          <li>• AI Fundamentals</li>
          <li>• System Design</li>
        </ul>
      </motion.div>

    </div>
  );
};

export default ProfileCards;
