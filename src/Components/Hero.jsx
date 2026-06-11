import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope
} from "react-icons/fa";
import profile from "../assets/profile.jpg";
import resume from "../assets/resume.pdf";


function Hero() {
    return (
        <section
            id="home"
            className="min-h-[calc(100vh-5rem)] flex items-center justify-center bg-[#080808] text-white pt-16 md:pt-20 pb-10"
        >
            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-6 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-red-500 text-lg md:text-xl mb-5 block">
                        Hi, I'm
                    </p>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                        AVNISH
                        <br />
                        <span className="text-red-500">KUMAR</span>
                    </h1>

                    <div className="text-base md:text-2xl font-semibold mt-4 text-gray-300">

                        <TypeAnimation
                            sequence={[
                                "Full Stack Developer",
                                2000,
                                "React Developer",
                                2000,
                                "Python Developer",
                                2000,
                                "Django Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />

                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full">
                            React Developer
                        </span>

                        <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full">
                            Python Developer
                        </span>

                        <span className="px-4 py-2 bg-red-500/20 text-red-400 rounded-full">
                            Django Developer
                        </span>
                    </div>


                    <p className="mt-6 text-gray-400 max-w-xl">
                        I build fast, scalable and modern web applications
                        using React.js, Python, Django, Node.js and
                        modern web technologies.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">

                        <a
                            href="#projects"
                            className="bg-red-500 px-6 py-3 rounded-lg hover:bg-red-600 transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="border border-red-500 px-6 py-3 rounded-lg hover:bg-red-500 transition"
                        >
                            Contact Me
                        </a>

                        <a
                            href={resume}
                            download
                            className="border border-red-500 text-red-500 px-6 py-3 rounded-lg hover:bg-red-500 hover:text-white transition"
                        >
                            Download Resume
                        </a>


                    </div>

                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex justify-center relative"
                >

                    <div className="absolute w-72 h-72 bg-red-500 blur-[120px] opacity-30"></div>

                    <img
                        src={profile}
                        alt="Avnish Kumar"
                        className="relative w-[420px] h-[420px] object-cover rounded-full border-4 border-red-500 shadow-2xl"
                    />
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;