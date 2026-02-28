import { ArrowRight } from "lucide-react";
import EcommerceImg from "../assets/images/Ecommerce.png";
import DashboardImg from "../assets/images/Dashborad.png";
import PortfolioImg from "../assets/images/Portfolio.png";
import Header from "../componets/header/Header.jsx";

const projects = [
  { name: "market", type: "Ecommerce Template", img: EcommerceImg },
  { name: "Dashboard", type: "Dashboard Template", img: DashboardImg },
  { name: "Portfolio", type: "Portfolio Template", img: PortfolioImg },
];

export default function Projects() {
  return (
    <>
    <Header></Header>
    <section className="projects rounded-xl !">
      <section className="py-10">
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
              <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition">
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </section>
    </>
    
  );
}
