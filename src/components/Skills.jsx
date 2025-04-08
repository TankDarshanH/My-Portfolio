import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNetlify,
  SiNodedotjs,
  SiTypescript,
  SiRedux,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 size={28} />, color: "bg-red-500", name: "HTML5" },
  { icon: <FaCss3Alt size={28} />, color: "bg-blue-500", name: "CSS3" },
  { icon: <FaJs size={28} />, color: "bg-yellow-500", name: "JavaScript" },
  { icon: <SiTailwindcss size={28} />, color: "bg-cyan-500", name: "Tailwind" },
  { icon: <FaReact size={28} />, color: "bg-purple-500", name: "React.js" },
  { icon: <FaGitAlt size={28} />, color: "bg-orange-500", name: "Git" },
  { icon: <FaGithub size={28} />, color: "bg-gray-700", name: "GitHub" },
  { icon: <SiNetlify size={28} />, color: "bg-green-500", name: "Netlify" },
  { icon: <SiRedux size={28} />, color: "bg-purple-600", name: "Redux" },
];

const workingOn = [
  {
    icon: <SiNodedotjs size={28} className="text-green-500" />,
    color: "bg-green-600",
    name: "Node.js",
  },
  {
    icon: <SiTypescript size={28} />,
    color: "bg-blue-700",
    name: "TypeScript",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6 text-gray-200"
    >
      <div className="w-full max-w-5xl bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-700">
        <h2 className="text-4xl font-extrabold text-white bg-gradient-to-r from-green-600 to-green-400 p-4 rounded-lg shadow-lg text-center mb-8">
          My Skills & Tools
        </h2>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            🚀 Skills & Technologies
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`${skill.color} p-4 rounded-lg text-center shadow-md text-white flex flex-col items-center`}
              >
                {skill.icon}
                <strong className="text-lg mt-2">{skill.name}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            🔧 Currently Working On
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {workingOn.map((tech, index) => (
              <div
                key={index}
                className={`${tech.color} p-4 rounded-lg text-center shadow-md text-white flex flex-col items-center`}
              >
                {tech.icon}
                <strong className="text-lg mt-2">{tech.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
