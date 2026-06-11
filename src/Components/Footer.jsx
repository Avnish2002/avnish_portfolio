import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-black border-t border-red-500/20 py-12">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-white">
                Avnish
              </span>
              <span className="text-red-500">
                {" "}Kumar
              </span>
            </h2>

            <p className="mt-4 text-gray-400">
              Full Stack Developer passionate about
              building scalable and modern web
              applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#skills">Skills</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              <a
                href="https://github.com/Avnish2002"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/avnish2002"
                target="_blank"
                rel="noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:helloavnishk@gmail.com"
                className="hover:text-red-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 Avnish Kumar. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-red-500 p-3 rounded-full hover:bg-red-600 transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;