import React from "react";
import Header from "../componets/header/Header.jsx";
const services = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Crafting intuitive and aesthetically pleasing interfaces that prioritize user experience.",
  },
  {
    icon: "📱",
    title: "Responsive Website",
    desc: "Building fluid layouts that look and perform perfectly on all devices and screen sizes.",
  },
  {
    icon: "🔌",
    title: "API Integration",
    desc: "Connecting front-end applications with powerful backend services for dynamic content.",
  },
];

export default function Service() {
  return (
    <div>
      <Header
        title="My Services"
        para="I provide comprehensive frontend solutions, from design to deployment."
      ></Header>
      <div className="services bg-[#0f172a] py-16! px-6! rounded-xl">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="mb-12!">
            <h2 className="text-3xl font-bold text-orange-500 mb-2!">
              My Services
            </h2>
            <p className="text-gray-400 max-w-xl">
              I provide comprehensive frontend solutions, from design to
              deployment.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#262a33] p-6! rounded-2xl flex items-start gap-4 hover:bg-[#273449] transition duration-300"
              >
                <div className="bg-white p-3! rounded-xl text-2xl">
                  {service.icon}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-1!">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
