import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] py-16! px-6! rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-2xl font-semibold text-orange-500 mb-6!">
          Abdelrahman
        </h2>

        {/* Navigation Links */}
        <div className="flex justify-center gap-8 text-gray-400 mb-7!">
          <a href="#" className="hover:text-white transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Projects
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Skills
          </a>
          <a href="#" className="hover:text-white transition duration-300">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-6!"></div>

        {/* Bottom Text */}
        <p className="text-gray-500 text-sm">
          Made by Abdelrahman | Powered by T w i s t
        </p>
      </div>
    </footer>
  );
}
