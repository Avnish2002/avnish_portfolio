import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaLaptopCode />,
      title: "Frontend Development",
      desc: "Building responsive and modern user interfaces using React.js, JavaScript, HTML, CSS and Tailwind CSS.",
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      desc: "Creating secure and scalable backend systems using Python, Django and Node.js.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      desc: "Designing and managing databases using MySQL, MongoDB and SQLite.",
    },
    {
      icon: <FaBrain />,
      title: "Problem Solving",
      desc: "Strong analytical thinking with experience solving 250+ coding problems.",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-[#080808]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-center text-gray-400 max-w-3xl mx-auto mt-6">
            Hi, I'm Avnish Kumar, a Full Stack Developer
            passionate about creating responsive and scalable
            web applications. I enjoy solving real-world
            problems through technology and continuously
            learning new tools and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-2xl border border-red-500/20 hover:border-red-500 transition-all hover:-translate-y-2"
            >
              <div className="text-red-500 text-4xl mb-5">
                {card.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">
                {card.title}
              </h3>

              <p className="text-gray-400">
                {card.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default About;