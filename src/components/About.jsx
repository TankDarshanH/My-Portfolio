const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6 text-gray-200"
    >
      <div className="w-full max-w-5xl bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-700">
        <h2 className="text-4xl font-extrabold text-white bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-lg shadow-lg text-center mb-8">
          Know More About Me
        </h2>

        {/* About Me Intro */}
        <ul className="list-disc list-inside text-lg leading-relaxed space-y-4 mb-12">
          <li>
            👋 Hey there! I'm{" "}
            <span className="font-semibold text-blue-400">Darshan Tank</span>, a
            passionate{" "}
            <span className="text-blue-500 font-semibold">
              Front-End Developer
            </span>{" "}
            dedicated to crafting sleek, user-friendly, and interactive web
            applications.
          </li>
          <li>
            I specialize in{" "}
            <span className="font-semibold text-blue-400">
              React.js, JavaScript (ES6+), and Tailwind CSS
            </span>
            , building responsive and modern web solutions.
          </li>
          <li>
            🔹 <strong>Short-term goal:</strong> To master modern front-end
            tools like{" "}
            <span className="text-blue-400 font-semibold">TypeScript</span>, {" "}
            <span className="text-blue-400 font-semibold">Next.js</span> and {" "}
            <span className="text-blue-400 font-semibold">Node.js</span> {" "}
            become job-ready for a strong tech role.
          </li>
          <li>
            🔸 <strong>Long-term goal:</strong> To grow into a{" "}
            <span className="text-green-400 font-semibold">
              full-stack developer
            </span>
            , contribute to impactful products, and work on projects that make a
            real difference.
          </li>
          <li>
            🎯 I'm always eager to understand how things work — whether it's in
            tech or daily life, curiosity drives me to keep learning.
          </li>
          <li>
            🌟 In my free time, I enjoy{" "}
            <span className="font-semibold text-yellow-300">travelling</span>,
            playing{" "}
            <span className="font-semibold text-yellow-300">
              all kinds of games
            </span>
            , capturing moments through{" "}
            <span className="font-semibold text-yellow-300">photography</span>,
            staying active with{" "}
            <span className="font-semibold text-yellow-300">exercise</span>, and
            feeding my mind by{" "}
            <span className="font-semibold text-yellow-300">reading books</span>
            .
          </li>
        </ul>

     
        <div className="flex flex-col md:flex-row gap-6 mb-10">
       
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-500 md:w-2/3">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">
              📚 Education
            </h3>
            <div className="relative border-l-4 border-blue-500 pl-6">
              {[
                {
                  degree: "🎓 B.E. in Information Technology",
                  institution: "🏛️ LD College of Engineering, Ahmedabad",
                  duration: "📅 2020 - 2024 | CGPA: 8.17",
                },
                {
                  degree: "📖 Senior Secondary (XII) - Science",
                  institution: "🏫 The Imperial Science School - Dhoraji",
                  duration: "📅 2019 - 2020 | 📊 83.33% (GSEB Board)",
                },
                {
                  degree: "📘 Secondary (X) - Excellence in Science",
                  institution: "🏫 The Imperial Science School - Dhoraji",
                  duration: "📅 2017 - 2018 | 🎯 93.16% (GSEB Board)",
                },
              ].map((edu, index) => (
                <div
                  className="mb-6 relative flex items-start group animate-fadeIn"
                  key={index}
                >
                  <span className="absolute -left-8 top-2 w-4 h-4 bg-red-500 rounded-full group-hover:bg-yellow-400 transition duration-300 animate-pulse"></span>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent animate-textGlow">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 group-hover:text-blue-300 transition duration-300">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 group-hover:text-yellow-300 transition duration-300">
                      {edu.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Motivational Quotes Section */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-purple-500 md:w-1/3">
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">
              🌟 Motivational Quotes
            </h3>
            <div className="flex flex-col gap-6">
              <div className="bg-gray-700 p-5 rounded-xl shadow-md border-l-4 border-yellow-500 transition-transform hover:scale-105 duration-300">
                <p className="text-lg italic text-yellow-300">
                  "Be humble, even when you achieve everything."
                </p>
                <p className="text-sm text-gray-400 mt-1">— Lord Hanuman</p>
              </div>

              <div className="bg-gray-700 p-5 rounded-xl shadow-md border-l-4 border-purple-500 transition-transform hover:scale-105 duration-300">
                <p className="text-lg italic text-purple-300">
                  "Train your mind to be stronger than your feelings."
                </p>
                <p className="text-sm text-gray-400 mt-1">— Keanu Reeves</p>
              </div>
            </div>
          </div>
        </div>

        {/* Internships & Experience Section */}
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg border border-blue-500 mt-10">
          <h3 className="text-2xl font-semibold mb-6 text-blue-400">
            💼 Internships & Experience
          </h3>
          <div className="relative border-l-4 border-blue-500 pl-6">
            {[
              {
                role: "👨‍💻 Intern (React js.)",
                company: "🏢 TatvaSoft",
                duration: "📅 Jul-2023 – Aug-2023",
                description:
                  "Contributed to a dynamic bookstore app using React.js. Worked on UI, enhanced user experience, and implemented features like state management, hooks, and routing.",
              },
              {
                role: "🧠 Intern (Python-Django)",
                company: "🏢 INFOLABZ IT SERVICES PVT. LTD",
                duration: "📅 Jan-2024 – Apr-2024",
                description:
                  "Built a Django-based project called INDIADOCS for secure document sharing. Learned MTV architecture, ORM, authentication, and file handling with advanced security controls.",
              },
            ].map((exp, index) => (
              <div
                className="mb-6 relative flex items-start group animate-fadeIn"
                key={index}
              >
                <span className="absolute -left-8 top-2 w-4 h-4 bg-green-500 rounded-full group-hover:bg-yellow-400 transition duration-300 animate-pulse"></span>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent animate-textGlow">
                    {exp.role}
                  </h4>
                  <p className="text-gray-400 group-hover:text-blue-300 transition duration-300">
                    {exp.company}
                  </p>
                  <p className="text-gray-400 group-hover:text-yellow-300 transition duration-300">
                    {exp.duration}
                  </p>
                  <p className="text-gray-300 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
