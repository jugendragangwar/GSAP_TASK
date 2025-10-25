import React from 'react';
import BgImage from '../assets/BG-blur.png'; // Background blur
import FlashLight from '../assets/Title-img.png'; // Flashlight glow effect

export default function PaymentSimplifySection() {
  return (
    <section
      className="relative min-h-[500px] flex items-center justify-center w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url(${BgImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Flashlight Glow Effect - Left Side */}
      <img
        src={FlashLight}
        alt=""
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[400px] md:w-[600px] opacity-70 pointer-events-none z-0"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b0e17]/80 to-[#050612]/90 z-0" />

      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-6 py-16 items-center justify-between gap-12">

        {/* Left Side - Text Content */}
        <div className="flex-1 min-w-[320px]">
          <div className="mb-6">
            <span className="inline-block bg-[#1e2446] text-[#b4bbd8] rounded-full px-5 py-2 text-xs uppercase tracking-wider font-semibold border border-[#3a4166] shadow-lg">
              Reliable, and Efficient
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Simplify the<br/>payments process
          </h2>
          <p className="text-[#b8c0d8] text-lg leading-relaxed">
            Tools crafted to simplify and enhance your payout processes.
          </p>
        </div>

        {/* Right Side - Single Box with Both Parts */}
        <div className="flex-1 flex items-center justify-end min-w-[500px]">

          {/* Main Container Box - Better Visibility */}
          <div className="bg-[#0f1421]/90 border-2 border-[#2a3150] rounded-2xl p-8 w-full max-w-[600px] backdrop-blur-md shadow-2xl">

            <div className="flex gap-8">

              {/* Left Column - Vertical Flow */}
              <div className="flex-1">
                <div className="flex flex-col gap-4">

                  {/* Top Box - Brighter */}
                  <div className="bg-[#1a1f35] border-2 border-[#2d3450] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#252b45] rounded-lg border border-[#3a4166]" />
                      <div className="flex-1 h-3 bg-[#2d3450] rounded" />
                    </div>
                  </div>

                  {/* Connection Line - Brighter */}
                  <div className="flex justify-center">
                    <div className="w-[3px] h-6 bg-gradient-to-b from-[#25A5F7] to-[#25A5F7]/50" />
                  </div>

                  {/* Middle Box - Sandbox Environment (More Glow) */}
                  <div className="bg-gradient-to-br from-[#0d3a5a] to-[#142548] border-2 border-[#2a6b9f] rounded-xl p-4 shadow-[0_0_40px_rgba(37,165,247,0.3)]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#25A5F7] to-[#1e88d4] rounded-lg flex items-center justify-center shadow-lg">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-white font-semibold text-sm">Sandbox Environment</span>
                    </div>
                  </div>

                  {/* Connection Line - Brighter */}
                  <div className="flex justify-center">
                    <div className="w-[3px] h-6 bg-gradient-to-b from-[#25A5F7]/60 to-[#25A5F7]/20" />
                  </div>

                  {/* Bottom Box - Brighter */}
                  <div className="bg-[#1a1f35] border-2 border-[#2d3450] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#252b45] rounded-lg border border-[#3a4166]" />
                      <div className="flex-1 h-3 bg-[#2d3450] rounded" />
                    </div>
                  </div>

                </div>
              </div>

              {/* Right Column - Quick Start SDKs - Brighter */}
              <div className="flex-1">

                {/* Header - More Vibrant */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#a855f7] flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-base">Quick Start SDKs</span>
                </div>

                {/* Section 1 - Better Contrast */}
                <div className="mb-5">
                  <p className="text-[#9ca3c7] text-xs font-medium mb-2">Programming Languages</p>
                  <div className="bg-[#1a1f35] rounded-lg p-4 border-2 border-[#2d3450]">
                    <div className="space-y-2">
                      <div className="h-2 bg-[#2d3450] rounded w-3/4" />
                      <div className="h-2 bg-[#2d3450] rounded w-1/2" />
                      <div className="h-2 bg-[#2d3450] rounded w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Section 2 - Better Contrast */}
                <div className="mb-4">
                  <p className="text-[#9ca3c7] text-xs font-medium mb-2">Sandbox Environment</p>
                  <div className="bg-[#1a1f35] rounded-lg p-3 border-2 border-[#2d3450]">
                    <div className="h-2 bg-[#2d3450] rounded w-2/3" />
                  </div>
                </div>

                {/* Section 3 - Better Contrast */}
                <div>
                  <p className="text-[#9ca3c7] text-xs font-medium mb-2">Environment Setup</p>
                  <div className="bg-[#1a1f35] rounded-lg p-3 border-2 border-[#2d3450]">
                    <div className="h-2 bg-[#2d3450] rounded w-3/5" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
