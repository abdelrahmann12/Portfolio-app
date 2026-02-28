
import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <div className="education px-6! py-12! max-w-6xl! mx-auto!">
        
      <div className="cards grid gap-8 md:grid-cols-1">
        <div className="edu-card relative rounded-xl shadow-lg p-6! hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-400">
          
          {/* Icon */}
          {/* <div className="absolute -left-7 top-3 w-12 h-12 bg-orange-400 text-white rounded-full flex items-center justify-center shadow-lg">
            <FaGraduationCap size={24} />
          </div> */}

          {/* Date */}
          <div className="date text-sm text-orange-400 mb-3!">
            2019 — 2024
          </div>

          {/* Title */}
          <div className="info mb-4!">
            <h3 className="text-xl font-semibold text-gray-100 mb-1! flex items-center gap-2">
              Bachelor of Science — Physics
              <span className="ml-2! bg-gray-700 text-orange-400 text-sm px-2! py-1! rounded-full">
                GPA 2.84
              </span>
            </h3>
            <p className="text-gray-400">
                Faculty of Science, Physics Department — Mansoura University — Mansoura
            </p>
          </div>

          {/* Details */}
          <ul className="list-disc list-inside text-gray-400 space-y-2!">
            <li>Graduated in 2024.</li>
            <li>
              Built strong foundations in problem solving, analytical thinking, 
              and core engineering principles.
            </li>
            <li>
              Combined academic knowledge with self-driven frontend development 
              and hands-on real-world projects.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}