import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "MovieVerse",
    description:
      "MovieVerse is a modern and responsive web application that allows users to search for movies, explore trending content, and get real-time details like rating , language & releaseing year using the TMDB API.The app is fully responsive and optimized for mobile devices. Built with React.js, Tailwind CSS, and Appwrite for user authentication and backend functionality.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "TMDB API",
      "Appwrite",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    github: "https://github.com/TankDarshanH/Movieverse",
    demo: "https://movievese.netlify.app/",
    image: "/movieverse.png",
  },
  {
    title: "Annapurna Restaurant App",
    description:
      "Annapurna is a feature-rich food ordering SPA built for a modern restaurant experience. Users can browse dynamic menus, add items to the cart, leave reviews, and log in for personalized features. Designed with a focus on user experience,uses localstorage for authentication, With a stylish frontend using React and Tailwind, it offers a seamless and engaging food ordering journey.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/TankDarshanH/Annapurna-restaurant",
    demo: "https://annapurna-restaurant.netlify.app/",
    image: "/annapurna.png",
  },
  {
    title: "MyPortfolio - Frontend Developer Portfolio",
    description:
      "This is my personal developer portfolio showcasing a collection of modern and responsive web applications. Built with a focus on clean UI and smooth UX, the portfolio reflects my skills in React.js, Tailwind CSS, and JavaScript. It features live demos, GitHub links, and detailed descriptions of my best projects",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/TankDarshanH/My-Portfolio",
    demo: "https://darshan-tank-portfolio.netlify.app/",
    image: "/portfolio.png",
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="text-white px-4 py-16 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#2c2c2c]"
    >
      <h2 className="text-4xl font-bold mb-12 animated-text text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative w-80 h-[560px] rounded-2xl p-[2px] bg-gradient-to-tr from-[#ff00ff] via-[#00ffff] to-[#9333ea] hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="h-full w-full bg-[#111] rounded-2xl p-4 flex flex-col justify-between shadow-[0_0_15px_rgba(0,255,255,0.1)]">
              <div>
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded-xl mb-4 border border-[#333]"
                />
                <h3 className="text-xl font-bold text-[#00ffcc] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-auto">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-gradient-to-r from-pink-500 to-yellow-500 text-black font-semibold px-4 py-2 rounded-full hover:scale-105 transition flex items-center gap-2"
                >
                  Live Demo <FaExternalLinkAlt className="text-xs" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-gray-500 px-4 py-2 rounded-full hover:bg-[#1a1a1a] transition flex items-center gap-2"
                >
                  GitHub <FaGithub className="text-xs" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
