import React from "react";
import Header from "../componets/header/Header.jsx";

export default function Contactt() {
  return (
    <div>
      <Header
        title="Contact"
        para="Whether youre interested in working together on a new project, have questions about my services, or just want to say hello, I d love to hear from you."
      ></Header>
      <div className=" contact  mx-auto mt-12! p-8! rounded-xl shadow-lg">
        {/* Name Input */}
        <div className="mb-4!">
          <label className="block text-gray-400 mb-1! text-start" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="w-full px-4! py-3! rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4!">
          <label className="block text-gray-400 mb-1! text-start" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your@email.com"
            className="w-full px-4! py-3! rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Message Textarea */}
        <div className="mb-4!">
          <label className="block text-gray-400 mb-1! text-start" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            rows="4"
            className="w-full px-4! py-3! rounded-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="w-full py-3! rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors">
          Submit
        </button>
      </div>
    </div>
  );
}
