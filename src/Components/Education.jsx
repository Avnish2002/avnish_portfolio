import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      college: "NIET Greater Noida",
      year: "2024 - 2026",
      score: "73%",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      college: "M.L.T College, Saharsa",
      year: "2021 - 2024",
      score: "82%",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 bg-[#080808]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold mb-16">
            My <span className="text-red-500">Education</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">

          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-red-500"></div>

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >
              {/* Circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-red-500 border-4 border-white shadow-lg"></div>

              {/* Card */}
              <div className="ml-14 md:ml-0 bg-[#111] border border-red-500/20 p-6 rounded-2xl w-full md:w-[45%]">
                <h3 className="text-2xl font-bold text-red-500">
                  {item.degree}
                </h3>

                <p className="text-lg mt-2">
                  {item.college}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.year}
                </p>

                <p className="text-green-400 font-bold mt-3">
                  Score: {item.score}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;