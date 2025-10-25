import React from 'react';
import Hex from '../assets/Hex.png';
import blueBg from '../assets/BG-blur.png';
import bgImage from '../assets/Background.png'; // Your new background image

export default function PayoutServiceUI() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden text-white flex items-center justify-center">

      {/* Outer Box with Background Image */}
      <div
        className="relative w-full max-w-7xl mx-auto rounded-3xl p-12"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* subtle blue radial overlay */}
        <img
          src={blueBg}
          alt="bg"
          className="pointer-events-none absolute -right-24 top-0 w-[48rem] opacity-25 blur-[2px]"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">

          {/* LEFT: copy */}
          <div className="relative">
            {/* vertical decorative line + gem */}
            <div className="absolute left-0 top-12 -translate-x-6 flex items-start">
              <div className="w-0.5 h-40 bg-gradient-to-b from-[#3af2fa] to-transparent opacity-60 rounded" />
              <div className="w-3 h-3 bg-[#e6faff] rounded-full ml-[-6px] mt-0 shadow-[0_0_12px_rgba(58,242,250,0.6)]"></div>
            </div>

            <span className="inline-block px-4 py-1 rounded-full border border-[#183244] text-sm text-[#9fb3c3] mb-6">
              Payout Service Centric
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              Streamlined for Payout Ease and
              <br /> Efficiency
            </h2>

            <div className="space-y-6 text-[#bfc6cc] mb-10">
              <div>
                <h3 className="text-lg font-semibold text-white">Comprehensive Documentation</h3>
                <p className="mt-2 text-sm">Access clear, detailed documentation that simplifies integration and accelerates your payout setup.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white/90">Quick Start SDKs</h3>
                <p className="mt-2 text-sm text-[#9da6ad]">Leverage our ready-to-use SDKs for various programming languages, enabling quick and smooth payout implementation.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white/90">Sandbox Environment</h3>
                <p className="mt-2 text-sm text-[#8f98a0]">Test and refine your payout integration in a secure sandbox environment before going live, ensuring a seamless launch.</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#2dd4f5] to-[#0066ff] text-black font-semibold shadow-[0_10px_40px_rgba(0,102,255,0.18)] transition-transform transform hover:-translate-y-0.5"
              >
                Get Started
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14M13 5l7 7-7 7" stroke="#00121a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT: hex visuals */}
          <div className="relative flex justify-center lg:justify-end items-center">
            <div className="relative w-full max-w-[680px]">
              <img src={Hex} alt="hex-grid" className="w-full h-auto drop-shadow-[0_0_40px_rgba(0,0,0,0.6)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
