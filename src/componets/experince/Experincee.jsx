
export default function Experincee() {
  return (
    <div className="exper px-6! py-12! max-w-6xl mx-auto">
      <div className="cards grid gap-8 md:grid-cols-1">
        <div className="exp-card rounded-xl shadow-lg p-6! hover:shadow-xl transition-shadow duration-300">
          <div className="date text-sm text-orange-400 mb-3!">
            Nov 2025 — May 2026
          </div>
          <div className="info mb-4!">
            <h3 className="text-xl font-semibold text-gray-100 mb-1!">
              Frontend Training — React js
            </h3>
            <p className="text-gray-400">
              Digital Egypt Pioneers Initiative (DEPI) — Online
            </p>
          </div>
          <ul className="list-disc list-inside text-gray-400 space-y-2!">
            <li>
              Building modern, dynamic web applications using React js for the
              Digital Egypt Pioneers Initiative.
            </li>
            <li>
              Developed responsive websites using React js framework with
              Bootstrap, focusing on component-based architecture and dynamic
              UI.
            </li>
            <li>
              Delivered production-ready, dynamic and responsive web interfaces
              with clean, maintainable code.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}


