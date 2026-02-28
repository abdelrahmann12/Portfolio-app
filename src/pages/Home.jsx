import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import EcommerceImg from "../assets/images/Ecommerce.png";
import DashboardImg from "../assets/images/Dashborad.png";
import PortfolioImg from "../assets/images/Portfolio.png";
import Education from "../componets/education/Education.jsx";
import Services from "../componets/services/Services.jsx";
import Achievements from "../componets/achievements.jsx";
import Testimonials from "../componets/testimonials/Testimonials.jsx";

const projects = [
  { name: "market", type: "Ecommerce Template", img: EcommerceImg },
  { name: "Dashboard", type: "Dashboard Template", img: DashboardImg },
  { name: "Portfolio", type: "Portfolio Template", img: PortfolioImg },
];

const skills = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    desc: "Semantic & accessible markup.",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    desc: "Responsive layouts & animations.",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    desc: "Interactive and dynamic UIs.",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    desc: "Modern component-based apps.",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    desc: "Fast utility-first styling.",
  },
  {
    name: "Node JS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    desc: "Scalable backend development.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero flex items-center justify-center flex-col gap-2">
        <div className="image w-full flex justify-center">
          <img src="/public/logo.svg" alt="logo img" className="w-fit" />
        </div>
        <div className="info text-center">
          <span className=" text-amber-50">@abdelrahman</span>
          <h1 className="text-white text-2xl">Abdelrahman Emam</h1>
        </div>
        <div className="social-links flex justify-center gap-5 mt-4 text-2xl">
          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="mailto:your@email.com"
            className="hover:text-red-500 transition"
          >
            <MdEmail />
          </a>
        </div>
        <div className="details">
          <p className="text-gray-400 w-95 text-center">
            Designing and building modern, responsive, and user‑focused web
            interfaces. I transform ideas and APIs into clear, intuitive
            experiences with React, TypeScript, and clean UI engineering.
          </p>
        </div>
        {/* Download CV Button */}
        <div className="mt-6!">
          <a
            href="https://drive.google.com/uc?export=download&id=1mR_FuZFimDicN5OhREoqE63WSQkdjZjK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6! py-3! rounded-full font-semibold hover:bg-orange-600 transition duration-300 shadow-lg hover:shadow-xl"
          >
            📄 Download CV
          </a>
        </div>
      </section>
      <Education></Education>
      <div className="about px-6! py-12! max-w-6xl! mx-auto!">
        <div className="cards grid gap-8 md:grid-cols-1">
          <div className="about-card rounded-xl shadow-lg p-6! hover:shadow-xl transition-shadow duration-300">
            {/* Label */}
            <div className="text-xl text-orange-400 mb-3!">About Me</div>

            {/* Title */}
            <div className="mb-4!">
              <h3 className="text-xl font-semibold text-gray-100 mb-2!">
                Frontend React Developer
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am a Frontend React Developer focused on building responsive
                and scalable web applications. I transform business requirements
                into clean, interactive user interfaces and ensure smooth
                integration with backend APIs.
              </p>
            </div>

            {/* Highlight Box */}
            {/* <div className="bg-[#1f2430] rounded-lg p-6! border border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                I have worked on implementing authentication flows, registration
                systems, and dynamic dashboards, improving user experience and
                performance. My role centers on writing maintainable code,
                optimizing UI performance, and delivering seamless digital
                experiences.
              </p>
            </div> */}
          </div>
        </div>
      </div>
      {/* skills section */}

      <div className="skills bg-[#0f172a] py-16! px-6!">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-orange-500 mb-2!">
              Skills & Technologies
            </h2>
            <p className="text-gray-400 max-w-xl">
              The tools and technologies I use to design and build modern web
              applications.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#262a33] p-6! rounded-2xl flex items-start gap-4 hover:bg-[#273449] transition duration-300 z-2"
              >
                <div className="bg-white p-3! rounded-xl">
                  <img src={skill.icon} width="40" alt={skill.name} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg">
                    {skill.name}
                  </h3>
                  <p className="text-gray-400 text-sm">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <Services></Services>
      {/* projects section */}
      <section className="projects rounded-xl ">
        <section className="py-10!">
          <h2 className="text-2xl font-bold text-orange-500 mb-6!">Projects</h2>
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <div
                key={project.name}
                className="project bg-[#262A33] flex cursor-pointer items-center justify-between px-4! py-3! rounded-lg hover:bg-gray-700 transition z-1 "
              >
                <div className="flex items-center gap-4 ">
                  <img
                    src={project.img}
                    alt={project.name}
                    className="w-24 h-16 object-cover rounded-md"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{project.name}</h3>
                    <p className="text-gray-400 text-sm">{project.type}</p>
                  </div>
                </div>
                <button className="group relative p-2! bg-gray-700 rounded-full hover:bg-gray-600 transition cursor-pointer overflow-hidden">
                  <div className="relative w-5 h-5">
                    {/* White Arrow (Default) */}
                    <ArrowRight
                      className="absolute inset-0 w-5 h-5 text-white 
                 transition-transform duration-300 
                 group-hover:translate-x-6"
                    />

                    {/* Orange Arrow (Hover) */}
                    <ArrowRight
                      className="absolute inset-0 w-5 h-5 text-orange-400 
                 -translate-x-7 
                 transition-transform duration-300 
                 group-hover:translate-x-0"
                    />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </section>
      </section>
      <Achievements></Achievements>
      <Testimonials></Testimonials>
    </>
  );
}
