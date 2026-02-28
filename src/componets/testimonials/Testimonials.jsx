export default function Testimonials() {
  return (
    <div className="testimonials px-6! py-12! max-w-6xl! mx-auto!">
      <div className="cards grid gap-8 md:grid-cols-1">
        
        <div className="test-card rounded-xl shadow-lg p-6! hover:shadow-xl transition-shadow duration-300">
          
          {/* Label */}
          <div className="date text-lg text-orange-400 mb-3!">
            Testimonials
          </div>

          {/* Title */}
          <div className="info mb-4!">
            <h3 className="text-xl font-semibold text-gray-100 mb-1!">
              What People Say About Working With Me
            </h3>
            <p className="text-gray-400">
              Feedback and experiences shared by collaborators and clients.
            </p>
          </div>

          {/* Content */}
          <div className="bg-[#1f2430] rounded-lg p-6! text-center border border-dashed border-gray-600">
            <p className="text-gray-300 italic mb-3!">
              "Coming soon! I'm currently gathering feedback from my collaborators."
            </p>
            <h4 className="text-lg font-semibold text-white">
               Stay Tuned
            </h4>
          </div>

        </div>

      </div>
    </div>
  );
}