import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20">
      <div className="
        max-w-4xl mx-auto 
        bg-white/20 dark:bg-gray-900/30 
        backdrop-blur-md 
        border border-white/30 dark:border-gray-700 
        rounded-2xl 
        shadow-xl 
        py-6 px-6 text-center">

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/naimur-rahman-ullash-a5662a2b9"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 dark:text-blue-400 hover:text-blue-400 transform hover:scale-110 transition-all"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://www.facebook.com/naimur.rahman.ullash"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 dark:text-blue-300 hover:text-blue-400 transform hover:scale-110 transition-all"
          >
            <FaFacebook size={28} />
          </a>

          <a
            href="https://github.com/NaimurUllash70"
            target="_blank"
            rel="noreferrer"
            className="text-gray-200 dark:text-gray-100 hover:text-white transform hover:scale-110 transition-all"
          >
            <FaGithub size={28} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-200 dark:text-gray-400">
          © {new Date().getFullYear()} Naimur Rahman Ullash
        </p>
      </div>
    </footer>
  );
}

export default Footer;
