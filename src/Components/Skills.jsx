import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 75 },

    { name: "Python", level: 90 },
    { name: "Django", level: 85 },
    { name: "Node.js", level: 80 },

    { name: "MySQL", level: 85 },
    { name: "MongoDB", level: 80 },

    { name: "Git", level: 85 },
    { name: "GitHub", level: 90 },
    { name: "VS Code", level: 95 },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            My <span className="text-red-500">Skills</span>
          </h2>

          <p className="text-center text-gray-400 mt-6 max-w-3xl mx-auto">
            Technologies and tools I use to build
            scalable, modern and high-performance
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className="bg-[#111] p-6 rounded-xl border border-red-500/10"
            >
              <div className="flex justify-between mb-3">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-red-500"
                />

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;