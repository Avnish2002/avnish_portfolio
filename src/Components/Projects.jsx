import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Machine Wash Management System",
      description:
        "A web-based application that manages washing machine bookings, customer records, machine availability and service tracking.",
      tech: ["React.js", "Django", "MySQL"],
      github:
        "https://github.com/Avnish2002/Machine_Wash_Management_System",
      demo: "#",
    },

    {
      title: "Carpool Management System",
      description:
        "A ride-sharing platform allowing users to offer rides, search rides and manage transportation efficiently.",
      tech: ["Flask", "HTML", "CSS", "SQLite"],
      github: "https://github.com/Avnish2002",
      demo: "#",
    },

    {
      title: "AI Chatbot",
      description:
        "An intelligent chatbot capable of handling real-time user conversations with dynamic responses.",
      tech: ["Python", "JavaScript", "Database"],
      github: "https://github.com/Avnish2002",
      demo: "#",
    },

    {
      title: "EarnAcademy LMS",
      description:
        "Learning Management System for managing students, courses, instructors and educational content.",
      tech: ["Python", "Django", "MySQL"],
      github: "https://github.com/Avnish2002",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
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
            My <span className="text-red-500">Projects</span>
          </h2>

          <p className="text-center text-gray-400 mt-6">
            Some of the projects I have built.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-[#111] p-8 rounded-2xl border border-red-500/20 hover:border-red-500 transition-all hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">

                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}

              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-red-500 px-5 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-red-500 px-5 py-2 rounded-lg hover:bg-red-500 transition"
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;