const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
      {/* LEFT */}
      <div>
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 leading-relaxed text-lg">
          Hi! I’m Naimur Rahman Ullash. I’m enthusiastic about learning and
          expanding my knowledge in technology. I enjoy exploring how things
          work under the hood and building modern, clean interfaces that feel
          good to use.
        </p>
      </div>

      {/* RIGHT */}
      <div className="grid grid-cols-2 gap-5">
        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-1">Education</h4>
          <p className="text-sm text-gray-400">
            BSc in CSE<br />Northern University Bangladesh
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-1">Career Goal</h4>
          <p className="text-sm text-gray-400">
            Become a skilled software engineer
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-1">Traits</h4>
          <p className="text-sm text-gray-400">
            Curious, consistent, self-motivated
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white/5 border border-white/10">
          <h4 className="font-semibold mb-1">Interests</h4>
          <p className="text-sm text-gray-400">
            Tech, books, problem solving
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
