
// Import your images here
import optimizeImg from '../assets/BankCard.png';
import fasterProcessImg from '../assets/Video (1).png';
import flexibleSolutionImg from '../assets/Video (2).png';
import integrationImg from '../assets/Video (4).png';
import bgImage from '../assets/Background.png'; 

export default function ReasonsToPartner() {
  return (
    <section className="min-h-fit text-white px-4 md:px-6 lg:px-10 py-6 md:py-8 relative overflow-hidden">

      {/* Section Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

      <div className="relative z-10">
        {/* Top Heading */}
        <div className="text-center mb-5">
          <p className="text-[9px] text-gray-400 mb-1.5 uppercase tracking-widest">Reasons to Partner</p>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold leading-tight">
            Exceptional <span className="text-gray-500">Support for Your</span><br />
            <span className="text-gray-500">Success</span>
          </h2>
        </div>

        {/* Outer Box with Background */}
        <div
          className="p-4  "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.9
          }}
        >
          {/* Grid Layout */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            {/* Card 1 */}
            <div className="rounded-xl border border-transparent p-4 flex flex-col justify-between shadow-none transition-all duration-300 min-h-[280px]">
              <div className="mb-4">
                <div className="w-full h-28 rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={optimizeImg}
                    alt="Payment Card"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xs font-bold mb-2">
                  Optimize <span className="text-gray-300">customer journeys</span>
                </h3>
                <p className="text-gray-300 text-[10px] mb-3 leading-relaxed">
                  Streamlined transactions enhancing efficiency and customer satisfaction.
                </p>
                <button className="flex items-center gap-1 text-[10px] text-white bg-blue-500/30 px-2.5 py-1 rounded-full border border-blue-400/40 hover:bg-blue-500/40 hover:border-blue-300/60 transition-all duration-300">
                  Explore
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="lg:col-span-2 rounded-xl border border-transparent p-4 shadow-none transition-all duration-300 min-h-[280px]">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-sm font-bold mb-2">
                    Faster Processing Time
                  </h3>
                  <p className="text-gray-300 text-[10px] mb-3 leading-relaxed max-w-md">
                    Quick and efficient payment processing for a seamless user experience.
                  </p>
                  <button className="flex items-center gap-1 text-[10px] text-white bg-blue-500/30 px-2.5 py-1 rounded-full border border-blue-400/40 hover:bg-blue-500/40 hover:border-blue-300/60 transition-all duration-300">
                    Learn more
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1 flex items-center justify-center">
                  <div className="w-full max-w-md h-28 rounded-lg overflow-hidden flex items-center justify-center p-2">
                    <img
                      src={fasterProcessImg}
                      alt="Processing"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="lg:col-span-2 rounded-xl border border-transparent p-4 shadow-none transition-all duration-300 min-h-[280px]">
              <div className="flex flex-col">
                <div className="mb-4">
                  <div className="w-full h-36 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                      src={flexibleSolutionImg}
                      alt="Flexible Solutions"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-2">
                    Flexible Solutions
                  </h3>
                  <p className="text-gray-300 text-[10px] mb-3 leading-relaxed">
                    Customizable options to meet the unique needs of your business.
                  </p>
                  <button className="flex items-center gap-1 text-[10px] text-white bg-blue-500/30 px-2.5 py-1 rounded-full border border-blue-400/40 hover:bg-blue-500/40 hover:border-blue-300/60 transition-all duration-300">
                    Explore more
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-transparent p-4 flex flex-col justify-between shadow-none transition-all duration-300 min-h-[280px]">
              <div className="mb-4">
                <h3 className="text-xs font-bold mb-2">
                  Effortless Integration
                </h3>
                <p className="text-gray-300 text-[10px] mb-3 leading-relaxed">
                  Simple API integration with your existing systems and platforms.
                </p>
                <button className="flex items-center gap-1 text-[10px] text-white bg-blue-500/30 px-2.5 py-1 rounded-full border border-blue-400/40 hover:bg-blue-500/40 hover:border-blue-300/60 transition-all duration-300">
                  Learn more
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 flex items-end">
                <div className="w-full h-28 rounded-lg overflow-hidden flex items-center justify-center p-2">
                  <img
                    src={integrationImg}
                    alt="Integration"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
