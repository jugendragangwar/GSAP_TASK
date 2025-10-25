import React from "react";
import upiIcon from "../assets/Frame 1.png";
import apiIcon from "../assets/Frame 2.png";
import payoutsIcon from "../assets/Frame 3.png";
import bulkIcon from "../assets/Frame 4.png";

const cards = [
  {
    icon: upiIcon,
    title: "UPI Autopay",
    desc: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
  },
  {
    icon: apiIcon,
    title: "API Banking",
    desc: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
  },
  {
    icon: payoutsIcon,
    title: "Payouts",
    desc: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
  },
  {
    icon: bulkIcon,
    title: "Bulk Payments",
    desc: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
  },
];

function FeatureSimCard({ icon, title, desc }) {
  return (
    <div className="group relative">
      {/* Outer SIM border */}
      <div
        className="relative rounded-[30px] border border-[#a855f7] transition-all duration-300"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
        }}
      >
        {/* Inner Card */}
        <div
          className="p-6 sm:p-8 bg-[#111111] rounded-[28px] relative overflow-hidden min-h-[380px] sm:min-h-[480px] flex flex-col justify-between"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)",
          }}
        >
          {/* Top-right Shield icon */}
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="12" fill="#1A1A1A" />
              <path
                d="M28 14v7.157c0 1.274-.686 2.462-1.799 3.044l-4.39 2.38a3.567 3.567 0 0 1-3.622 0l-4.39-2.38A3.543 3.543 0 0 1 12 21.157V14l8-2.8 8 2.8z"
                fill="#232847"
                stroke="#a855f7"
                strokeWidth="1.5"
              />
              <path
                d="M18.5 23.7l2.1 1.3 2.9-2.9"
                stroke="#a855f7"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Card Content */}
          <div className="h-full flex flex-col items-center text-center gap-4">
            <img
              src={icon}
              alt={title}
              className="w-32 sm:w-52 h-32 sm:h-52 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-sm sm:text-base font-semibold text-white">{title}</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed px-2 sm:px-4">
              {desc}
            </p>
          </div>

          {/* Arrow bottom-right */}
          <div className="absolute bottom-3 sm:bottom-4 right-6 sm:right-10">
            <svg
              className="w-6 sm:w-8 h-6 sm:h-8 text-[#a855f7] group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                d="M5 12h14m0 0l-6-6m6 6l-6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ExpertiseSection() {
  return (
    <section className="bg-[#0A0A0A] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h3 className="text-purple-500 text-sm sm:text-base tracking-widest uppercase mb-2">
            Our Expertise
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Payment Solutions
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-7">
          {cards.map((card, i) => (
            <FeatureSimCard key={i} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
