import { motion } from "framer-motion";
import introVideo from "../assets/intro.mp4";

function VideoIntro() {
  return (
    <section
      id="video"
      className="py-24 bg-[#0a0a0a]"
    >
      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-4xl md:text-5xl font-bold mb-6">
            Video <span className="text-red-500">Introduction</span>
          </h2>

          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            Watch a short introduction to learn more about my
            skills, projects and passion for software development.
          </p>

          <div className="max-w-5xl mx-auto">

            <div className="relative rounded-3xl overflow-hidden border border-red-500/30 shadow-[0_0_60px_rgba(239,68,68,0.2)]">

              <video
                controls
                className="w-full"
              >
                <source
                  src={introVideo}
                  type="video/mp4"
                />
              </video>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default VideoIntro;