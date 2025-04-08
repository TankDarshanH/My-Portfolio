import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto flex flex-col items-center text-center px-4">
        <p className="text-lg font-semibold">
          &copy; {new Date().getFullYear()} Darshan Tank
        </p>
        <p className="text-sm text-gray-300 mt-1">
          Front-End Developer | React | JavaScript | Tailwind
        </p>
        <div className="flex space-x-6 mt-4">
          {[
            { href: "https://github.com/TankDarshanH", 
              icon: <FaGithub /> },
            {
              href: "https://www.linkedin.com/in/darshan-tank-9538b9257/",
              icon: <FaLinkedin />,
            },
            {
              href: "https://x.com/DarshanTank_43?t=2gIWy9JopqfZbZmSiykvkw&s=09",
              icon: <FaTwitter />,
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-2xl transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
