export default function NeonTagline() {
  return (
    <section className="relative overflow-hidden bg-black w-full h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h2 className="flex flex-wrap justify-center items-center gap-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500"
            style={{
              textShadow:
                "0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.5), 0 0 90px rgba(147, 51, 234, 0.3)",
            }}
          >
            We focus on your finances,
          </span>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500"
            style={{
              textShadow:
                "0 0 30px rgba(147, 51, 234, 0.8), 0 0 60px rgba(147, 51, 234, 0.5), 0 0 90px rgba(147, 51, 234, 0.3)",
            }}
          >
            you focus on what matters
          </span>
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500"
            style={{
              textShadow:
                "0 0 25px rgba(147, 51, 234, 0.8), 0 0 30px rgba(147, 51, 234, 0.5), 0 0 90px rgba(147, 51, 234, 0.3)",
            }}
          >
            most. {'Your'}
          </span>
          <span className="text-gray-700 opacity-40">
             finance our pride, Always Safe & Reliable.
          </span>
        </h2>
      </div>
    </section>
  );
}
