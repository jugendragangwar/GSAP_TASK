import React from "react";

// Tab Icons
import payIcon from "../assets/Icon (3).png";
import payoutIcon from "../assets/Icon.png";
import payrollIcon from "../assets/Icon (1).png";
import aiIcon from "../assets/Icon (2).png";

// Feature Icons
import lightningIcon from "../assets/Vector 4.png";
import secureIcon from "../assets/Vector 5.png";
import networkIcon from "../assets/Vector 6.png";

// Hero Image
import heroImg from "../assets/123.png";

// Background Decorations
import leftDecor from "../assets/div.png";
import rightDecor from "../assets/div.png";

const tabs = [
  { label: "Payments", icon: payIcon },
  { label: "Payout", icon: payoutIcon },
  { label: "Payroll", icon: payrollIcon },
  { label: "AI Banking", icon: aiIcon },
];

export default function PaymentHero() {
  const features = [
    { icon: lightningIcon, label: "Optimize your checkout optimization" },
    { icon: secureIcon, label: "Fast and Secure" },
    { icon: networkIcon, label: "Smooth integration" },
  ];

  return (
    <section className="min-h-screen text-white px-4 sm:px-6 md:px-12 lg:px-24 pb-10">
      {/* Top Heading */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-2 mt-2">
          <div className="h-[1px] w-12 sm:w-16 bg-gray-600"></div>
          <p className="text-sm text-gray-400 tracking-wide whitespace-nowrap">
            Enhancing payments
          </p>
          <div className="h-[1px] w-12 sm:w-16 bg-gray-600"></div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Powering Payments <span className="text-gray-500">Across</span>
          <br />
          <span className="text-gray-500">Industries</span>
        </h1>
      </div>

      {/* Upper Box */}
      <div className="max-w-5xl mx-auto relative rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl mb-20 overflow-hidden border border-[#2b2f55]/60">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1535] via-[#1a2555] to-[#2a4580] opacity-90" />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-[#1e3a7a]/20 to-transparent" />

        {/* Content */}
        <div className="relative z-10">
          {/* Tabs */}
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            <div className="bg-[#111426] rounded-full p-2.5 flex flex-wrap items-center justify-center gap-2 border border-[#2b2f55]/40 backdrop-blur-sm">
              {tabs.map((t, i) => (
                <button
                  key={t.label}
                  className={`flex items-center gap-2.5 px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-medium transition ${
                    i === 0
                      ? "bg-[#161a38] text-white shadow-inner border border-[#3b3266]"
                      : "text-[#b8bfd8] hover:bg-[#1a1d33]"
                  }`}
                >
                  <img src={t.icon} alt={t.label} className="w-4 sm:w-5 h-4 sm:h-5" />
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Hero Content */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 text-white">
                Elevate Your Online Store's Payment Experience
              </h2>
              <p className="text-[#b8bfd8] text-sm sm:text-base leading-relaxed mb-5">
                Our payment gateway provides solutions for a seamless checkout experience globally. With smooth integrations, we ensure your store doesn't compromise.
              </p>
              <button className="bg-gradient-to-r from-[#3b82f6] to-[#06b6d4] py-2 px-6 sm:px-7 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition-all shadow-lg text-white">
                Get Started
              </button>

              {/* Features */}
              <div className="mt-6 flex flex-col gap-3 sm:gap-4">
                {features.map((f) => (
                  <div key={f.label} className="flex items-center gap-2.5">
                    <img src={f.icon} alt={f.label} className="w-5 h-5 sm:w-6 sm:h-6" />
                    <p className="text-[#9aa4d6] text-xs sm:text-sm">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center md:justify-end">
              <img src={heroImg} alt="Hero visual" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative max-w-6xl mx-auto py-16 px-4 sm:px-8">
        {/* Left & Right Decor */}
        <img src={leftDecor} alt="" className="absolute left-0 top-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-60 opacity-60 pointer-events-none" />
        <img src={rightDecor} alt="" className="absolute right-0 top-1/2 -translate-y-1/2 w-32 sm:w-48 md:w-60 opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              Let's build the
              <br />
              future of finance together
            </h2>
          </div>
          <div>
            <button className="bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] py-2.5 px-6 sm:px-8 rounded-full font-semibold hover:opacity-90 transition-all shadow-lg flex items-center gap-2 whitespace-nowrap mx-auto md:mx-0">
              Get Started
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
