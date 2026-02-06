const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "C",
  "C++",
  "Git",
];

const Skills = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-white/5 border border-white/10 text-center
                       hover:bg-white/10 hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
