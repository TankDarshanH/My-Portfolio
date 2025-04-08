import React, { useState } from "react"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div
      id="contact" 
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 p-6 text-gray-200"
    >
      <div className="w-full max-w-5xl bg-gray-900 shadow-lg rounded-2xl p-8 border border-gray-700 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-300 mb-12">
            Let's Connect!
          </h2>
          <p className="text-gray-400 mb-4">
            Feel free to reach out and share your experience with my portfolio!
            I'd love to hear your feedback and thoughts on how you liked it.
          </p>
          <div className="text-gray-400 space-y-2">
            <p className="font-medium">
              📧{" "}
              <span className="text-blue-400">darshantank4188@gmail.com</span>
            </p>
            <p className="font-medium">
              📞 <span className="text-green-400">+91-9328774190</span>
            </p>
            <p className="font-medium">
              📍 <span className="text-red-400">Ahmedabad, Gujarat, India</span>
            </p>
          </div>
        </div>

        <div className="md:w-1/2 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-200"
            />
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-200"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 bg-gray-800 text-gray-200 h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full p-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
