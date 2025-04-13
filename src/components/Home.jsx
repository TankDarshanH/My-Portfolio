import React from "react";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      id="home"
      className="flex flex-col md:flex-row justify-center items-center gap-10 p-8 min-h-screen pt-20 bg-gray-900"
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">
          Welcome to my portfolio!
        </h1>
        <p className="text-2xl text-gray-300">
          My name is <span className="animated-text">Darshan Tank.</span>
          <br />
          I'm a passionate{" "}
          <span className="animated-text">Front-End Developer</span>
          <br />
          dedicated to crafting engaging and interactive user experiences.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="https://drive.google.com/file/d/1YkgxBy2LT807EZ-LIH9uV0_tTKFzCbTx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg"
          >
            View Resume
          </a>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-green-500 to-green-400 text-white px-6 py-3 rounded-full text-lg font-semibold hover:opacity-90 transition-all shadow-lg cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Profile Image with Neon Border */}
      <div className="relative w-80 h-80 flex items-center justify-center">
        <div className="neon-border"></div>
        <img
          src="/My_self.png"
          className="w-72 h-72 rounded-full object-cover border-4 border-gray-800"
          alt="Darshan Tank"
        />
      </div>
    </div>
  );
};

export default Home;
