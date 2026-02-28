export default function Achievements() {
  return (
    <div className="achievements px-6! py-12! max-w-6xl! mx-auto!">
      <div className="cards grid gap-8 md:grid-cols-1">
        
        <div className="ach-card rounded-xl shadow-lg p-6! hover:shadow-xl transition-shadow duration-300">
          
          {/* Date / Label */}
          <div className="date text-lg text-orange-400 mb-3!">
            Achievements
          </div>

          {/* Title */}
          <div className="info mb-4!">
            <h3 className="text-xl font-semibold text-gray-100 mb-1!">
              Key Milestones & Recognition
            </h3>
            <p className="text-gray-400">
              Highlights from my professional and academic journey.
            </p>
          </div>

          {/* Content */}
          <div className="bg-[#1f2430] rounded-lg p-6! text-center border border-dashed border-gray-600">
            <h4 className="text-lg font-semibold text-white mb-2!">
               Coming Soon
            </h4>
            <p className="text-gray-400">
              Stay tuned for updates and upcoming achievements.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}