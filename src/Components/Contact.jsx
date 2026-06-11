import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();

    useEffect(() => {
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        if (publicKey) {
            emailjs.init(publicKey);
        } else {
            console.warn("EmailJS public key is missing. Restart Vite after adding .env variables.");
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            alert("Email configuration is missing. Please restart the dev server after updating .env.");
            console.error("Missing EmailJS env:", { serviceId, templateId, publicKey });
            return;
        }

        emailjs
            .sendForm(serviceId, templateId, form.current, publicKey)
            .then(() => {
                alert("Message sent successfully!");
                form.current.reset();
            })
            .catch((error) => {
                console.error("EmailJS error:", error);
                const errorMessage =
                    error?.text || error?.message || error?.status || "Failed to send message.";
                alert(`Failed to send message: ${errorMessage}`);
            });
    };
    return (
        <section
            id="contact"
            className="py-24 bg-[#0a0a0a]"
        >
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-center text-5xl font-bold mb-6">
                        Contact <span className="text-red-500">Me</span>
                    </h2>

                    <p className="text-center text-gray-400 max-w-2xl mx-auto">
                        Have a project, internship opportunity or collaboration in mind?
                        Feel free to reach out.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 mt-16">

                    {/* Left Side */}
                    <div>

                        <h3 className="text-3xl font-bold mb-8">
                            Let's Connect
                        </h3>

                        <div className="space-y-6">

                            <a
                                href="mailto:helloavnishk@gmail.com"
                                className="flex items-center gap-4 hover:text-red-500 transition"
                            >
                                <FaEnvelope className="text-2xl text-red-500" />
                                <span>helloavnishk@gmail.com</span>
                            </a>

                            <a
                                href="https://github.com/Avnish2002"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-red-500 transition"
                            >
                                <FaGithub className="text-2xl text-red-500" />
                                <span>github.com/Avnish2002</span>
                            </a>

                            <a
                                href="https://linkedin.com/in/avnish2002"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 hover:text-red-500 transition"
                            >
                                <FaLinkedin className="text-2xl text-red-500" />
                                <span>linkedin.com/in/avnish2002</span>
                            </a>

                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-2xl text-red-500" />
                                <span>Greater Noida, India</span>
                            </div>

                        </div>

                    </div>

                    {/* Right Side Form */}
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="bg-[#111] p-8 rounded-2xl border border-red-500/20"
                    >

                        <div className="mb-5">
                            <input
                                name="user_name"
                                type="text"
                                placeholder="Your Name"
                                required
                                className="w-full p-4 bg-[#1a1a1a] rounded-lg outline-none"
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                name="user_email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="w-full p-4 bg-[#1a1a1a] rounded-lg outline-none"
                            />
                        </div>

                        <div className="mb-5">
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                required
                                className="w-full p-4 bg-[#1a1a1a] rounded-lg outline-none"
                            />
                        </div>

                        <div className="mb-5">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Message"
                                required
                                className="w-full p-4 bg-[#1a1a1a] rounded-lg outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-red-500 hover:bg-red-600 px-8 py-3 rounded-lg transition"
                        >
                            Send Message
                        </button>

                    </form>

                </div>
            </div>
        </section>
    );
}

export default Contact;