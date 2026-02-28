import "./App.css";
import Navbar from "./componets/navbar/Navbar.jsx";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ArrowRight } from "lucide-react";
import EcommerceImg from "./assets/images/Ecommerce.png";
import DashboardImg from "./assets/images/Dashborad.png";
import PortfolioImg from "./assets/images/Portfolio.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experince from "./pages/Experince.jsx";
import Contactt from "./pages/Contactt.jsx";
import Service from "./pages/Service.jsx";

// const projects = [
//   {
//     name: "market",
//     type: "Ecommerce Template",
//     img: EcommerceImg,
//   },
//   {
//     name: "Dashboard",
//     type: "Dashboard Template",
//     img: DashboardImg,
//   },
//   {
//     name: "Revo",
//     type: "Portfolio Template",
//     img: PortfolioImg,
//   },
// ];

// const skills = [
//   {
//     name: "HTML5",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
//     desc: "Semantic & accessible markup.",
//   },
//   {
//     name: "CSS3",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
//     desc: "Responsive layouts & animations.",
//   },
//   {
//     name: "JavaScript",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
//     desc: "Interactive and dynamic UIs.",
//   },
//   {
//     name: "React",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//     desc: "Modern component-based apps.",
//   },
//   {
//     name: "Tailwind CSS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
//     desc: "Fast utility-first styling.",
//   },
//   {
//     name: "Node JS",
//     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//     desc: "Scalable backend development.",
//   },
// ];

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects></Projects>} />
            <Route path="experince" element={<Experince></Experince>} />
            <Route path="contact" element={<Contactt></Contactt>} />
            <Route path="services" element={<Service></Service>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
